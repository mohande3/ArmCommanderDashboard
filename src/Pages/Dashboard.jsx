import React, { useEffect } from "react";
import Modal, { ModalShowBtn } from "../Components/Basic/modal/Modal";
import IsAuthenticatedCom from "../Components/Project/auth/IsAuthenticatedCom";
import DashboardCom from "../Components/Project/dashboard/DashboardCom";
import AuthService from "../services/AuthService";
import BaseLayout from "./Layout/BaseLayout";

function Dashboard() {
  return (
    <>
      <DashboardCom />
    </>
  );
}

export default Dashboard;
