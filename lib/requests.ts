import type { RequestPayload, FieldErrors } from "@/types/request";

/**
 * Validates request payload and returns field errors if any.
 * @param payload - The request payload to validate
 * @returns Object with field errors, empty if validation passes
 * 
 * TODO: Implement validation rules:
 * - Check required fields (name, email, message)
 * - Validate email format
 * - Add any additional validation rules as needed
 */
export function validate(payload: RequestPayload): FieldErrors {
  // TODO: Implement validation logic
  return {};
}

/**
 * Submits a request and returns the created record ID.
 * @param payload - The request payload to submit
 * @returns Promise resolving to the created request ID
 * 
 * TODO: Implement submit logic:
 * - Simulate async latency (e.g., delay)
 * - Generate unique ID for the request
 * - (Optional) Append to MOCK_REQUEST_STORE
 * - Return { id: string }
 */
export async function submitRequest(
  payload: RequestPayload
): Promise<{ id: string }> {
  // TODO: Implement submit logic
  return { id: "" };
}

