import React from "react";
import { Card } from "../../../Basic/card/Card";
import StaticValuesService from "../../../../services/StaticValuesService";
import { ShowTimeFromUnix } from "../../../Basic/formControlls/FormControlls";
import TimeLogSignalRTableCom from "../private/TimeLogSignalRTableCom";
function TimeLogMonitorCardCom({
  className = "",
  personnelNumber = "2480179680",
  fullName = "محمد تقی خادمی",
  typeOfVerifyTimeLog = 1,
  typeOfTimeLog = 1,
  dateTimeOfTimeLog,
  personnelImage = "",
}) {

  const GetName = () => {
    if (fullName) return fullName;
    return "بدون نام";
  };

  const GetImagePersonnel = () => {
    if (personnelImage) return `data:image/jpeg;base64,${personnelImage}`;
    return "../assets/img/avatars/1.png";
  };
  return (
    <>
      <Card
        className={className}
        image={GetImagePersonnel()}
        titleElement={
          <>
            <strong>کد پرسنلی : {personnelNumber}</strong>
          </>
        }
      >
        <div className="d-flex justify-content-center mt-2">
          <span className="btn btn-primary w-100">{GetName()}</span>
        </div>
        <div className="mt-2 d-flex justify-content-between">
          {StaticValuesService.GetTagTypeOfTimeLog(typeOfTimeLog)}
          {StaticValuesService.GetTagTypeOfVerifyTimeLog(typeOfVerifyTimeLog)}
          <ShowTimeFromUnix
            unix={dateTimeOfTimeLog}
            className="btn btn-outline-info btn-sm"
          />
        </div>
      </Card>
    </>
  );
}

export default TimeLogMonitorCardCom;
