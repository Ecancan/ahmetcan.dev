import React from 'react';
import BaseView from '@/components/base/common/base-view/BaseView';
import { Badge } from '@/components/base/ui/badge';

const MainHeader = () => (
  <BaseView className={'flex-row justify-between mt-12 mb-12'}>
    <BaseView>
      <Badge
        className={
          'p-4 text-sm font-normal bg-transparent border-zinc-800 text-zinc-200 hover:bg-transparent'
        }
      >
        <pre>Get started by looking /docs</pre>
      </Badge>
    </BaseView>
    <BaseView>
        <Badge
            className={
                'p-4 text-sm font-normal bg-transparent border-none text-zinc-200 hover:bg-transparent'
            }
        >
            <pre>by @ecancan</pre>
        </Badge>
    </BaseView>
  </BaseView>
);

export default MainHeader;
