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
import TrackingServiceApiService from "../../../services/apis/TrackingServiceApiService";
import { Col, Row } from "../../Basic/containers/Containers";
import TrackingServiceAddOrEditModalCom from "./private/TrackingServiceAddOrEditModalCom";
function TrackingServiceTableCom() {
  const [services, setservices] = useState(null);
  const [serviceIdForDelete, setserviceIdForDelete] = useState(null);
  const [service, setservice] = useState({
    name: "",
    description: "",
    isActive: "1",
    code: ""
  });
  const columns = [
    {
      title: "کد",
      property: "code",
    },
    {
      title: "نام سرویس",
      property: "name",
    },
    {
      title: "توضیحات",
      property: "description",
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
      title: "",
      property: "",
      render: (row) => {
        return (
          <td>
            <ModalShowBtn
              className="btn-sm btn-warning"
              modalId="ModalAddEditService"
              text="EDI"
              onHandleClick={(e) => {
                setservice({
                  name: row["name"],
                  description: row["description"],
                  isActive: row["isActive"],
                  code: row["code"],
                });
              }}
            />
            <ModalShowBtn
              className="btn-sm btn-danger me-2"
              text="DEL"
              modalId="modalDeleteService"
              onHandleClick={(e) => setserviceIdForDelete(row["serialNumber"])}
            />
          </td>
        );
      },
    },
  ];
  const HandleAddOrUpdate = async () => {
    let resultFromServer = await TrackingServiceApiService.AddOrUpdateAsync(
      service
    );
    console.log(resultFromServer);
    if (resultFromServer.isSuccess) {
      toast.success("اضافه کردن دستگاه به درستی انجام شد .");
      await LoadData();
    } else {
      toast.error(resultFromServer.messages[0]);
    }
  };
  const HandleConfirmDelete = async () => {
    if (!serviceIdForDelete) {
      toast.warn("لطفا یک دستگاه را برای حذف انتخاب کنید . ");
      return;
    }
    let resultFromServer = await TrackingServiceApiService.یثمث(
      serviceIdForDelete
    );
    if (resultFromServer.isSuccess) {
      toast.success("دستگاه به درستی حذف شد . ");
      await LoadData();
    } else {
      toast.error(resultFromServer.messages[0]);
      console.error(resultFromServer);
    }
  };
  const HandleSetValue = (property, value) => {
    let tempservice = service;
    tempservice[property] = value;
    setservice({ ...tempservice });
  };
  const LoadData = async () => {
    let resultFromServer = await TrackingServiceApiService.GetTableAsync();
    if (resultFromServer.isSuccess) {
      setservices(resultFromServer.result.results);
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
        id="modalDeleteService"
        onHandleClickConfirm={HandleConfirmDelete}
        text="آیا از حذف این سرویس مطمئن هستید ؟ "
      />
      <TrackingServiceAddOrEditModalCom
        service={service}
        onHandleSetValue={HandleSetValue}
        onHandleClickConfirm={HandleAddOrUpdate}
      />
      <Card
        titleElement={
          <>
            <h5>مدیریت سرویس ها</h5>
            <div>
              <ModalShowBtn
                className="btn-sm btn-primary"
                id="btnShowModal"
                modalId="ModalAddEditService"
                text="اضافه کردن سرویس جدید"
              />
            </div>
          </>
        }
      >
        <Table columns={columns} type="primary-2" rows={services} />
      </Card>
    </>
  );
}

export default TrackingServiceTableCom;
