import React, { useEffect } from "react";
import SidebarCom from "../../Components/Project/sidebar/SidebarCom";
import NavbarCom from "../../Components/Project/navbar/NavbarCom";
import { Outlet } from "react-router-dom";
import { Container } from "../../Components/Basic/containers/Containers";

function BaseLayout() {
  const CreateScript = (path) => {
    const script = document.createElement("script");
    script.src = path;
    // script.type = "";
    document.body.appendChild(script);
  };
  useEffect(() => {
    CreateScript("/assets/vendor/libs/jquery/jquery.js");
    CreateScript("/assets/vendor/libs/popper/popper.js");
    CreateScript("/assets/vendor/js/bootstrap.js");
    CreateScript("/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js");
    CreateScript("/assets/vendor/js/menu.js");
    CreateScript("/assets/js/main.js");
    console.log("ADD JSS");
  }, []);
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
