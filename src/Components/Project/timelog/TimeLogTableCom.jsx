import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import TimeLogApiService from "../../../services/apis/TimeLogApiService";
import { Card } from "../../Basic/card/Card";
import Table from "../../Basic/table/Table";

function TimeLogTableCom() {
  const columns = [
    {
      title: "کد",
      property: "timeLogId",
    },
    {
      title: "کد پرسنلی",
      property: "personNumber",
    },
    {
      title: "سریال دستگاه",
      property: "deviceSerialNumber",
    },
    {
      title: "تاریخ تردد",
      property: "dateTimeOfTimeLog",
    },
    {
      title: "نوع تردد",
      property: "dateTimeOfTimeLog",
    },
    {
      title: "روش شناسایی",
      property: "dateTimeOfTimeLog",
    },
    {
      title: "مکان جغرافیایی",
      property: "langitude",
    },
  ];
  const [timeLogs, setTimeLogs] = useState([]);
  const LoadData = async () => {
    let oApiResultFromServer = await TimeLogApiService.GetTableAsync();
    if (oApiResultFromServer.isSuccess) {
      console.log(oApiResultFromServer.result.results);
      setTimeLogs(oApiResultFromServer.result.results);
    } else {
      toast.error(oApiResultFromServer.messages[0]);
    }
  };
  useEffect(() => {
    LoadData();
  }, []);
  return (
    <Card title="ترددها">
      <Table columns={columns} rows={timeLogs} type="primary-2" />
    </Card>
  );
}

export default TimeLogTableCom;
