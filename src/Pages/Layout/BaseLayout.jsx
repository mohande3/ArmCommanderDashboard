import React from "react";
import SidebarCom from "../../Components/Project/sidebar/SidebarCom";
import NavbarCom from "../../Components/Project/navbar/NavbarCom";
import { Outlet } from "react-router-dom";
import { Container } from "../../Components/Basic/containers/Containers";

function BaseLayout() {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <SidebarCom />
        <div className="layout-page">
          <NavbarCom />
          <Container className="mt-4">
            <Outlet />
          </Container>
        </div>
      </div>

      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  );
}

export default BaseLayout;
