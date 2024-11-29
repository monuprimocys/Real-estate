import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const ForgetPasswordApi = createApi({
  reducerPath: "ForgetPasswordApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.8:8002/api",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      SubmitResponse,
      {
        email: string;
      }
    >({
      query: (formData) => ({
        url: "/forgot_pass",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const { useLoginMutation } = ForgetPasswordApi;
