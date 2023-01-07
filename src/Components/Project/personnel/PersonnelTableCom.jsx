import React, { useEffect, useState } from "react";
import { Card } from "../../Basic/card/Card";
import Table from "../../Basic/table/Table";
import PersonnelApiService from "../../../services/apis/PersonnelApiService";
import { toast } from "react-hot-toast";
function PersonnelTableCom() {
  const [personnels, setPersonnels] = useState(null);
  const columns = [
    {
      title: "id",
      property: "id",
    },
    {
      title: "personnelNumber",
      property: "personnelNumber",
    },
    {
      title: "fullName",
      property: "fullName",
    },
    {
      title: "dateTimeOfStartWork",
      property: "dateTimeOfStartWork",
    },
    {
      title: "dateTimeOfEndWork",
      property: "dateTimeOfEndWork",
    },
  ];
  const LoadData = async () => {
    let dataFromServer = await PersonnelApiService.GetTableAsync();
    console.log(dataFromServer)
    if (dataFromServer.isSuccess) {
      setPersonnels(dataFromServer.result.results);
    } else {
      toast.error(dataFromServer.messages[0]);
    }
  };
  useEffect(() => {
    LoadData();
  }, []);
  return (
    <Card title="مدیریت کاربران">
      <Table columns={columns} rows={personnels} />
    </Card>
  );
}

export default PersonnelTableCom;
