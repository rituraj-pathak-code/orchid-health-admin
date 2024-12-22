import Input from "../ui/Input";
import { Button, Pagination, Tooltip } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import DataTable from "../ui/DataTable";
import { MdOutlineVerified } from "react-icons/md";

const columns = [
  {
    id: "select",
    size: 20,
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    accessorKey: "first_name",
    header: "First Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (props) => {
      const isEmailVerified = props.row.original.is_email_verified;
      return (
        <p className="flex items-center gap-[5px]">
          {props.getValue()}{" "}
          {isEmailVerified && (
            <Tooltip title={"Verified"}>
              <span className="cursor-pointer">
                <MdOutlineVerified className="text-blue-500" />
              </span>
            </Tooltip>
          )}
        </p>
      );
    },
  },
  {
    accessorKey: "primary_phone_number",
    header: "Phone Number",
    cell: (props) => {
      const isPhoneVerified =
        props.row.original.is_primary_phone_number_verified;
      return (
        <p className="flex items-center gap-[5px]">
          {props.getValue()}{" "}
          {isPhoneVerified && (
            <Tooltip title={"Verified"}>
              <span className="cursor-pointer">
                <MdOutlineVerified className="text-blue-500" />
              </span>
            </Tooltip>
          )}
        </p>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    id: "action",
    size: 100,
    header: "Action",
    cell: ({ row }) => (
      <div className="flex gap-2 items-center justify-between">
        <button>
          <FaEye size={16} color="#09A1E5" />
        </button>
        <button>
          <FaEdit size={16} color="#FFD23B" />
        </button>
        <button>
          <FaTrash size={14} color="#FF5178" />
        </button>
      </div>
    ),
  },
];

const UserTable = ({ data, pagination, totalPages, onPageChange,loading }) => {
  return (
    <div className="">
      <DataTable columns={columns} data={data} pagination={pagination} totalPages={totalPages} onPageChange={onPageChange} loading={loading} />
    </div>
  );
};

export default UserTable;
