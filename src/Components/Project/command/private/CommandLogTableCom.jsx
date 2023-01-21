import React, { useEffect, useState } from "react";
import Table from "../../../Basic/table/Table";
import CommandService from "../../../../services/CommandService";
import { toast } from "react-hot-toast";
function CommandLogTableCom({ reLoad }) {
  const [commandLogs, setCommandLogs] = useState(null);
  const columns = [
    {
      title: "دستور",
      property: "nameOfCommand",
    },
    {
      title: "سریال دستگاه",
      property: "serialNumber",
    },
    {
      title: "زمان ایجاد",
      property: "dateTimeOfCreation",
    },
    {
      title: "زمان خواندن",
      property: "dateTimeOfRead",
    },
    {
      title: "زمان اجرا",
      property: "dateTimeOfExecute",
    },
    {
      title: "زمان اتمام",
      property: "dateTimeOfEnd",
    },
    {
      title: "توضیحات",
      property: "description",
    },
    {
      title: "",
      property: "",
      render: (row) => {
        return (
          <td>
            <button className="btn btn-info btn-sm">DETAILS</button>
          </td>
        );
      },
    },
  ];
  const LoadData = async () => {
    let resultFromServer = await CommandService.GetTableAsync();
    console.log(resultFromServer);
    if (resultFromServer.isSuccess) {
      setCommandLogs(resultFromServer.result.results);
    } else {
      toast.error(resultFromServer.messages[0]);
    }
  };
  useEffect(() => {
    LoadData();
  }, [reLoad]);
  return (
    <>
      <Table columns={columns} rows={commandLogs} type="primary-2" />
    </>
  );
}

export default CommandLogTableCom;
