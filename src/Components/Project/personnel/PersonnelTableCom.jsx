import React, { useEffect, useState } from "react";
import { Card } from "../../Basic/card/Card";
import Table from "../../Basic/table/Table";
import PersonnelApiService from "../../../services/apis/PersonnelApiService";
import { toast } from "react-hot-toast";
function PersonnelTableCom() {
  const [personnels, setPersonnels] = useState(null);
  const columns = [
    {
      title: "کد",
      property: "id",
      render: (row) => {
        return <td>
          <span className="ms-2">{row["id"]}</span>
          <img src="../assets/img/avatars/1.png" className="img-personnel-table"/>
        </td>
      }
    },
    {
      title: "کد پرسنلی",
      property: "personnelNumber",
    },
    {
      title: "نام کامل",
      property: "fullName",
    },
    {
      title: "تاریخ شروع به کار",
      property: "dateTimeOfStartWork",
    },
    {
      title: "تاریخ پایان کار",
      property: "dateTimeOfEndWork",
    },
  ];
  const LoadData = async () => {
    let dataFromServer = await PersonnelApiService.GetTableAsync();
    console.log(dataFromServer);
    if (dataFromServer.isSuccess) {
      setPersonnels(dataFromServer.result.results);
    } else {
      toast.error(dataFromServer.messages[0]);
      setPersonnels([]);
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
