import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const get_all_property_feature_api = createApi({
  reducerPath: "get_all_property_feature_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.9:8002/api",
  }),
  endpoints: (builder) => ({
    get_all_property_feature: builder.mutation<
      SubmitResponse,
      {
        features: string;
      }
    >({
      query: (formData) => ({
        url: "/get_all_property_feature",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});


export const { useGet_all_property_featureMutation } = get_all_property_feature_api;
