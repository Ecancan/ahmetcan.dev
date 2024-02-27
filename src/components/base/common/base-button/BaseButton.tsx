import React, { FC } from 'react';
import { BaseButtonProps } from '@/components/base/common/base-button/BaseButton.interface';
import { Button } from '@/components/base/ui/button';

const BaseButton: FC<BaseButtonProps> = (props, context) => {
  const { label, ...rest } = props;

  return <Button {...rest}>{label}</Button>;
};

export default BaseButton;
