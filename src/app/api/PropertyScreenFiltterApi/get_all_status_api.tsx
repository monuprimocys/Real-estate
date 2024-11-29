import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const get_all_status_api = createApi({
  reducerPath: "get_all_status_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.255.179/api",
  }),
  endpoints: (builder) => ({
    get_all_status: builder.mutation<
      SubmitResponse,
      {
        status: string;
      }
    >({
      query: (formData) => ({
        url: "/get_all_status",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useGet_all_statusMutation } = get_all_status_api;
