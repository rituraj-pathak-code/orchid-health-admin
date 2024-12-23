import UserTable from "./UserTable";
import { UserService } from "../../services/userServices";
import { ChangeEvent, useEffect, useState } from "react";
import InviteUserModal from "./InviteUserModal";
import { useQuery } from "@tanstack/react-query";
import SelectCountry from "../SelectCountry";
import { UsersResponse } from "@/types/userTypes";
import { toast } from "react-toastify";

const Users = () => {
  const [country, setCountry] = useState<string | null>(null);
  const token: unknown = localStorage.getItem("token");
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
    totalPages: 0,
  });

  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery<UsersResponse>({
    queryKey: [
      "users",
      token,
      pagination.pageIndex,
      pagination.pageSize,
      country,
    ],
    queryFn: () => {
      if (country) {
        return UserService.getUsersByCountries(
          token,
          country,
          pagination.pageIndex,
          pagination.pageSize
        );
      } else {
        return UserService.getAllUsers(
          token,
          pagination.pageIndex,
          pagination.pageSize
        );
      }
    },
    staleTime: 5000,
    retry: 2,
  });

  useEffect(() => {
    if (isSuccess && users) {
      setPagination((prev) => ({
        ...prev,
        pageSize: users.limit,
        totalPages: users.totalPages,
      }));
    } else if (isError && error instanceof Error) {
      console.log(error);
      toast.error("An unexpected error occurred.",{toastId:'userfetch-failed'});
    }
  }, [isSuccess, users, isError, error]);

  const handlePageChange = (e: ChangeEvent<unknown>, newPageIndex: number) => {
    console.log(e)
    setPagination((prev) => ({ ...prev, pageIndex: newPageIndex }));
  };

  const handleCountrySelect = (country: string | null) => {
    setCountry(country);
  };

  return (
    <>
      <div className="">
        <div className="mb-4 flex justify-between items-end">
          <SelectCountry handleCountrySelect={handleCountrySelect} />
          <InviteUserModal />
        </div>
        <UserTable
          data={users?.data || []}
          pagination={pagination}
          onPageChange={handlePageChange}
          loading={isLoading}
        />
      </div>
    </>
  );
};

export default Users;
