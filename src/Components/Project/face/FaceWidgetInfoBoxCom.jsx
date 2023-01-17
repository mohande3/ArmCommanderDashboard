import React from 'react'
import WidgetInforBox from '../../Basic/widget/WidgetInforBox';

function FaceWidgetInfoBoxCom() {
  return (
    <WidgetInforBox
      icon={<i class="far fa-user"></i>}
      header={"تعداد تمپلیت چهره ها"}
      subHeader="200"
      className="bg-warning"
      classNameContent="text-white"
    />
  );
}

export default FaceWidgetInfoBoxCom