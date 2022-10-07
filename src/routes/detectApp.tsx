import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apps, { AppListItem } from "../utils/apps";

const DetectApp: FC = () => {
  const { app } = useParams();
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const isIOS: boolean =
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) || navigator.platform.includes("Mac");
    if (apps.map((a: AppListItem) => a.path).includes(app || "")) {
      if (isIOS) {
        setMessage(`[${app}] redirecting to app store`);
      } else {
        setMessage(`[${app}] redirecting to play store`);
      }
    } else {
      setMessage(`App not found!`);
      window.open(`https://flyhub.com`, "_self");
    }
  }, [app]);

  return <>{message}</>;
};

export default DetectApp;
