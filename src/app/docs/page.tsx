import React, { FC } from 'react';
import { PageProps } from '@/types/globalTypes.interface';
import BaseView from '@/components/base/common/base-view/BaseView';
import { repoApi } from '@/api/github/services/repo/repoService';
import * as console from 'console';

const Page: FC<PageProps> = async (props) => {
  const { params } = props;

  return (
    <BaseView className={'items-center'}>
      <BaseView className={'w-6/12'}>The under construction</BaseView>
    </BaseView>
  );
};

export default Page;
