import { IFRedirect } from "hrms_types";
import { FC, useEffect } from "react";

const CheckAndRedirect: FC<IFRedirect> = ({ android, ios }) => {
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
    if (isIOS) {
      if (!!ios) {
        window.open(ios!, "_self");
      } else {
        gotoFlyhub();
      }
    } else {
      if (!!android) {
        window.open(android!, "_self");
      } else {
        gotoFlyhub();
      }
    }
  }, [android, ios]);

  return <>Please wait...</>;
};

export default CheckAndRedirect;
