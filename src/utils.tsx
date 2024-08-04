import { imageBaseUrl, imageSize } from './constEnv';

export const getMovieImageUrl = (path: string) => {
  return `${imageBaseUrl}${imageSize}${path}`;
};
