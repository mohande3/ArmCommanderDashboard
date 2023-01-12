import React, { useEffect, useState } from "react";
import { Card } from "../../Basic/card/Card";
import Table from "../../Basic/table/Table";
import PersonnelApiService from "../../../services/apis/PersonnelApiService";
import { toast } from "react-hot-toast";
import { DateObject } from "react-multi-date-picker";
import { ShowDateFromUnix } from "../../Basic/formControlls/FormControlls";
import { useNavigate } from "react-router-dom";
import Modal, { ModalDelete, ModalShowBtn } from "../../Basic/modal/Modal";
import AuthService from "../../../services/AuthService";
function PersonnelTableCom() {
  const [personnels, setPersonnels] = useState(null);
  const [personnelIdForDelete, setPersonnelIdForDelete] = useState(undefined);
  const navigate = useNavigate();
  const columns = [
    {
      title: "کد",
      property: "id",
      render: (row) => {
        console.log(row["personnelImage"]);
        return (
          <td>
            <span className="ms-2">{row["id"]}</span>
            {row["personnelImage"] != null && row["personnelImage"] != "" ? (
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
            <button
              className="btn btn-sm btn-warning"
              onClick={(e) =>
                navigate(`/personnel/edit/${row["personnelNumber"]}`)
              }
            >
              EDIT
            </button>
            <ModalShowBtn
              text="DELT"
              modalId="modalDelete"
              className="btn-sm btn-danger me-2"
              onHandleClick={(e) => {
                console.log(row["id"]);
                setPersonnelIdForDelete(row["id"]);
              }}
            />
          </td>
        );
      },
    },
  ];
  const ConfirmDelete = async () => {
    console.log(personnelIdForDelete);
    if (personnelIdForDelete === undefined || personnelIdForDelete === null) {
      toast.warn("لطفا یک شخص را برای حذف انتخاب کنید . ");
      return;
    }
    console.log(personnelIdForDelete);
    let resultFromServer = await PersonnelApiService.DeleteByIdAsync(
      personnelIdForDelete
    );
    console.log(resultFromServer);
    if (resultFromServer.isSuccess) {
      toast.success("حذف شخص به درستی انجام شد . ");
      await LoadData();
    } else {
      toast.error(resultFromServer.messages[0]);
    }
  };
  const LoadData = async () => {
    setPersonnels(null);
    let dataFromServer = await PersonnelApiService.GetTableAsync();
    if (AuthService.IsEndTokenAccess(dataFromServer)) {
      navigate("/login");
      toast.error("زمان لاگین شما به پایان رسیده است . ");
      return;
    }

    if (dataFromServer.isSuccess) {
      setPersonnels(dataFromServer.result.results);
    } else {
      toast.error(dataFromServer.messages[0]);
      setPersonnels([]);
    }
  };
  useEffect(() => {
    if (AuthService.IsAuthenticated()) {
      LoadData();
    }
  }, []);
  return (
    <>
      <ModalDelete
        id="modalDelete"
        text="آیا از حذف این شخص اطمینان دارید ؟ "
        onHandleClickConfirm={ConfirmDelete}
      />
      <Card title="مدیریت کاربران">
        <Table columns={columns} rows={personnels} type={"primary-2"} />
      </Card>
    </>
  );
}

export default PersonnelTableCom;
