import React from 'react';
import BaseView from '@/components/base/common/base-view/BaseView';
import DetailHeader from '@/components/header/detail-header/DetailHeader';

const DetailLayout = ({ children }: { children: React.ReactNode }) => (
  <BaseView className={'pb-10'}>
    <DetailHeader />
    {children}
  </BaseView>
);

export default DetailLayout;
