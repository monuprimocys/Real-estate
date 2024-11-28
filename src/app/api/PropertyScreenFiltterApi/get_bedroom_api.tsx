import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const get_bedroom_api = createApi({
  reducerPath: "get_bedroom_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.9:8002/api",
  }),
  endpoints: (builder) => ({
    get_bedroom: builder.mutation<
      SubmitResponse,
      {
        bedroom: string;
      }
    >({
      query: (formData) => ({
        url: "/get_bedroom",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useGet_bedroomMutation} = get_bedroom_api;
