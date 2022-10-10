/** @format */

import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetectApp from "./routes/detectApp";
import ErrorRoute from "./routes/errorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Loading...</div>,
    errorElement: <ErrorRoute />,
  },
  {
    path: "/apps/:app",
    element: <DetectApp />,
    errorElement: <ErrorRoute />,
  },
  {
    path: "*",
    element: <ErrorRoute />,
  },
]);

const App: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        width: `100%`,
        height: `100vh`,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
