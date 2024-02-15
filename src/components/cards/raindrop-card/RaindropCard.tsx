import React, { FC } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/base/ui/card';
import GlowingText from '@/components/base/common/glowing-text/GlowingText';
import Link from 'next/link';
import BaseView from '@/components/base/common/base-view/BaseView';
import { Link2 } from 'lucide-react';
import { RaindropCardProps } from '@/components/cards/raindrop-card/RaindropCard.interface';
import GlowingImage from '@/components/base/common/glowing-image/GlowingImage';

const RaindropCard: FC<RaindropCardProps> = (props) => {
  const { title, link, description, domain, cover } = props;

  return (
    <BaseView className={'flex flex-1 items-stretch'}>
      <Card className={'flex-1 rounded-none border-1 border-b border-zinc-800'}>
        <BaseView className={'flex-row items-center gap-10'}>
          <BaseView>
            <CardHeader className={'flex-row items-center gap-4 px-0 pb-4'}>
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
              className={'text-sm text-zinc-400 px-0 pb-2 flex-row gap-4'}
            >
              {description}
            </CardContent>
            <CardFooter className={'px-0 text-xs text-zinc-600 flex-row gap-2'}>
              <BaseView className={'flex-row'}>
                <BaseView className={'mr-1'}>
                  <Link2 size={16} />
                </BaseView>
                <BaseView>{domain}</BaseView>
              </BaseView>
            </CardFooter>
          </BaseView>
          {cover && (
            <BaseView>
              <GlowingImage src={cover} alt={title} width={100} height={100} blurClassName={'opacity-30'} />
            </BaseView>
          )}
        </BaseView>
      </Card>
    </BaseView>
  );
};

export default RaindropCard;
