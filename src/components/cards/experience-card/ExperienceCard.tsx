import React, { FC } from 'react';
import { LinkCardProps } from '@/components/cards/link-card/LinkCard.interface';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/base/ui/card';
import Link from 'next/link';
import { ArrowRight, Calendar, Link2 } from 'lucide-react';
import GlowingText from '@/components/base/common/glowing-text/GlowingText';
import { ExperienceCardProps } from '@/components/cards/experience-card/ExperienceCard.interface';
import BaseView from '@/components/base/common/base-view/BaseView';
import GlowingImage from '@/components/base/common/glowing-image/GlowingImage';

const ExperienceCard: FC<ExperienceCardProps> = (props) => {
  const { title, link, description, dateRange, location, cover } = props;

  return (
    <BaseView className={'flex flex-1 items-stretch'}>
      <Card className={'flex-1 rounded-none border-1 border-b border-zinc-800'}>
        <BaseView className={'flex-row items-center gap-4'}>
          {cover && (
            <BaseView>
              <GlowingImage
                src={cover}
                alt={title}
                width={80}
                height={80}
                className={'rounded-none'}
                blurClassName={'opacity-50 rounded-none'}
              />
            </BaseView>
          )}
          <BaseView className={'flex-1'}>
            <CardHeader className={'flex-row items-center gap-4 px-0 pb-2'}>
              <Link href={link} className={'group'} target={'_blank'}>
                <GlowingText
                  text={title}
                  className={
                    'text-md font-medium underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-400 decoration-2 transition'
                  }
                  blurClassName={
                    'text-md font-medium blur-none group-hover:blur-md transition'
                  }
                />
              </Link>
            </CardHeader>
            <CardContent
              className={'px-0 text-xs text-zinc-600 flex flex-row gap-2 pb-2'}
            >
              <BaseView className={'flex-row'}>
                <BaseView className={'mr-1'}>
                  <Calendar size={16} />
                </BaseView>
                <BaseView>{dateRange}</BaseView>
              </BaseView>
              <BaseView className={'flex-row'}>
                <BaseView className={'mr-2'}>-</BaseView>
                <BaseView>{location}</BaseView>
              </BaseView>
            </CardContent>
            <CardFooter
              className={'text-sm text-zinc-400 px-0 pb-4 flex-row gap-4'}
            >
              {description}
            </CardFooter>
          </BaseView>
        </BaseView>
      </Card>
    </BaseView>
  );
};

export default ExperienceCard;
