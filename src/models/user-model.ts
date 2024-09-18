export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  emergency_phone_number: string | null;
  notes: string | null;
  profile_picture_url: string | null;
}
