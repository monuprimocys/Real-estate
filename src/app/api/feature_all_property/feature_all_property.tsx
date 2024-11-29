import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const feature_all_property_api = createApi({
  reducerPath: "feature_all_property_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.255.179/api",
  }),
  endpoints: (builder) => ({
    get_features: builder.mutation({
      query: () => ({
        url: "/feature_all_property",
        method: "POST",

      }),
    }),
  }),
});

export const { useGet_featuresMutation } = feature_all_property_api;
