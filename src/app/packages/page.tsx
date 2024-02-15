import React, { FC } from 'react';
import { PageProps } from '@/types/globalTypes.interface';
import BaseView from '@/components/base/common/base-view/BaseView';
import { repoApi } from '@/api/github/services/repo/repoService';

const Page: FC<PageProps> = async (props) => {
  const { params } = props;
  const { getPublicRepositories } = repoApi;

  const githubRepositories = await getPublicRepositories();

  return (
    <BaseView className={'items-center'}>
      <BaseView className={'w-6/12'}>
        {JSON.stringify(githubRepositories)}
      </BaseView>
    </BaseView>
  );
};

export default Page;
