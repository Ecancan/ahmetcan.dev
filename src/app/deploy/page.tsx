import React, { FC } from 'react';
import { PageProps } from '@/types/globalTypes.interface';
import BaseView from '@/components/base/common/base-view/BaseView';

const Page: FC<PageProps> = async (props) => {
  const { params } = props;

  return (
    <BaseView className={'items-center'}>
      <BaseView className={'w-6/12'}>Deploy</BaseView>
    </BaseView>
  );
};

export default Page;
