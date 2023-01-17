import React from "react";
import { Card } from "../card/Card";
function WidgetInforBox({
  className = "",
  classNameIcon = "",
  classNameContent = "text-black",
  icon,
  header,
  subHeader,
}) {
  return (
    <Card className={"info-box  " + className}>
      <span class={"info-box-icon " + classNameIcon}>{icon}</span>
      <div class={"info-box-content text-center " + classNameContent}>
        <strong class="info-box-text">{header}</strong>
        <span class="info-box-number">{subHeader}</span>
      </div>
    </Card>
  );
}

export default WidgetInforBox;
