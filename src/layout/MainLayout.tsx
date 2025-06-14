import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="h-screen bg-[#161B24] text-[#DDE9F1]">
      <div className="md:w-[880px] mx-auto h-[90%]">
        <Navbar />
        <div className="border h-full p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
