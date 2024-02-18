import { Metadata } from "next";
import React, { FC } from "react";
import { PageProps } from "@/types/globalTypes.interface";
import BaseView from "@/components/base/common/base-view/BaseView";
import { repoApi } from "@/api/github/services/repo/repoService";
import GithubCard from "@/components/cards/github-card/GithubCard";

export const revalidate = 120;
export const metadata: Metadata = {
  title: "Packages - ahmetcan.dev",
  description: "List of my owned and contributed packages.",
};

const Page: FC<PageProps> = async (props) => {
  const { params } = props;
  const { getPublicRepositories } = repoApi;

  const githubRepositories = await getPublicRepositories();

  return (
    <BaseView className={"items-center"}>
      <BaseView className={"sm:w-6/12 w-full flex-col"}>
        <BaseView>
          <h1 className={"text-3xl pb-6 font-bold"}>Packages</h1>
        </BaseView>
        <BaseView>
          {githubRepositories?.data.map(
            (item: Record<string, unknown>, index: number) => (
              <GithubCard
                key={index}
                title={String(item?.name)}
                link={String(item?.html_url)}
                description={String(item?.description) || "-"}
                language={String(item?.language) || "-"}
                star={String(item?.stargazers_count) || "-"}
              />
            ),
          )}
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default Page;
