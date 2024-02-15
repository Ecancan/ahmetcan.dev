import React, { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import BaseView from '@/components/base/common/base-view/BaseView';
import { GlowingImageProps } from '@/components/base/common/glowing-image/GlowingImage.interface';

// eslint-disable-next-line no-undef
const GlowingImage: FC<GlowingImageProps> = (props) => {
  const { src, ...rest } = props;

  return (
    <BaseView className={'relative'}>
      <Image className={'rounded-full z-10'} src={src} {...rest} />
      <Image
        className={'rounded-full blur-2xl absolute top-0 left-0 opacity-70'}
        src={src}
        {...rest}
      />
    </BaseView>
  );
};

export default GlowingImage;
