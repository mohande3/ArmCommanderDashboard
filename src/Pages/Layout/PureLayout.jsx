import React from "react";
import SidebarCom from "../../Components/Project/sidebar/SidebarCom";
import NavbarCom from "../../Components/Project/navbar/NavbarCom";
import { Outlet } from "react-router-dom";
import { Container } from "../../Components/Basic/containers/Containers";

function PureLayout() {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <Outlet />
    </div>
  );
}

export default PureLayout;
