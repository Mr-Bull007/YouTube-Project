import Body from "./Body/Body";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <Body />
      </div>
    </div>
  );
};

export default HomePage;
