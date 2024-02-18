import React, { FC } from 'react';
import { PageProps } from '@/types/globalTypes.interface';
import BaseView from '@/components/base/common/base-view/BaseView';
import { collectionApi } from '@/api/raindrop/services/raindrop/raindropService';
import * as console from 'console';
import GithubCard from '@/components/cards/github-card/GithubCard';
import RaindropCard from '@/components/cards/raindrop-card/RaindropCard';

const Page: FC<PageProps> = async (props) => {
  const { params } = props;
  const { getRaindrop } = collectionApi;

  const bookmarks = await getRaindrop({ id: 41734854 });

  return (
    <BaseView className={'items-center'}>
      <BaseView className={'sm:w-6/12 w-full'}>
        <BaseView>
          <h1 className={'text-3xl pb-6 font-bold'}>Bookmarks</h1>
        </BaseView>
        <BaseView>
          {bookmarks?.data?.items?.map(
            (item: Record<string, unknown>, index: number) => (
              <RaindropCard
                key={index}
                title={String(item?.title)}
                link={String(item?.link)}
                description={String(item?.note || item?.excerpt) || '-'}
                domain={String(item?.domain)}
                cover={String(item?.cover)}
              />
            ),
          )}
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default Page;
