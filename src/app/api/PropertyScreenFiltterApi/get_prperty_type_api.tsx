import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  propertyTypeOptions(propertyTypeOptions: unknown): unknown;
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const  get_property_type_api = createApi({
  reducerPath: " get_property_type_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.8:8002/api",
  }),
  endpoints: (builder) => ({
     get_property_type: builder.mutation<
      SubmitResponse,
      {
        property_types: string;
      }
    >({
      query: (formData) => ({
        url: "/get_property_type",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {useGet_property_typeMutation} =  get_property_type_api;
