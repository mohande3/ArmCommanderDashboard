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
import PersonnelSearchTableCom from "./private/PersonnelSearchTableCom";
import Divider, { DividerInfo } from "../../Basic/divider/Divider";
function PersonnelTableCom({
  isShowSearchSection = true,
  isShowFullDara = true,
  classNameTable = "personnelTableFullSize",
  Header = "مدیریت پرسنل",
  isCheckable = false,
  isCheckAll = false,
  personnelNumbersSelected = [],
  onHandleCheckedOne,
}) {
  const [personnels, setPersonnels] = useState(null);
  const [personnelIdForDelete, setPersonnelIdForDelete] = useState(undefined);
  const [columns, setColumns] = useState([]);
  const navigate = useNavigate();
  const ConfirmDelete = async () => {
    if (personnelIdForDelete === undefined || personnelIdForDelete === null) {
      toast.warn("لطفا یک شخص را برای حذف انتخاب کنید . ");
      return;
    }
    let resultFromServer = await PersonnelApiService.DeleteByIdAsync(
      personnelIdForDelete
    );
    if (resultFromServer.isSuccess) {
      toast.success("حذف شخص به درستی انجام شد . ");
      await LoadData();
    } else {
      toast.error(resultFromServer.messages[0]);
    }
  };
  const LoadData = async (searchData) => {
    setPersonnels(null);
    let dataFromServer = await PersonnelApiService.GetTableAsync(searchData);
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
    if (isShowFullDara) {
      setColumns([
        {
          title: "",
          property: "id",
          render: (row) => {
            return (
              <td>
                {/* <span className="ms-2">{row["id"]}</span> */}
                {row["personnelImage"] != null &&
                row["personnelImage"] != "" ? (
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
          fieldForCheckSelected: true,
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
                  content="DELT"
                  modalId="modalDelete"
                  className="btn-sm btn-danger me-2"
                  onHandleClick={(e) => {
                    setPersonnelIdForDelete(row["id"]);
                  }}
                />
              </td>
            );
          },
        },
      ]);
    } else {
      setColumns([
        {
          title: "کد پرسنلی",
          property: "personnelNumber",
          fieldForCheckSelected: true,
        },
        {
          title: "نام کامل",
          property: "fullName",
        },
      ]);
    }
  }, [isShowFullDara]);
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
      <Card title={Header}>
        {isShowSearchSection && (
          <>
            <PersonnelSearchTableCom
              onHandleSearchClick={async (searchData) => {
                await LoadData(searchData);
              }}
            />
            <Divider />
          </>
        )}
        <Table
          isCheckable={isCheckable}
          columns={columns}
          rows={personnels}
          type={"primary-2"}
          className={classNameTable}
          isCheckAll={isCheckAll}
          idsChecked={personnelNumbersSelected}
          onHandleCheckedOne={onHandleCheckedOne}
        />
      </Card>
    </>
  );
}

export default PersonnelTableCom;
