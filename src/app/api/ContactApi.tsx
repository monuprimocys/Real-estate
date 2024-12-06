import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitResponse {
  response_code: string;
  status(arg0: string, status: unknown): unknown;
  success: boolean;
  message: string;
}

export const Contactapi = createApi({
  reducerPath: "Contactapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.255.179/api",
  }),
  endpoints: (builder) => ({
    add_contact_form: builder.mutation<
      SubmitResponse,
      {
        name: string;
        email: string;
        phone: string;
        message: string;
        is_gdpr: string;
      }
    >({
      query: (formData) => ({
        url: "/add_contact_form",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const { useAdd_contact_formMutation } = Contactapi;
