import React from 'react';
import BaseView from '@/components/base/common/base-view/BaseView';
import BaseInput from '@/components/base/common/form-elements/BaseInput';
import BaseTextarea from '@/components/base/common/form-elements/BaseTextarea';

const ContactForm = () => (
        <BaseView className={'gap-8'}>
            <BaseInput name={'topic'} label={'Topic'} placeholder={'You can select topic name for getting payload.'} />
            <BaseInput name={'origin'} label={'Origin'} placeholder={'You have to define Origin like email, name-surname etc.'} />
            <BaseTextarea name={'payload'} label={'Payload'} placeholder={'You can send any payload with this input.'} rows={15} />
        </BaseView>
    );

export default ContactForm;
