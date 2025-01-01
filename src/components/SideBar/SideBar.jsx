import { useSelector } from "react-redux";
import SideCard from "./SideCard";

const SideBar = () => {
  const isNavOpen = useSelector(store => store.header.isMenuOpen);

  return (
    <div className={`${isNavOpen ? "w-[15%] mt-2" : "w-[5%] mt-4"}`}>
      <SideCard
        name="Home"
        imgIconURL="https://www.svgrepo.com/show/522146/home.svg"
      />
      <SideCard
        name="Shorts"
        imgIconURL="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"
      />
      <SideCard
        name="Subscriptions"
        imgIconURL="https://www.svgrepo.com/show/344689/collection-play.svg"
      />
      <SideCard
        name="Music"
        imgIconURL="https://www.svgrepo.com/show/532711/music-note.svg"
      />
      <SideCard
        name="Movies"
        imgIconURL="https://www.svgrepo.com/show/448068/movies.svg"
      />
      <SideCard
        name="Gaming"
        imgIconURL="https://www.svgrepo.com/show/533074/gaming-pad-alt-1.svg"
      />
      <SideCard
        name="Sports"
        imgIconURL="https://www.svgrepo.com/show/404172/sports-medal.svg"
      />
    </div>
  );
};

export default SideBar;
