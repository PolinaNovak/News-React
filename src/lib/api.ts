export const NEWS_SERVICE = `${import.meta.env.VITE_NEWS_BASE_API_URL}/${
  import.meta.env.VITE_NEWS_VERSION
}/search`;

export const NEWS_CATEGORY = `${import.meta.env.VITE_NEWS_BASE_API_URL}/${
  import.meta.env.VITE_NEWS_VERSION
}/available/categories`;

export const NEWS_LATEST_SERVICE = `${import.meta.env.VITE_NEWS_BASE_API_URL}/${
  import.meta.env.VITE_NEWS_VERSION
}/latest-news`;
