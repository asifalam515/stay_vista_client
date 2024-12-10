import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/sidebar";

const DashBoardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* side bar (will be fixed) */}

      <Sidebar></Sidebar>
      {/* OUtlet---------->dynamic content */}
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
