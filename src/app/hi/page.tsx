import React, { FC } from 'react';
import { PageProps } from '@/types/globalTypes.interface';
import BaseView from '@/components/base/common/base-view/BaseView';

const Page: FC<PageProps> = (props) => {
  const { params } = props;

  return (
      <BaseView>

      </BaseView>
  );
};

export default Page;
