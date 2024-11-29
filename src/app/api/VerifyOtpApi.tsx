import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  success: boolean;
  message: string;
}

export const VerifyOptapi = createApi({
  reducerPath: "VerifyOptapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.255.179/api", 
  }),
  endpoints: (builder) => ({
    VerifyOpt: builder.mutation<SubmitResponse, { email: string; otp: string }>(
      {
        query: (formData) => ({
          url: "/check_verified_code",
          method: "POST",
          body: formData,
        }),
      }
    ),
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const { useVerifyOptMutation } = VerifyOptapi;
