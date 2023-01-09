import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import DeviceTable from "../Pages/device/DeviceTable";
import BaseLayout from "../Pages/Layout/BaseLayout";
import PersonnelAddOrEdit from "../Pages/personnel/PersonnelAddOrEdit";
import PersonnelTable from "../Pages/personnel/PersonnelTable";
import TimeLogTable from "../Pages/timelog/TimeLogTable";

function FullRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/timelogs" element={<TimeLogTable />} />
          <Route path="/personnel" element={<PersonnelTable />} />
          <Route path="/personnel/add" element={<PersonnelAddOrEdit />} />
          <Route
            path="/personnel/edit/:personnelNumber"
            element={<PersonnelAddOrEdit />}
          />
          <Route path="/devices" element={<DeviceTable />} />
        </Route>
      </Routes>
    </>
  );
}

export default FullRoute;
