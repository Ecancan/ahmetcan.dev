import React, { FC } from 'react';
import BaseView from '@/components/base/common/base-view/BaseView';
import { Label } from '@/components/base/ui/label';
import { BaseTextareaProps } from '@/components/base/common/form-elements/BaseTextarea.interface';
import { Textarea } from '@/components/ui/textarea';

const BaseTextarea: FC<BaseTextareaProps> = (props) => {
  const { label, name, className, placeholder, ...rest } = props;

  return (
    <BaseView className={'flex flex-col space-y-2'}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Textarea
        name={name}
        className={className}
        placeholder={placeholder}
        {...rest}
      />
    </BaseView>
  );
};

export default BaseTextarea;
