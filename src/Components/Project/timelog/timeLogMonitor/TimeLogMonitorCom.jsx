import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import TimeLogApiService from "../../../../services/apis/TimeLogApiService";
import { Col, Row } from "../../../Basic/containers/Containers";
import TimeLogSignalRTableCom from "../private/TimeLogSignalRTableCom";
import TimeLogMonitorCardCom from "./TimeLogMonitorCardCom";

function TimeLogMonitorCom() {
  const [timeLogs, setTimeLogs] = useState(null);
  const [timeLogNewReceive, setTimeLogNewReceive] = useState(null);
  const LoadData = async () => {
    let oApiResultFromServer = await TimeLogApiService.GetTableAsync();
    console.log(oApiResultFromServer);
    if (oApiResultFromServer.isSuccess) {
      setTimeLogs(oApiResultFromServer.result.results);
    } else {
      toast.error(oApiResultFromServer.messages[0]);
    }
  };
  useEffect(() => {
    LoadData();
  }, []);
  useEffect(() => {
    if (!timeLogNewReceive) return;
    let newData = [timeLogNewReceive, ...timeLogs];
    console.log('CHANGE')
    setTimeLogs(newData);
  }, [timeLogNewReceive]);
  return (
    <>
      <TimeLogSignalRTableCom
        onHandleNewTimeLog={(tm) => {
          setTimeLogNewReceive(tm);
        }}
      />
      <Row>
        {timeLogs && (
          <>
            {timeLogs.map((row, index) => (
              <Col col="12 col-sm-6 col-md-3 mb-2">
                <TimeLogMonitorCardCom
                  key={index}
                  className=""
                  personnelNumber={row["personnelNumber"]}
                  fullName={row["personnelFullName"]}
                  typeOfTimeLog={row["typeOfTimeLog"]}
                  typeOfVerifyTimeLog={row["typeOfVerifyTimeLog"]}
                  dateTimeOfTimeLog={row["dateTimeOfTimeLog"]}
                  personnelImage={row["imageBase64Live"]}
                />
              </Col>
            ))}
          </>
        )}
      </Row>
    </>
  );
}

export default TimeLogMonitorCom;
