import { Link } from "react-router-dom";
import Users from "../components/Users/Users";
import { Breadcrumbs } from "@mui/material";
import { FaAnglesRight } from "react-icons/fa6";

const UsersPage = () => {
  const breadcrumbs = [
    <Link to={"/"} className="text-xs">Dashboard</Link>,
    <span className="text-xs text-blue-500">Users</span>,
  ];
  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="font-semibold">Users</h2>
        <Breadcrumbs
          separator={<FaAnglesRight size={10} />}
          aria-label="breadcrumb-userpage"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <Users />
    </div>
  );
};

export default UsersPage;
