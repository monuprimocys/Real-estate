import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const  PropertyDetailScreen_api = createApi({
  reducerPath: " PropertyDetailScreen_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.8:8002/api",
  }),
  endpoints: (builder) => ({
    PropertyDetailScreen_api: builder.mutation<
      SubmitResponse,
      {
        id: string;
      }
    >({
      query: (formData) => ({
        url: "/web_property_details",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { usePropertyDetailScreen_apiMutation} =  PropertyDetailScreen_api;
