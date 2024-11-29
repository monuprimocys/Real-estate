/* eslint-disable react-refresh/only-export-components */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  success: boolean;
  message: string;
}

export const ResetPasswordapi = createApi({
  reducerPath: "resetPasswordApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.255.179/api", // Replace with actual URL
  }),
  endpoints: (builder) => ({
    resetPassword: builder.mutation<
      SubmitResponse,
      { email: string; password: string; cnf_pass: string }
    >({
      query: (formData) => ({
        url: "/reset_pass",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useResetPasswordMutation } = ResetPasswordapi;
