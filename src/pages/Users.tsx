import { Button } from "@mui/material";
import UserTable from "../components/Users/UserTable";
import { UserService } from "../services/userServices";
import { useState } from "react";
import NewModal, { ModalBody, ModalFooter, ModalHeader } from "../components/ui/NewModal";
import InviteUserModal from "../components/Users/InviteUserModal";

const Users = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
    <div className="p-4">
      <div className="bg-white">
        <div className="flex justify-end py-2 px-2">
          <Button onClick={()=>setOpenModal(true)}>Invite User</Button>
        </div>
        <UserTable />
      </div>
    </div>
    <InviteUserModal open={openModal} onClose={()=>setOpenModal(false)}/>
    </>
  );
};

export default Users;
