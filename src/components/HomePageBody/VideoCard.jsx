import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const VideoCard = ({ videoInfo }) => {
  const navOpen = useSelector((store) => store.header.isMenuOpen);

  console.log("VideoInfo is: ", videoInfo);
  if (!videoInfo) return null;
  const { snippet, statistics } = videoInfo;
  const imgURL = snippet.thumbnails?.high?.url;
  const title = snippet.localized?.title;
  const viewsNumber = statistics.viewCount;

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}M`;
    }
    return num.toString();
  };
  return (
    <div className={`${navOpen ? "m-2 ml-1 w-96" : "m-2 ml-1 w-80"}`}>
      <img
        className={`${
          navOpen
            ? "p-2 rounded-3xl object-cover w-96 h-60"
            : "p-2 rounded-3xl object-cover w-80 h-44"
        }`}
        alt={title}
        src={imgURL}
      />
      <div className="pr-3 pl-2 font-bold overflow-hidden text-ellipsis whitespace-pre">
        {title}
      </div>
      <div className="pr-3 pl-2 text-sm text-gray-600 font-semibold">
        {snippet.channelTitle}
      </div>
      <div className="pr-3 pl-2 text-sm text-gray-600 font-semibold">
        {formatNumber(viewsNumber)} views
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  videoInfo: PropTypes.object.isRequired,
};

export default VideoCard;
