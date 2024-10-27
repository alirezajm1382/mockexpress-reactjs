import { FC } from "react";
import { Outlet } from "react-router-dom";

//components
import AppHeader from "./other/AppHeader";

const MainLayout: FC = () => {
  return (
    <div>
      <AppHeader isInApp={true} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
