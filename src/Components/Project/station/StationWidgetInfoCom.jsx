import React from 'react'
import WidgetInforBox from '../../Basic/widget/WidgetInforBox';

function StationWidgetInfoCom() {
  return (
    <WidgetInforBox
      icon={<i class="far fa-user"></i>}
      header={"ایستگاه ها"}
      subHeader="3500"
      classNameIcon="bg-warning"
    />
  );
}

export default StationWidgetInfoCom