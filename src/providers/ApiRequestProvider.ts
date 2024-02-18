import { Method } from "axios";
import { AxiosProvider } from "./AxiosProvider";
import { ApiError } from "./AxiosProvider.interface";

export class ApiRequestProvider {
  api;
  prefix;

  constructor({
    baseURL,
    prefix,
    headers,
    storageAuthKey,
    authToken,
    additionalSuffixParams,
  }: {
    baseURL: string;
    prefix?: string;
    headers?: Record<string, string | number | boolean>;
    storageAuthKey: string;
    authToken?: string;
    additionalSuffixParams?: Record<string, unknown>;
  }) {
    this.api = new AxiosProvider({
      baseURL,
      headers,
      storageAuthKey,
      authToken,
      additionalSuffixParams,
    });
    this.prefix = prefix;
  }

  private exceptionHandler = (error: ApiError) => {
    if (error) {
      // Exception logic
    }
  };

  public requester = async ({
    url,
    method,
    headers,
    data = {},
  }: {
    url: string;
    method: Method;
    headers?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }) => {
    try {
      const result = await this.api.start({
        method: method as Method,
        url,
        prefix: this.prefix,
        body: data?.body,
        params: data?.params,
        headers,
      });

      return { data: result?.data || result };
    } catch (error) {
      const apiError = error as ApiError;

      this.exceptionHandler(apiError);

      return {
        error: apiError,
      };
    }
  };
}
