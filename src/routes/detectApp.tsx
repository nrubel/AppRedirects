import { FC } from "react";
import { useParams } from "react-router-dom";
import HomeView from "../components/home/HomeView";
import CheckAndRedirect from "../components/mobileApps/CheckAndRedirect";
import { useGetSingleAppQuery } from "../dataStore/services/apps";
import ErrorRoute from "./errorRoute";

const DetectApp = () => {
  const params = useParams();
  const appName: string = params.app || "";
  const { isLoading, error, data, isFetching } = useGetSingleAppQuery(appName);

  if (isLoading || isFetching) {
    return <>Please wait...</>;
  } else if (!!data && !!data?.result) {
    if (Array.isArray(data?.result)) {
      return <HomeView list={data?.result} name={appName} />;
    }
    return <CheckAndRedirect {...data?.result} />;
  } else {
    <ErrorRoute />;
  }
};

export default DetectApp as FC;
