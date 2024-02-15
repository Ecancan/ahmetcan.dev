import React, { FC } from 'react';
import { GithubCardProps } from '@/components/cards/github-card/GithubCard.interface';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/base/ui/card';
import GlowingText from '@/components/base/common/glowing-text/GlowingText';
import Link from 'next/link';
import BaseView from '@/components/base/common/base-view/BaseView';
import { Code, Star } from 'lucide-react';

const GithubCard: FC<GithubCardProps> = (props) => {
  const { title, link, description, language, star } = props;

  return (
    <BaseView className={'flex flex-1 items-stretch'}>
      <Card className={'flex-1 rounded-none border-1 border-b border-zinc-800'}>
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
        <CardContent className={'text-sm text-zinc-400 px-0 pb-2 flex-row gap-4'}>
          {description}
        </CardContent>
        <CardFooter className={'px-0 text-xs text-zinc-600 flex-row gap-2'}>
          <BaseView className={'flex-row'}>
            <BaseView className={'mr-1'}>
              <Code size={16} />
            </BaseView>
            <BaseView>{language}</BaseView>
          </BaseView>
        </CardFooter>
      </Card>
    </BaseView>
  );
};

export default GithubCard;
