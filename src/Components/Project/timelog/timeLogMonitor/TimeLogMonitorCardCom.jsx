import React from "react";
import { Card } from "../../../Basic/card/Card";

function TimeLogMonitorCardCom({
  className = "",
  personnelNumber = "2480179680",
  fullName = "محمد تقی خادمی",
  typeOfVerifyTimeLog = 1,
  typeOfTimeLog = 1,
  time = "14:20",
  personnelImage=""
}) {
  console.log(personnelImage);
  return (
    <Card
      className={className}
      image={personnelImage}
      titleElement={
        <>
          <strong>کد پرسنلی : {personnelNumber}</strong>
        </>
      }
    >
      <div className="d-flex justify-content-center mt-2">
        <span className="btn btn-primary w-100">{fullName}</span>
      </div>
      <div className="mt-2 d-flex justify-content-between">
        <span className="btn btn-sm btn-outline-primary">اثرانگشت</span>
        <span className="btn btn-sm btn-outline-warning mx-2">ماموریت</span>
        <span className="btn btn-sm btn-outline-info">{time}</span>
      </div>
    </Card>
  );
}

export default TimeLogMonitorCardCom;
