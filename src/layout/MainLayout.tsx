import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="h-screen bg-[#161B24] text-[#DDE9F1]">
      <div className="md:w-[640px] mx-auto h-[75%]">
        <Navbar />
        <div className="h-full flex items-center justify-center border rounded-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
