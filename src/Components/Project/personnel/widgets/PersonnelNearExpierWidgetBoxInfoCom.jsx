import React from "react";
import WidgetInforBox from "../../../Basic/widget/WidgetInforBox";

function PersonnelNearExpierWidgetBoxInfoCom() {
  return (
    <WidgetInforBox
      icon={<i class="far fa-user"></i>}
      header={"افرادی که نزدیک به پایان قرار داد هستند ."}
      subHeader="10"
      className="bg-info"
      classNameContent="text-white"
    />
  );
}

export default PersonnelNearExpierWidgetBoxInfoCom;
