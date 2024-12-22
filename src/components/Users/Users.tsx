import { Button } from "@/components/ui/button"

import UserTable from "./UserTable";
import { UserService } from "../../services/userServices";
import { useEffect, useState } from "react";
import InviteUserModal from "./InviteUserModal";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const Users = () => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [countries, setCountries] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const handlePageChange = (e, newPageIndex) => {
    setPagination((prev) => ({ ...prev, pageIndex: newPageIndex }));
  };

  const fetchOperatingCountries = async (token) => {
    const res = await UserService.getAllCountries(token);
    if (res.status == 200) {
      setCountries(res.data.data);
    }
  };

  const fetchUsers = async (token) => {
    setLoading(true);
    const res = await UserService.getAllUsers(
      token,
      pagination.pageIndex,
      pagination.pageSize
    );
    console.log(res);
    if (res.status == 200) {
      setUsers(res.data.data);
      setTotalPages(res.data.totalPages);
      setLoading(false);
    } else {
      setLoading(false);
      console.error("Error fetching data:");
    }
  };
  const fetchUsersByCountry = async (
    token,
    countryCode,
    page = pagination.pageIndex,
    pageSize = pagination.pageSize
  ) => {
    setLoading(true);
    const res = await UserService.getUsersByCountries(
      token,
      countryCode,
      page,
      pageSize
    );
    console.log(res);
    if (res.status == 200) {
      setUsers(res.data.data);
      setTotalPages(res.data.totalPages);
      setLoading(false);
    } else {
      setLoading(false);
      console.error("Error fetching data:");
    }
  };

  const onCountryChange = (country) => {
    if (country == "ALL") {
      fetchUsers(token);
    } else {
      fetchUsersByCountry(token, country, 1, 10);
      setPagination((prev) => ({
        pageIndex: 1,
        pageSize: 10,
      }));
    }
  };

  useEffect(() => {
    if (token) {
      fetchUsers(token);
      fetchOperatingCountries(token);
    }
  }, [pagination.pageIndex]);

  return (
    <>
      <div className="">
        <div className="mb-4 flex justify-between items-end">
          <div className="w-[250px]">
            <h3 className="font-bold mb-2 text-sm">Select Country</h3>
            <Select onValueChange={onCountryChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">ALL</SelectItem>
                {countries.map((item) => (
                  <SelectItem  value={item?.country_code}>
                    {item.country_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <InviteUserModal  />
        </div>
        <UserTable
          data={users}
          pagination={pagination}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          loading={loading}
        />
      </div>
     
    </>
  );
};

export default Users;
