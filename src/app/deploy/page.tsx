import { Metadata } from 'next';
import React, { FC } from 'react';
import { PageProps } from '@/types/globalTypes.interface';
import BaseView from '@/components/base/common/base-view/BaseView';
import BaseButton from '@/components/base/common/base-button/BaseButton';
import ContactForm from '@/components/forms/contact-form/ContactForm';

export const metadata: Metadata = {
  title: 'Deploy - ahmetcan.dev',
  description: 'Find the deployment instructions.',
};
const Page: FC<PageProps> = async (props) => {
  const { params } = props;

  const onSubmit = () => {

  };

  return (
    <BaseView className={'items-center'}>
      <BaseView className={'sm:w-6/12 w-full gap-8'}>
          <ContactForm />
          <BaseView className={'flex-row justify-center'}>
              <BaseButton label={'Submit'} variant={'secondary'} className={'w-1/2'} />
          </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default Page;
