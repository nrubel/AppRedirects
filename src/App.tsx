/** @format */

import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetectApp from "./routes/detectApp";
import ErrorRoute from "./routes/errorRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ErrorRoute />,
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

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
