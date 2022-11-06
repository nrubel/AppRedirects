/** @format */

import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./dataStore/store";
import DetectApp from "./routes/detectApp";
import ErrorRoute from "./routes/errorRoute";
import HomeRoute from "./routes/homeRoute";
import { theme } from "./utils/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    errorElement: <ErrorRoute />,
  },
  {
    path: "/:app",
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
