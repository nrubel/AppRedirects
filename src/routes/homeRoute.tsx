import { FC } from "react";
import HomeView from "../components/home/HomeView";
import { useGetAppsQuery } from "../dataStore/services/apps";
import ErrorRoute from "./errorRoute";

const HomeRoute: FC = () => {
  const { isLoading, error, data, isFetching } = useGetAppsQuery(null);

  if (isLoading || isFetching) return <>Loading...</>;
  else if (!!error || (!!data && !!data.error && !data.result))
    return <ErrorRoute />;
  else return <HomeView list={data?.result || []} />;
};

export default HomeRoute;
