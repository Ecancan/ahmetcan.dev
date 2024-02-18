import { githubApi } from "@/api/github/githubApi";
import { ApiServiceMethod } from "@/enum/apiServiceMethods.enum";

export const repoApi = {
  getPublicRepositories() {
    return githubApi.requester({
      url: "/repos",
      method: ApiServiceMethod.GET,
    });
  },
};
