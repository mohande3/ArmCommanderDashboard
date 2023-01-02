import React from "react";
import SidebarCom from "../../Components/Project/sidebar/SidebarCom";
import NavbarCom from "../../Components/Project/navbar/NavbarCom";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <SidebarCom />
        <div class="layout-page">
          <NavbarCom />
          <Outlet />
        </div>
      </div>

      <div class="layout-overlay layout-menu-toggle"></div>
    </div>
  );
}

export default BaseLayout;
