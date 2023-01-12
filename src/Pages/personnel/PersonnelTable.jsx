import React from "react";
import IsAuthenticatedCom from "../../Components/Project/auth/IsAuthenticatedCom";
import PersonnelTableCom from "../../Components/Project/personnel/PersonnelTableCom";

function PersonnelTable() {
  return (
    <>
      <PersonnelTableCom isShowSearchSection={false} />
    </>
  );
}

export default PersonnelTable;
