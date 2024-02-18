import { ApiRequestProvider } from "@/providers/ApiRequestProvider";
import * as process from "process";

export const githubApi = new ApiRequestProvider({
  baseURL: "https://api.github.com/users",
  prefix: "/ecancan",
  headers: {
    Accept: "application/vnd.github+json",
  },
  storageAuthKey: "-",
  authToken: process.env.GITHUB_PAT,
});
