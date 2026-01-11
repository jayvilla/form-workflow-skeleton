import type { RequestRecord } from "@/types/request";

export const MOCK_EXISTING_REQUESTS: RequestRecord[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    message: "I would like to inquire about your services.",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    message: "Could you provide more information on pricing?",
    createdAt: "2024-01-16T14:20:00Z",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert.j@example.com",
    message: "Interested in scheduling a consultation call.",
    createdAt: "2024-01-17T09:15:00Z",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    message: "Thank you for the quick response to my previous inquiry.",
    createdAt: "2024-01-18T16:45:00Z",
  },
  {
    id: "5",
    name: "Michael Brown",
    email: "m.brown@example.com",
    message: "I have a question about your implementation process.",
    createdAt: "2024-01-19T11:30:00Z",
  },
  {
    id: "6",
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    message: "Looking forward to discussing potential collaboration.",
    createdAt: "2024-01-20T13:00:00Z",
  },
  {
    id: "7",
    name: "David Martinez",
    email: "david.m@example.com",
    message: "Can you send me more details about your portfolio?",
    createdAt: "2024-01-21T10:00:00Z",
  },
  {
    id: "8",
    name: "Lisa Anderson",
    email: "lisa.anderson@example.com",
    message: "I need help with a specific technical requirement.",
    createdAt: "2024-01-22T15:30:00Z",
  },
  {
    id: "9",
    name: "James Taylor",
    email: "james.taylor@example.com",
    message: "Thank you for your excellent customer service!",
    createdAt: "2024-01-23T09:00:00Z",
  },
  {
    id: "10",
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    message: "I would like to schedule a demo for next week.",
    createdAt: "2024-01-24T14:15:00Z",
  },
];

// In-memory store initialized with existing requests
// TODO: This is mock persistence - implement insert/update logic as needed
export const MOCK_REQUEST_STORE: RequestRecord[] = [...MOCK_EXISTING_REQUESTS];

