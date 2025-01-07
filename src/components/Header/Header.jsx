import Hamburger from "./Hamburger";
import Logo from "./Logo";
import ProfileLogging from "./ProfileLogging";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="px-3 flex mx-2 bg-white w-full fixed ">
      <Hamburger />
      <Logo />
      <SearchBar />
      <ProfileLogging />
    </div>
  );
};

export default Header;
