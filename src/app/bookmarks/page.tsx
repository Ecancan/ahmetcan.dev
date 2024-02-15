import React, { FC } from 'react';
import { PageProps } from '@/types/globalTypes.interface';
import BaseView from '@/components/base/common/base-view/BaseView';
import { collectionApi } from '@/api/raindrop/services/raindrop/raindropService';
import * as console from 'console';

const Page: FC<PageProps> = async (props) => {
  const { params } = props;
  const { getRaindrop } = collectionApi;

  const response = await getRaindrop({ id: 41734854 });

  console.log(response?.data.items);

  return (
    <BaseView className={'items-center'}>
      <BaseView className={'w-6/12'}>
        {JSON.stringify(response?.data.items)}
      </BaseView>
    </BaseView>
  );
};

export default Page;
