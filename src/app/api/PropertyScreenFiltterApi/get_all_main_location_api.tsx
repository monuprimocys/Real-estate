import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const get_all_main_location_api = createApi({
  reducerPath: "get_all_main_location_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.8:8002/api",
  }),
  endpoints: (builder) => ({
    get_all_main_location: builder.mutation<
      SubmitResponse,
      {
        location: string;
      }
    >({
      query: (formData) => ({
        url: "/get_all_main_location",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});


export const { useGet_all_main_locationMutation } = get_all_main_location_api;
