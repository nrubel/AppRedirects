import { FC, useEffect } from "react";
import FullPageLoader from "../components/global/loader";

const ErrorRoute: FC = () => {
  useEffect(() => {
    window.open("https://flyhub.com", "_self");
  });
  return <FullPageLoader />;
};

export default ErrorRoute;
