import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";

const Final = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Final;
