import { ColumnDef } from "@tanstack/react-table";
import { ChangeEvent } from "react";

type Pagination = {
  pageIndex: number;
  pageSize: number;
  totalPages: number
};

export interface User {
    user_id: string;
    role: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    gender: string | null;
    email: string;
    country_code: string;
    primary_phone_number: string;
    alternate_phone_number: string | null;
    is_primary_phone_number_verified: boolean;
    is_alternate_phone_number_verified: boolean;
    is_email_verified: boolean;
    created_at: string;
    updated_at: string;
    is_active: boolean;
    is_deleted: boolean;
  }
  export interface UsersResponse {
    data: User[];
    total: number;
    totalPages: number;
    page: number;
    limit: number;
  }

  type Country = {
    country_code: string;
    country_name: string;
    calling_code: string;
    official_name: string;
  };
  
export type CountriesType = Country[];

export type InviteUser = {
  firstName: string;
  lastName: string;
  email: string;
  primaryPhoneNumber: string;
  countryCode: string;
  role: string;
}

export type UserTableProps = {
  data: User[]; 
  pagination: Pagination; 
  onPageChange:(event: ChangeEvent<unknown>, page: number) => void 
  loading: boolean; 
};

export type DataTableProps = {
  columns: ColumnDef<User>[]; 
  data: User[];                     
  pagination: Pagination;                
  onPageChange: (event: ChangeEvent<unknown>, page: number) => void 
  loading: boolean;                     
};