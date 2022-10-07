import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apps from "../utils/apps";

const DetectApp: FC = () => {
  const params = useParams();
  const appName: string = params.app || "";
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
    if (!!apps[`${appName}`]) {
      if (isIOS) {
        if (!!apps[appName].ios) {
          window.open(apps[appName].ios!, "_self");
        } else {
          setMessage(`[${appName}] redirecting to app store`);
        }
      } else {
        if (!!apps[appName].andorid) {
          window.open(apps[appName].andorid!, "_self");
        } else {
          setMessage(`[${appName}] redirecting to play store`);
        }
      }
    } else {
      setMessage(`App not found!`);
      window.open(`https://flyhub.com`, "_self");
    }
  }, [appName, setMessage, apps]);

  return <>{message}</>;
};

export default DetectApp;
