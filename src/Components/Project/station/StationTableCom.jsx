import React, { useEffect, useState } from "react";
import { Card } from "../../Basic/card/Card";
import Table from "../../Basic/table/Table";
import PersonnelApiService from "../../../services/apis/PersonnelApiService";
import { toast } from "react-hot-toast";
import { DateObject } from "react-multi-date-picker";
import {
  InputText,
  Label,
  ShowDateFromUnix,
} from "../../Basic/formControlls/FormControlls";
import { useNavigate } from "react-router-dom";
import Modal, { ModalDelete, ModalShowBtn } from "../../Basic/modal/Modal";
import StationApiService from "../../../services/apis/StationApiService";
import { Col, Row } from "../../Basic/containers/Containers";
import StationAddOrEditModalCom from "./private/StationAddOrEditModalCom";
function StationTableCom() {
  const [stations, setstations] = useState(null);
  const [stationIdForDelete, setstationIdForDelete] = useState(null);
  const [station, setstation] = useState({
    name: "",
    description: "",
    isActive: true,
    latitude: 0,
    longitude: 0,
    carPathId: 0,
  });
  const columns = [
    {
      title: "کد",
      property: "carStationId",
    },
    {
      title: "نام ایستگاه",
      property: "name",
    },
    {
      title: "فعال بودن ایستگاه",
      property: "isActive",
      render: (row) => {
        if (row["isActive"])
          return (
            <td>
              <span className="badge bg-success">فعال</span>
            </td>
          );
        else
          return (
            <td>
              <span className="badge bg-warning">غیرفعال</span>
            </td>
          );
      },
    },
    {
      title: "موضعیت مکانی دستگاه",
      property: "",
      render: (row) => {
        return (
          <td>
            <span className="badge bg-primary">
              {row["latitude"]} | {row["longitude"]}
            </span>
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
            <ModalShowBtn
              className="btn-sm btn-warning"
              modalId="ModalAddEditstation"
              text="EDI"
              onHandleClick={(e) => {
                setstation({
                  carStationId: row["carStationId"],
                  description: row["description"],
                  isActive: row["isActive"],
                  latitude: row["latitude"],
                  longitude: row["longitude"],
                  name: row["name"],
                });
              }}
            />
            <ModalShowBtn
              className="btn-sm btn-danger me-2"
              text="DEL"
              modalId="modalDeletestation"
              onHandleClick={(e) => setstationIdForDelete(row["serialNumber"])}
            />
          </td>
        );
      },
    },
  ];
  const HandleAddOrUpdate = async () => {
    let resultFromServer = await StationApiService.AddAsync(station);
    console.log(resultFromServer);
    if (resultFromServer.isSuccess) {
      toast.success("اضافه کردن ایستگاه به درستی انجام شد .");
      await LoadData();
    } else {
      toast.error(resultFromServer.messages[0]);
    }
  };
  const HandleConfirmDelete = async () => {
    // if (!stationIdForDelete) {
    //   toast.warn("لطفا یک ایستگاه را برای حذف انتخاب کنید . ");
    //   return;
    // }
    // let resultFromServer = await stationApiService.DeleteBySerialNumber(
    //   stationIdForDelete
    // );
    // if (resultFromServer.isSuccess) {
    //   toast.success("ایستگاه به درستی حذف شد . ");
    //   await LoadData();
    // } else {
    //   toast.error(resultFromServer.messages[0]);
    //   console.error(resultFromServer);
    // }
  };
  const HandleSetValue = (property, value) => {
    let tempstation = station;
    tempstation[property] = value;
    setstation({ ...tempstation });
  };
  const LoadData = async () => {
    let resultFromServer = await StationApiService.GetTableAsync();
    if (resultFromServer.isSuccess) {
      setstations(resultFromServer.result.results);
    } else {
      toast.error(resultFromServer.messages[0]);
    }
    console.log(resultFromServer);
  };
  useEffect(() => {
    LoadData();
  }, []);
  return (
    <>
      <ModalDelete
        id="modalDeletestation"
        onHandleClickConfirm={HandleConfirmDelete}
        text='آیا از حذف این ایستگاه اطمینان دارید ؟ '
      />
      <StationAddOrEditModalCom
        station={station}
        onHandleSetValue={HandleSetValue}
        onHandleClickConfirm={HandleAddOrUpdate}
      />
      <Card
        titleElement={
          <>
            <h5>مدیریت ایستگاه ها</h5>
            <div>
              <ModalShowBtn
                className="btn-sm btn-primary"
                id="btnShowModal"
                modalId="ModalAddEditstation"
                text="اضافه کردن ایستگاه جدید"
              />
            </div>
          </>
        }
      >
        <Table columns={columns} type="primary-2" rows={stations} />
      </Card>
    </>
  );
}

export default StationTableCom;
