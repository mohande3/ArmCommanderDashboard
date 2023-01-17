import React from 'react'
import WidgetInforBox from '../../Basic/widget/WidgetInforBox';

function FingerprintWidgetInfoCom() {
  return (
    <WidgetInforBox
      icon={<i class="far fa-user"></i>}
      header={"تعداد اثرانگشت ها"}
      subHeader="3500"
      className="bg-danger"
      classNameContent='text-white'
    />
  );
}

export default FingerprintWidgetInfoCom