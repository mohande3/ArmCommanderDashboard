import React, { useEffect } from "react";
import Modal, { ModalShowBtn } from "../Components/Basic/modal/Modal";
import IsAuthenticatedCom from "../Components/Project/auth/IsAuthenticatedCom";
import AuthService from "../services/AuthService";
import BaseLayout from "./Layout/BaseLayout";

function Dashboard() {
  return (
    <>
      <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">
         
        </div>
        <div class="content-backdrop fade"></div>
      </div>
    </>
  );
}

export default Dashboard;
