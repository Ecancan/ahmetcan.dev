import React, { FC } from 'react';
import Image from 'next/image';
import BaseView from '@/components/base/common/base-view/BaseView';
import { GlowingImageProps } from '@/components/base/common/glowing-image/GlowingImage.interface';
import { twMerge } from 'tailwind-merge';

const GlowingImage: FC<GlowingImageProps> = (props) => {
  const { src, className, blurClassName, ...rest } = props;

  const classes = twMerge(`
    rounded-full z-10
    ${className}
  `);

  const blurClasses = twMerge(`
    rounded-full blur-2xl absolute top-0 left-0 opacity-70
    ${blurClassName || ''}
  `);

  // Destructure alt from rest to prevent duplicates
  const { alt, ...imageProps } = rest;
  const altText = typeof src === 'string' ? src : '';

  return (
    <BaseView className={'relative'}>
      <Image
        className={classes}
        src={src}
        alt={alt || altText}
        {...imageProps}
      />
      <Image
        src={src}
        alt='' // Decorative image, so empty alt is appropriate
        className={blurClasses}
        {...imageProps}
      />
    </BaseView>
  );
};

export default GlowingImage;
