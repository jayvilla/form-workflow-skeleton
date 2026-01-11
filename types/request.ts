export interface RequestPayload {
  name: string;
  email: string;
  message: string;
}

export interface RequestRecord extends RequestPayload {
  id: string;
  createdAt: string;
}

export type FieldErrors = Partial<Record<keyof RequestPayload, string>>;

