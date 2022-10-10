import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { useParams } from "react-router-dom";
import CheckAndRedirect from "../components/mobileApps/CheckAndRedirect";
import Endpoints from "../utils/Endpoints";
import ErrorRoute from "./errorRoute";

const DetectApp: FC = () => {
  const params = useParams();
  const appName: string = params.app || "";

  const { isLoading, error, data, isFetching } = useQuery(["fetch"], () =>
    fetch(`${Endpoints.baseUrl}/redirects?type=mobile&path=${appName}`, {
      mode: "cors",
    }).then((res: Response) => res.json())
  );

  if (isLoading || isFetching) return <>Please wait...</>;
  else if (!!error || (!!data && !!data.error)) return <ErrorRoute />;
  else return <CheckAndRedirect {...data.result} />;
};

export default DetectApp;
