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
      property: "gateName",
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
      title: "سریال",
      property: "serialNumber",
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
  ];
  const HandleAddOrUpdate = async () => {
    let resultFromServer = await DeviceApiService.AddOrUpdateAsync(device);
    if (resultFromServer.isSuccess) {
      await LoadData();
    } else {
      toast.error(resultFromServer.messages[0]);
    }
  };
  const HandleSetValue = (property, value) => {
    let tempDevice = device;
    tempDevice[property] = value;
    setDevice({ ...tempDevice });
  };
  const LoadData = async () => {
    let resultFromServer = await DeviceApiService.GetTableAsync();
    console.log(resultFromServer)
    // if (resultFromServer.isSuccess) {
    //   setDevices(resultFromServer.result.results);
    // } else {
    //   toast.error(resultFromServer.messages[0]);
    // }
    console.log(resultFromServer);
  };
  useEffect(() => {
    LoadData();
  }, []);
  return (
    <>
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
