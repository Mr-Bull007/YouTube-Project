import { Link } from "react-router-dom";
import { YT_LOGO_URL } from "../../utils/constants";

const Logo = () => {
  return (
    <div className="w-28 mx-1 hover:cursor-pointer">
      <Link to="/">
        <img alt="Youtube-logo" src={YT_LOGO_URL} />
      </Link>
    </div>
  );
};

export default Logo;
