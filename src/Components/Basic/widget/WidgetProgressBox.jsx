import React from "react";
import { Card } from "../card/Card";
import Progress from "../progress/Progress";

function WidgetProgressBox({
  className = "bg-danger text-white",
  icon = <i className="far fa-bookmark"></i>,
  title = "",
  subTitle = "",
}) {
  return (
    <Card className={"progress-box " + className}>
      <span className="info-box-icon">{icon}</span>

      <div className="info-box-content">
        <span className="info-box-text">{title}</span>
        <span className="info-box-number">{subTitle}</span>

        <Progress className="my-2" />
      </div>
    </Card>
  );
}

export default WidgetProgressBox;
