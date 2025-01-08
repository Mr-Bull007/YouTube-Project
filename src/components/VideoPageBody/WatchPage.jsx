import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  return (
    <div>
      <div className="flex flex-row w-full mr-4">
        <div className="ml-[90px] p-0 rounded-xl mt-24 overflow-hidden w-[900px]">
          <iframe
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-24 w-[32.3%]">
          <LiveChat />
        </div>
      </div>
      <div className="ml-[90px] mt-5 mr-8">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
