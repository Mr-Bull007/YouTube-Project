import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";

const Layout = () => {
  const location = useLocation();
  const isWatchPage = location.pathname === "/watch";

  return (
    <div>
      <Header />
      <div className="flex">
        {!isWatchPage && <SideBar />}
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
