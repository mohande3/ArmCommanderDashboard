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
import DeviceApiService from "../../../services/apis/DevicesApiService";
import { Col, Row } from "../../Basic/containers/Containers";
import DeviceAddOrEditModalCom from "./private/DeviceAddOrEditModalCom";
function DeviceTableCom() {
  const [devices, setDevices] = useState(null);
  const [deviceIdForDelete, setDeviceIdForDelete] = useState(null);
  const [device, setDevice] = useState({
    serialNumber: "",
    ipAddress: "",
    portNumber: 0,
    name: "",
    description: "",
    version: "",
    location: "",
    macAddress: "",
    dateTimeOfCurrent: "",
    typeOfDevice: 0,
    gateId: 0,
    carId: 0,
  });
  const columns = [
    {
      title: "کد",
      property: "deviceId",
    },
    {
      title: "نام گیت",
      property: "name",
    },
    {
      title: "سریال",
      property: "serialNumber",
    },
    {
      title: "آی پی | پورت",
      property: "",
      render: (row) => {
        return (
          <td>
            <span>
              {row["ipAddress"]}:{row["portNumber"]}
            </span>
          </td>
        );
      },
    },
    {
      title: "نوع دستگاه",
      property: "typeOfDevice",
      render: row => {
        let type = row["typeOfDevice"];
        if (type == "1")
          return <td>
            <span className="badge bg-primary">W7 PLUS</span>
          </td>
      }
    },
    {
      title: "",
      property: "",
      render: (row) => {
        return (
          <td>
            <ModalShowBtn
              className="btn-sm btn-warning"
              modalId="ModalAddEditDevice"
              text="EDI"
              onHandleClick={(e) => {
                setDevice({
                  serialNumber: row["serialNumber"],
                  ipAddress: row["ipAddress"],
                  portNumber: row["portNumber"],
                  name: row["name"],
                  description: row["description"],
                  version: row["version"],
                  location: row["location"],
                  macAddress: row["macAddress"],
                  dateTimeOfCurrent: row["dateTimeOfCurrent"],
                  typeOfDevice: row["typeOfDevice"],
                  gateId: row["gateId"],
                  carId: row["carId"],
                });
              }}
            />
            <ModalShowBtn
              className="btn-sm btn-danger me-2"
              text="DEL"
              modalId="modalDeleteDevice"
              onHandleClick={(e) => setDeviceIdForDelete(row["serialNumber"])}
            />
          </td>
        );
      },
    },
  ];
  const HandleAddOrUpdate = async () => {
    let resultFromServer = await DeviceApiService.AddOrUpdateAsync(device);
    console.log(resultFromServer);
    if (resultFromServer.isSuccess) {
      toast.success("اضافه کردن دستگاه به درستی انجام شد .");
      await LoadData();
    } else {
      toast.error(resultFromServer.messages[0]);
    }
  };
  const HandleConfirmDelete = async () => {
    if (!deviceIdForDelete) {
      toast.warn('لطفا یک دستگاه را برای حذف انتخاب کنید . ');
      return;
    }
    let resultFromServer = await DeviceApiService.DeleteBySerialNumber(deviceIdForDelete);
    if (resultFromServer.isSuccess) {
      toast.success('دستگاه به درستی حذف شد . ')
      await LoadData();
    } else {
      toast.error(resultFromServer.messages[0]);
      console.error(resultFromServer);
    }
  }
  const HandleSetValue = (property, value) => {
    let tempDevice = device;
    tempDevice[property] = value;
    setDevice({ ...tempDevice });
  };
  const LoadData = async () => {
    let resultFromServer = await DeviceApiService.GetTableAsync();
    if (resultFromServer.isSuccess) {
      setDevices(resultFromServer.result.results);
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
        id="modalDeleteDevice"
        onHandleClickConfirm={HandleConfirmDelete}
      />
      <DeviceAddOrEditModalCom
        device={device}
        onHandleSetValue={HandleSetValue}
        onHandleClickConfirm={HandleAddOrUpdate}
      />
      <Card
        titleElement={
          <>
            <h5>مدیریت دستگاه ها و سخت افزار</h5>
            <div>
              <ModalShowBtn
                className="btn-sm btn-primary"
                id="btnShowModal"
                modalId="ModalAddEditDevice"
                text="اضافه کردن دستگاه جدید"
              />
            </div>
          </>
        }
      >
        <Table columns={columns} type="primary-2" rows={devices} />
      </Card>
    </>
  );
}

export default DeviceTableCom;
