/**
 * API service — POSTs the contact/appointment form to the Express backend.
 *
 * In development:  Vite proxies  /api  →  http://localhost:5000
 * In production:   requests go to the same origin (serve frontend + backend together)
 *                  OR set VITE_API_URL to your hosted backend URL.
 */

const API_BASE = import.meta.env.VITE_API_URL ?? '';

export interface OrderFormData {
  first: string;
  middle?: string;
  last: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  address: string;
  message: string;
}

export interface ApiResponse {
  msg: string;
}

export async function submitFormData(data: OrderFormData): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE}/get-form-data`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  const json: ApiResponse = await response.json();

  if (!response.ok) {
    throw new Error(json.msg || 'Something went wrong. Please try again.');
  }

  return json;
}
