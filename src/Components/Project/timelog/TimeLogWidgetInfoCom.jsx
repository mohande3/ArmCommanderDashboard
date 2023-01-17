import React from 'react'
import WidgetInforBox from '../../Basic/widget/WidgetInforBox';

function TimeLogWidgetInfoCom() {
  return (
    <WidgetInforBox
      icon={<i class="far fa-user"></i>}
      header={"کل ترددهای امروز"}
      subHeader="3500"
      classNameIcon="bg-primary"
    />
  );
}

export default TimeLogWidgetInfoCom