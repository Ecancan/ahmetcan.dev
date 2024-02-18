import { Metadata } from 'next';
import React, { FC } from 'react';
import { PageProps } from '@/types/globalTypes.interface';
import BaseView from '@/components/base/common/base-view/BaseView';

export const metadata: Metadata = {
  title: 'Deploy - ahmetcan.dev',
  description: 'Find the deployment instructions.',
};
const Page: FC<PageProps> = async (props) => {
  const { params } = props;

  return (
    <BaseView className={'items-center'}>
      <BaseView className={'w-6/12'}>The under construction</BaseView>
    </BaseView>
  );
};

export default Page;
