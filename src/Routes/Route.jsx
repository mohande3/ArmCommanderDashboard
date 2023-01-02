import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import BaseLayout from "../Pages/Layout/BaseLayout";

function FullRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default FullRoute;
