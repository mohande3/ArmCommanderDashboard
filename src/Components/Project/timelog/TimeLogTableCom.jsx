import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import TimeLogApiService from "../../../services/apis/TimeLogApiService";
import Card from "../../Basic/card/Card";
import Table from "../../Basic/table/Table";

function TimeLogTableCom() {
  const columns = [
    {
      title: "timeLogId",
      property: "timeLogId",
    },
    {
      title: "personNumber",
      property: "personNumber",
    },
    {
      title: "deviceSerialNumber",
      property: "deviceSerialNumber",
    },
    {
      title: "dateTimeOfTimeLog",
      property: "dateTimeOfTimeLog",
    },
    {
      title: "langitude",
      property: "langitude",
    },
    {
      title: "latitude",
      property: "latitude",
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
      <Table columns={columns} rows={timeLogs} />
    </Card>
  );
}

export default TimeLogTableCom;
