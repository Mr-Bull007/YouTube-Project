import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./HomePageBody/Body";
import Layout from "./Layout";
import WatchPage from "./VideoPageBody/WatchPage";

const Final = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Final;
