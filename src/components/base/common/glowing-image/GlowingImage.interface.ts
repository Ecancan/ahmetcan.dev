import { ImageProps } from 'next/image';

export interface GlowingImageProps extends ImageProps {
    blurClassName?: string;
}
