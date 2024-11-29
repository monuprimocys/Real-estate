import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const Registrationapi = createApi({
  reducerPath: "Registrationapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.255.179/api",
  }),
  endpoints: (builder) => ({
    registration: builder.mutation<
      SubmitResponse,
      {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        confirm_password: string;
        mobile: string;
      }
    >({
      query: (formData) => ({
        url: "/register",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const { useRegistrationMutation } = Registrationapi;
