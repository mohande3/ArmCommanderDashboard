import React, { useEffect, useState } from "react";
import { Card } from "../../Basic/card/Card";
import Table from "../../Basic/table/Table";
import PersonnelApiService from "../../../services/apis/PersonnelApiService";
import { toast } from "react-hot-toast";
import { DateObject } from "react-multi-date-picker";
import { ShowDateFromUnix } from "../../Basic/formControlls/FormControlls";
function PersonnelTableCom() {
  const [personnels, setPersonnels] = useState(null);
  const columns = [
    {
      title: "کد",
      property: "id",
      render: (row) => {
        return (
          <td>
            <span className="ms-2">{row["id"]}</span>
            {row["personnelImage"] != null ? (
              <>
                <img
                  src={`data:image/jpeg;base64,${row["personnelImage"]}`}
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
      title: "کد پرسنلی",
      property: "personnelNumber",
    },
    {
      title: "نام کامل",
      property: "fullName",
    },
    {
      title: "فعال",
      property: "isActive",
      render: (row) => {
        let isActive = row["isActive"];
        return (
          <td>
            {isActive ? (
              <>
                <span class="badge bg-success">فعال</span>
              </>
            ) : (
              <>
                <span class="badge bg-warning">غیرفعال</span>
              </>
            )}
          </td>
        );
      },
    },
    {
      title: "استثنا",
      property: "isSpecial",
      render: (row) => {
        let isSpecial = row["isSpecial"];
        return (
          <td>
            {isSpecial ? (
              <>
                <span class="badge bg-success">استثنا</span>
              </>
            ) : (
              <>
                <span class="badge bg-warning">غیراستثنا</span>
              </>
            )}
          </td>
        );
      },
    },
    //
    {
      title: "تعداد روز باقی مانده",
      property: "countOfDayToEndWorkDate",
      render: (row) => {
        let day = row["countOfDayToEndWorkDate"];
        const Show = () => {
          if (day < 10) return <span class="badge bg-danger">{day}</span>;
          if (day < 30) return <span class="badge bg-warning">{day}</span>;
          if (day < 90) return <span class="badge bg-success">{day}</span>;
          else return <span class="badge bg-primary">{day}</span>;
        };
        return <td>{Show()}</td>;
      },
    },
    {
      title: "تاریخ شروع به کار",
      property: "dateTimeOfStartWork",
      render: (row) => {
        return (
          <td>
            <ShowDateFromUnix unix={row["dateTimeOfStartWork"]} />
          </td>
        );
      },
    },
    {
      title: "تاریخ پایان کار",
      property: "dateTimeOfEndWork",
      render: (row) => {
        return (
          <td>
            <ShowDateFromUnix unix={row["dateTimeOfEndWork"]} />
          </td>
        );
      },
    },
    {
      title: "",
      property: "",
      render: (row) => {
        return (
          <td>
            <button className="btn btn-sm btn-warning">EDIT</button>
            <button className="btn btn-sm btn-danger mx-2">DELE</button>
          </td>
        );
      },
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
      <Table columns={columns} rows={personnels} type={"primary-2"} />
    </Card>
  );
}

export default PersonnelTableCom;
