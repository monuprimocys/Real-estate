import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const user_add_sceduleApi = createApi({
  reducerPath: "user_add_sceduleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.255.179/api",
  }),
  endpoints: (builder) => ({
    user_add_scedule: builder.mutation<
      SubmitResponse,
      {
        property_id: string;
        email: string;
        date: string;
        time: string;
        name: string;
        phone: string;
        message: string;
      }
    >({
      query: (formData) => ({
        url: "/user_add_scedule",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useUser_add_sceduleMutation } = user_add_sceduleApi;
