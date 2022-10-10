import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import apps from "../utils/apps";

const DetectApp: FC = () => {
  const params = useParams();
  const appName: string = params.app || "";
  const gotoFlyhub = () => {
    window.open(`https://flyhub.com`, "_self");
  };

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
          gotoFlyhub();
        }
      } else {
        if (!!apps[appName].android) {
          window.open(apps[appName].android!, "_self");
        } else {
          gotoFlyhub();
        }
      }
    } else {
      gotoFlyhub();
    }
  }, [appName, apps]);

  return <>Please wait...</>;
};

export default DetectApp;
