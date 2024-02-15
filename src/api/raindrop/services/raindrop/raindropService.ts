import { ApiServiceMethod } from '@/enum/apiServiceMethods.enum';
import { raindropApi } from '@/api/raindrop/raindropApi';

export const collectionApi = {
  getRaindrop({ id }: { id: number }) {
    return raindropApi.requester({
      url: `/raindrops/${id}`,
      method: ApiServiceMethod.GET,
    });
  },
};
