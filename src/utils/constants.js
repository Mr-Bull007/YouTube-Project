export const SEARCH_ICON_SVG_URL = import.meta.env.VITE_SEARCH_ICON_SVG_URL;
export const YT_LOGO_URL = import.meta.env.VITE_YT_LOGO_URL;

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOLIST_API =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = import.meta.env.VITE_YOUTUBE_SEARCH_API;

export const LIVE_CHAT_COUNT = 20; 
