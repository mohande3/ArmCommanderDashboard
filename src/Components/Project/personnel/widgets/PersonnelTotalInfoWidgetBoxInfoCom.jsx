import React from "react";
import Widget from "../../../Basic/widget/Widget";
import WidgetInforBox from "../../../Basic/widget/WidgetInforBox";
import { Row, Col } from "../../../Basic/containers/Containers";
function PersonnelTotalInfoWidgetBoxInfoCom() {
  return (
    <>
      <WidgetInforBox
        icon={<i class="far fa-user"></i>}
        header={"تعداد پرسنل"}
        subHeader="3500"
        classNameIcon="bg-info"
      />
    </>
  );
}

export default PersonnelTotalInfoWidgetBoxInfoCom;
