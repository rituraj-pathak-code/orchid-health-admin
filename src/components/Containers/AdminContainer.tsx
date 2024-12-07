import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import Sidebar from "../Common/Sidebar";

const AdminContainer = ({ children }) => {
  return (
    <div>
      <div style={{ display: "flex" }} className="bg-[#F3F3F9]">
        <Sidebar />
        <main style={{ flex: 1 }}>
          <Navbar />
          <div className="min-h-[100vh]">
              {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default AdminContainer;
