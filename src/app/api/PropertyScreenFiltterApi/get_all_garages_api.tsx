import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const  get_all_garages_api = createApi({
  reducerPath: " get_all_garages_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.9:8002/api",
  }),
  endpoints: (builder) => ({
    get_all_garages: builder.mutation<
      SubmitResponse,
      {
        garages: string;
      }
    >({
      query: (formData) => ({
        url: "/get_all_garages",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useGet_all_garagesMutation} =  get_all_garages_api;
