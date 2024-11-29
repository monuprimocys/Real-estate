import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const ForgetPasswordApi = createApi({
  reducerPath: "ForgetPasswordApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.255.179/api",
  }),
  endpoints: (builder) => ({
    ForgetPasswo: builder.mutation<
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
export const { useForgetPasswoMutation } = ForgetPasswordApi;
