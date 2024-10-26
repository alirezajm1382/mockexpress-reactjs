import { FC } from "react";
import { Outlet } from "react-router-dom";

//components
import AppHeader from "./other/AppHeader";
import AppFooter from "./other/AppFooter";

const AppLayout: FC = () => {
  return (
    <div>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  );
};

export default AppLayout;
