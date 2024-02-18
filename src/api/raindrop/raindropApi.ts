import { ApiRequestProvider } from '@/providers/ApiRequestProvider';
import * as process from 'process';

export const raindropApi = new ApiRequestProvider({
  baseURL: 'https://api.raindrop.io/rest',
  prefix: '/v1',
  storageAuthKey: '-',
  authToken: process.env.RAINDROP_TOKEN,
});
