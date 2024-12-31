import Hamburger from "./Hamburger";
import Logo from "./Logo";
import ProfileLogging from "./ProfileLogging";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="px-2 flex mx-2">
      <Hamburger />
      <Logo />
      <SearchBar />
      <ProfileLogging />
    </div>
  );
};

export default Header;
