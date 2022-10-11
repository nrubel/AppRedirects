import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseModel, IFRedirect } from "hrms_types";
import Endpoints from "../../utils/Endpoints";

export interface GetAppsResponse extends ResponseModel {
  result: IFRedirect[] | null;
}

export interface GetSingleAppResponse extends ResponseModel {
  result: IFRedirect | null;
}

export const api = createApi({
  reducerPath: "appsApi",
  baseQuery: fetchBaseQuery({ baseUrl: Endpoints.baseUrl }),
  endpoints: (builder) => ({
    getApps: builder.query<GetAppsResponse, null>({
      query: (_: null) => ({
        url: `/apps`,
      }),
    }),
    getSingleApp: builder.query<GetSingleAppResponse, string>({
      query: (path: string) => ({
        url: `/apps/${path}`,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAppsQuery,
  useLazyGetAppsQuery,
  useGetSingleAppQuery,
  useLazyGetSingleAppQuery,
} = api;
