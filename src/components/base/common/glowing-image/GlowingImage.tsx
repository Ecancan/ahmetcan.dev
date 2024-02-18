import React, { FC } from "react";
import Image from "next/image";
import BaseView from "@/components/base/common/base-view/BaseView";
import { GlowingImageProps } from "@/components/base/common/glowing-image/GlowingImage.interface";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line no-undef
const GlowingImage: FC<GlowingImageProps> = (props) => {
  const { src, className, blurClassName, ...rest } = props;

  const classes = twMerge(`
    rounded-full z-10
    ${className}
  `);

  const blurClasses = twMerge(`
    rounded-full blur-2xl absolute top-0 left-0 opacity-70
    ${blurClassName || ""}
  `);

  return (
    <BaseView className={"relative"}>
      <Image className={classes} src={src} {...rest} />
      <Image src={src} {...rest} className={blurClasses} />
    </BaseView>
  );
};

export default GlowingImage;
