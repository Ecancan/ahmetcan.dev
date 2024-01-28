import React, { FC } from 'react';
import { PageProps } from '@/types/globalTypes.interface';
import BaseView from '@/components/base/common/base-view/BaseView';
import LinkCard from '@/components/cards/link-card/LinkCard';
import GlowingText from '@/components/base/common/glowing-text/GlowingText';
import GlowingImage from '@/components/base/common/glowing-image/GlowingImage';
import MainHeader from '@/components/header/main-header/MainHeader';

const Page: FC<PageProps> = (props) => {
  const { params } = props;

  const cards = [
    {
      title: 'Docs',
      link: '/docs',
      description: 'Find in-depth information about me.',
    },
    {
      title: 'Learn',
      link: '/learn',
      description:
        'The page where I diligently write what I\'ve learned. If there\'s nothing, it means I\'m currently feeling lazy.',
    },
    {
      title: 'Bookmarks',
      link: '/bookmarks',
      description:
        'You can find the bookmark data of the topics I\'m interested in here.',
    },
    {
      title: 'Deploy',
      link: '/deploy',
      description: 'Find the deployment instructions.',
    },
  ];

  return (
    <BaseView className={'justify-between h-full'}>
      <MainHeader />
      <BaseView className={'flex-1 mb-4 items-center justify-center'}>
        <BaseView className={'flex-row items-center gap-8'}>
          <GlowingImage
            src={'/assets/img/profile.jpeg'}
            width={150}
            height={150}
            alt={'profile'}
          />
          <GlowingText text={'.dev'} />
        </BaseView>
      </BaseView>
      <BaseView className={'flex-row gap-4 mb-12'}>
        {cards.map((card, index) => (
          <LinkCard key={index} {...card} />
        ))}
      </BaseView>
    </BaseView>
  );
};

export default Page;
