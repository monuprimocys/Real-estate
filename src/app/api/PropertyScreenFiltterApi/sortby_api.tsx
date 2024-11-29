import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const   get_sortby_options_api = createApi({
  reducerPath: "get_sortby_options_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.8:8002/api",
  }),
  endpoints: (builder) => ({
    get_sortby_options: builder.mutation<
      SubmitResponse,
      {
        sortby: string;
      }
    >({
      query: (formData) => ({
        url: "/get_sortby_options",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {useGet_sortby_optionsMutation} =   get_sortby_options_api;
