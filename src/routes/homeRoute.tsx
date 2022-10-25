import { FC } from "react";
import FullPageLoader from "../components/global/loader";
import HomeView from "../components/home/HomeView";
import { useGetAppsQuery } from "../dataStore/services/apps";
import ErrorRoute from "./errorRoute";

const HomeRoute: FC = () => {
  const { isLoading, error, data, isFetching } = useGetAppsQuery(null);

  if (isLoading || isFetching || (!error && !data)) return <FullPageLoader />;
  else if (!!error || (!!data && !!data.error && !data.result))
    return <ErrorRoute />;
  else
    return (
      <HomeView list={data?.result || []} name={`All Apps`.toUpperCase()} />
    );
};

export default HomeRoute;
