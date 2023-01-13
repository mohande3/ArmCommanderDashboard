import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import TimeLogApiService from "../../../services/apis/TimeLogApiService";
import StaticValuesService from "../../../services/StaticValuesService";
import { Card } from "../../Basic/card/Card";
import { DividerInfo } from "../../Basic/divider/Divider";
import { ShowDateFromUnix } from "../../Basic/formControlls/FormControlls";
import Table from "../../Basic/table/Table";
import TimeLogSearchTableCom from "./private/TimeLogSearchTableCom";
import TimeLogSignalRTableCom from "./private/TimeLogSignalRTableCom";

function TimeLogTableCom({ isShowSearchSection = true }) {
  const columns = [
    {
      title: "کد",
      property: "timeLogId",
    },
    {
      title: "کد پرسنلی",
      property: "personnelNumber",
    },
    {
      title: "عکس پرسنلی",
      property: "imageBase64Live",
      render: (row) => {
        return (
          <td>
            {row["imageBase64Live"] != null && row["imageBase64Live"] != "" ? (
              <>
                <img
                  src={`data:image/jpeg;base64,${row["imageBase64Live"]}`}
                  className="img-personnel-table"
                />
              </>
            ) : (
              <>
                <img
                  src="../assets/img/avatars/1.png"
                  className="img-personnel-table"
                />
              </>
            )}
          </td>
        );
      },
    },
    {
      title: "نام و نام خانوادگی",
      property: "personnelFullName",
    },
    {
      title: "سریال دستگاه",
      property: "deviceSerialNumber",
    },
    {
      title: "تاریخ تردد",
      property: "dateTimeOfTimeLog",
      render: (row) => {
        return (
          <td>
            <ShowDateFromUnix unix={row["dateTimeOfTimeLog"]} />
          </td>
        );
      },
    },
    {
      title: "نوع تردد",
      property: "typeOfTimeLog",
      render: (row) => {
        return (
          <td>
            {StaticValuesService.GetTagTypeOfTimeLog(
              Number(row["typeOfTimeLog"])
            )}
          </td>
        );
      },
    },
    {
      title: "روش شناسایی",
      property: "typeOfVerifyTimeLog",
      render: (row) => {
        return (
          <td>
            {StaticValuesService.GetTagTypeOfVerifyTimeLog(
              Number(row["typeOfVerifyTimeLog"])
            )}
          </td>
        );
      },
    },
    {
      title: "مکان جغرافیایی",
      property: "",
      render: (row) => {
        return (
          <td>
            <span className="badge bg-primary">
              {row["latitude"]} | {row["langitude"]}
            </span>
          </td>
        );
      },
    },
  ];
  const [timeLogs, setTimeLogs] = useState([]);
  const [newTimeLogFromSignalR, setNewTimeLogFromSignalR] = useState(null);
  const LoadData = async (timeLogSearch) => {
    console.log("CAL LOAD DATA");
    let oApiResultFromServer = await TimeLogApiService.GetTableAsync(
      timeLogSearch
    );
    if (oApiResultFromServer.isSuccess) {
      setTimeLogs(oApiResultFromServer.result.results);
    } else {
      toast.error(oApiResultFromServer.messages[0]);
    }
  };
  const HandleNewTimeLogFromSignalR = (newTimeLog) => {
    setNewTimeLogFromSignalR(newTimeLog);
  };
  useEffect(() => {
    LoadData();
  }, []);
  useEffect(() => {
    console.log("COUNT DATA IN TIMELOGS : ", timeLogs);
  }, [timeLogs]);
  useEffect(() => {
    if (!newTimeLogFromSignalR) return;
    console.log("RECEIVE NEW TIMELOG");
    let newData = [];
    newData = [newTimeLogFromSignalR, ...timeLogs];
    setTimeLogs(newData);
  }, [newTimeLogFromSignalR]);
  // console.log("ALL : ", timeLogs);
  return (
    <>
      <TimeLogSignalRTableCom
        onHandleNewTimeLog={HandleNewTimeLogFromSignalR}
      />
      <Card title="ترددها">
        {isShowSearchSection && (
          <>
            <TimeLogSearchTableCom
              onHandleSearchClick={async (timeLogSearch) => {
                await LoadData(timeLogSearch);
              }}
            />
            <DividerInfo />
          </>
        )}
        <Table columns={columns} rows={timeLogs} type="primary-2" />
      </Card>
    </>
  );
}

export default TimeLogTableCom;
