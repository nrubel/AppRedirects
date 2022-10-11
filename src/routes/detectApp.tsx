import { FC } from "react";
import { useParams } from "react-router-dom";
import CheckAndRedirect from "../components/mobileApps/CheckAndRedirect";
import { useGetSingleAppQuery } from "../dataStore/services/apps";
import ErrorRoute from "./errorRoute";

const DetectApp: FC = () => {
  const params = useParams();
  const appName: string = params.app || "";
  const { isLoading, error, data, isFetching } = useGetSingleAppQuery(appName);

  if (isLoading || isFetching) return <>...</>;
  else if (!!error || (!!data && !!data.error)) return <ErrorRoute />;
  else return <CheckAndRedirect {...data?.result!} />;
};

export default DetectApp;
