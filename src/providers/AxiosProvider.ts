import axios, { AxiosInstance, Method } from "axios";
import { ApiError } from "@/providers/AxiosProvider.interface";
import { ApiErrorUseCase } from "@/enum/error.enum";
import * as console from "console";

export class AxiosProvider {
  // Variables
  axiosInstance: AxiosInstance;
  baseURL: string | undefined;
  headers: Record<string, string | number | boolean> | undefined;
  additionalSuffixParams: Record<string, unknown> | undefined;
  storageAuthKey: string;
  authToken?: string;

  constructor({
    baseURL,
    headers,
    storageAuthKey,
    authToken,
    additionalSuffixParams,
  }: {
    baseURL: string;
    headers?: Record<string, string | number | boolean>;
    storageAuthKey: string;
    authToken?: string;
    additionalSuffixParams?: Record<string, unknown>;
  }) {
    this.axiosInstance = axios.create();
    this.storageAuthKey = storageAuthKey;
    this.authToken = authToken;
    this.baseURL = baseURL;
    this.setHeaders(headers);
    this.setAccessToken();
    this.additionalSuffixParams = additionalSuffixParams;
    this.setResponseInterceptors();
  }

  private setHeaders(
    _headers: Record<string, string | number | boolean> | undefined,
  ) {
    this.headers = _headers || {
      Accept: "application/json",
    };
  }

  public setAccessToken() {
    let raw = null;

    if (typeof window !== "undefined") {
      raw = localStorage?.getItem(this.storageAuthKey);
    }

    const auth = (raw?.length && JSON.parse(raw)) || this.authToken || null;

    auth &&
      (this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${auth?.access_token || auth}`);
  }

  private setAdditionalSuffixParams() {
    return {
      ...this.additionalSuffixParams,
    };
  }

  private setResponseInterceptors() {
    this.axiosInstance.interceptors.response.use(
      (response) => response?.data || response,
      async (error) => {
        const errorResponse = error?.response;
        const errorStatusCode = errorResponse?.status;
        const errorMessage = (errorResponse?.data as Record<string, unknown>)
          ?.message;

        const apiError: ApiError = {
          errorLabel: errorMessage as string,
          errorTitle: "General Error",
          useCase: ApiErrorUseCase.SHOW_MESSAGE,
          statusCode: errorStatusCode as number,
        };

        if (!error || !errorResponse) {
          apiError.errorLabel = "GLOBAL.API_ERROR.NETWORK.DESCRIPTION";
          apiError.errorTitle = "Network Error";
          apiError.useCase = ApiErrorUseCase.SHOW_MESSAGE;
        }

        return Promise.reject(apiError);
      },
    );
  }

  public async start({
    method,
    url,
    prefix,
    headers,
    body,
    params,
    rest,
  }: {
    method: Method;
    url: string;
    prefix?: string;
    headers?: Record<string, unknown> | unknown;
    body?: Record<string, unknown> | string | undefined | unknown;
    params?: Record<string, unknown> | string | undefined | unknown;
    rest?: Record<string, unknown>;
  }) {
    this.setAccessToken();
    const queryParams = typeof params === "object" ? params : {};

    const axiosResponse = await this.axiosInstance({
      method,
      url,
      headers: { ...this.headers, ...(headers || {}) },
      baseURL: `${this.baseURL}${prefix || ""}`,
      data: body,
      params: { ...this.setAdditionalSuffixParams(), ...queryParams },
      ...rest,
    });

    return axiosResponse;
  }
}
