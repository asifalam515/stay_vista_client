import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div>
      {/* side bar (will be fixed) */}

      <div>Sidebar</div>
      {/* OUtlet---------->dynamic content */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoardLayout;
