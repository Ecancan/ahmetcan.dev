import React, { FC } from 'react';
import BaseView from '@/components/base/common/base-view/BaseView';
import { Label } from '@/components/base/ui/label';
import { BaseInputProps } from '@/components/base/common/form-elements/BaseInput.interface';
import { Input } from '@/components/base/ui/input';

const BaseInput: FC<BaseInputProps> = (props) => {
  const { label, name, className, placeholder, ...rest } = props;

  return (
    <BaseView className={'flex flex-col space-y-2'}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        name={name}
        className={className}
        placeholder={placeholder}
        {...rest}
      />
    </BaseView>
  );
};

export default BaseInput;
