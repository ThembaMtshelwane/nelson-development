export interface ApiErrorResponse {
  success: boolean;
  message: string;
  errors?: { path: string; message: string }[];
}