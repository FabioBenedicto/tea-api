import { User } from '@models/user-model';

export interface UserCreateData {
  ra: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface UserFindUniqueByIdData {
  id: number;
}

export interface UserFindUniqueByEmailData {
  email: string;
}

export interface UserUpdateData {
  id: number;
  profile_picture_url?: string;
  notes?: string;
  emergency_phone_number?: string;
}

export interface UserRepositories {
  create: (data: UserCreateData) => Promise<void>;
  update: (data: UserUpdateData) => Promise<User>;
  findAll: () => Promise<User[]>;
  findUniqueById: (data: UserFindUniqueByIdData) => Promise<User | null>;
  findUniqueByEmail: (data: UserFindUniqueByEmailData) => Promise<User | null>;
}
