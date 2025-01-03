
interface UserData {
  user_id: string;
  role: string;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  email: string;
  country_code: string;
  primary_phone_number: string;
  alternate_phone_number: string;
  is_primary_phone_number_verified: boolean;
  is_alternate_phone_number_verified: boolean;
  is_email_verified: boolean;
  created_at: string; // ISO string
  updated_at: string; // ISO string
  is_active: boolean;
  is_deleted: boolean;
}
export interface LoginFormValues {
    email: string;
    password: string;
  }
export interface LoginResponse {
  data: UserData;
  tokenData: string;
  expiresIn: number;
  message: string;
}

export interface ErrorResponse {
  response?: {
    status: number;
  };
}
