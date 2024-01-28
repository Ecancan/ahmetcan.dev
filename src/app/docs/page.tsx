import React, { FC } from 'react';
import { PageProps } from '@/types/globalTypes.interface';
import BaseView from '@/components/base/common/base-view/BaseView';
import LinkCard from '@/components/cards/link-card/LinkCard';

const Page: FC<PageProps> = (props) => {
  const { params } = props;

  return (
    <BaseView>
      <BaseView className={'flex-row gap-4'}>
        Docs
      </BaseView>
    </BaseView>
  );
};

export default Page;
