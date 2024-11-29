import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const get_bathroom_api = createApi({
  reducerPath: "get_bathroom_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.8:8002/api",
  }),
  endpoints: (builder) => ({
    get_bathroom: builder.mutation<
      SubmitResponse,
      {
        bathroom: string;
      }
    >({
      query: (formData) => ({
        url: "/get_bathroom",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useGet_bathroomMutation} = get_bathroom_api;
