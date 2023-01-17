import React from "react";
import WidgetInforBox from "../../Basic/widget/WidgetInforBox";

function DeviceWidgetInfoCom() {
  return (
    <WidgetInforBox
      icon={<i class="far fa-envelope"></i>}
      header="دستگاه ها"
      subHeader={"120 - 0"}
      classNameIcon="bg-danger"
    />
  );
}

export default DeviceWidgetInfoCom;
