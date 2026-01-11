"use client";

import { useState } from "react";
import type { RequestPayload, FieldErrors } from "@/types/request";
import { validate, submitRequest } from "@/lib/requests";
import FormField from "./FormField";
import Banner from "./Banner";

export default function RequestForm() {
  const [values, setValues] = useState<RequestPayload>({
    name: "",
    email: "",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear field error when user starts typing
    if (fieldErrors[name as keyof RequestPayload]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof RequestPayload];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);

    // TODO: Call validate() and set fieldErrors
    // TODO: If validation fails, return early
    // TODO: Set submitting to true
    // TODO: Call submitRequest() and handle response
    // TODO: On success, redirect to /form/success or show success message
    // TODO: On error, set serverError
    // TODO: Reset submitting to false after completion
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {serverError && <Banner type="error" message={serverError} />}

      <FormField label="Name" htmlFor="name" error={fieldErrors.name}>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          disabled={submitting}
        />
      </FormField>

      <FormField label="Email" htmlFor="email" error={fieldErrors.email}>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          disabled={submitting}
        />
      </FormField>

      <FormField label="Message" htmlFor="message" error={fieldErrors.message}>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={5}
          className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          disabled={submitting}
        />
      </FormField>

      <button
        type="submit"
        disabled={submitting}
        className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

