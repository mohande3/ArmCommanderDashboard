import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import DeviceTable from "../Pages/device/DeviceTable";
import BaseLayout from "../Pages/Layout/BaseLayout";
import PersonnelAddOrEdit from "../Pages/personnel/PersonnelAddOrEdit";
import PersonnelTable from "../Pages/personnel/PersonnelTable";
import UserTable from "../Pages/user/UserTable";
import StationTable from "../Pages/station/StationTable";
import TimeLogTable from "../Pages/timelog/TimeLogTable";
import TrackingServiceTable from "../Pages/trackingService/TrackingServiceTable";
import TimeLogMonitor from "../Pages/timelog/TimeLogMonitor";
import Login from "../Pages/auth/Login";
import PureLayout from "../Pages/Layout/PureLayout";

function FullRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UserTable />} />
          <Route path="/personnel" element={<PersonnelTable />} />
          <Route path="/personnel/add" element={<PersonnelAddOrEdit />} />
          <Route
            path="/personnel/edit/:personnelNumber"
            element={<PersonnelAddOrEdit />}
          />
          <Route path="/timelogs" element={<TimeLogTable />} />
          <Route path="/timelogs/monitoring" element={<TimeLogMonitor />} />
          <Route path="/devices" element={<DeviceTable />} />
          <Route path="/tracking/stations" element={<StationTable />} />
          <Route path="/tracking/services" element={<TrackingServiceTable />} />
        </Route>
        <Route path="/login" element={<PureLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default FullRoute;
