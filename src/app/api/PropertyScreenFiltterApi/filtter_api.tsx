import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  all_main_location: never[];
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const get_filtter_api = createApi({
  reducerPath: " get_filtter_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.9:8002/api",
  }),
  endpoints: (builder) => ({
    get_all_filtter: builder.mutation<
      SubmitResponse,
      {
        location: string;
        bedroom: string;
        bathroom: string;
        min_price: string;
        max_price: string;
        features: string;
        type: string;
        min_area: string;
        max_area: string;
        garages: string;
        sortby: string;
        status:string;
      }
    >({
      query: (formData) => ({
        url: "/filter",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useGet_all_filtterMutation } = get_filtter_api;
