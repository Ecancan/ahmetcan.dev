import React, { FC } from 'react';
import { GlowingTextProps } from '@/components/base/common/glowing-text/GlowingText.interface';
import BaseView from '@/components/base/common/base-view/BaseView';
import { cn } from '@/lib/utils';

const GlowingText: FC<GlowingTextProps> = (props) => {
  const { text, className, blurClassName } = props;

  const classes = cn(`
        text-4xl
        ${className || ''}
    `);

  const blurClasses = cn(`
        text-4xl
        ${blurClassName || ''}
    `);

  return (
    <BaseView className={'relative'}>
      <span className={`z-10 ${classes}`}>{text}</span>
      <span className={`blur-md top-0 left-0 absolute ${blurClasses}`}>
        {text}
      </span>
    </BaseView>
  );
};

export default GlowingText;
