import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const Loginapi = createApi({
  reducerPath: "Loginapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.9:8002/api",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      SubmitResponse,
      {
        email: string;
        password: string;
      }
    >({
      query: (formData) => ({
        url: "/login",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const { useLoginMutation } = Loginapi;