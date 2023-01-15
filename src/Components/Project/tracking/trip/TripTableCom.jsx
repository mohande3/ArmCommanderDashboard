import React, { useEffect, useState } from "react";
import { Card } from "../../../Basic/card/Card";
import Table from "../../../Basic/table/Table";
import PersonnelApiService from "../../../../services/apis/PersonnelApiService";
import { toast } from "react-hot-toast";
import { DateObject } from "react-multi-date-picker";
import {
  InputText,
  Label,
  ShowDateFromUnix,
} from "../../../Basic/formControlls/FormControlls";
import { useNavigate } from "react-router-dom";
import Modal, { ModalDelete, ModalShowBtn } from "../../../Basic/modal/Modal";
import TrackingTripApiService from "../../../../services/apis/TrackingTripApiService";
import { Col, Row } from "../../../Basic/containers/Containers";
function TripTableCom() {
  const [trips, settrips] = useState(null);
  const [tripIdForDelete, settripIdForDelete] = useState(null);
  const [trip, settrip] = useState({

  });
  const columns = [
    {
      title: "کد",
      property: "tripId",
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
      title: "",
      property: "",
      render: (row) => {
        return (
          <td>
            <ModalShowBtn
              className="btn-sm btn-warning"
              modalId="ModalAddEdittrip"
              content="EDI"
              onHandleClick={(e) => {
                settrip({
                  serialNumber: row["serialNumber"],
                  ipAddress: row["ipAddress"],
                  portNumber: row["portNumber"],
                  name: row["name"],
                  description: row["description"],
                  version: row["version"],
                  location: row["location"],
                  macAddress: row["macAddress"],
                  dateTimeOfCurrent: row["dateTimeOfCurrent"],
                  typeOftrip: row["typeOftrip"],
                  gateId: row["gateId"],
                  carId: row["carId"],
                });
              }}
            />
            <ModalShowBtn
              className="btn-sm btn-danger me-2"
              content="DEL"
              modalId="modalDeletetrip"
              onHandleClick={(e) => settripIdForDelete(row["serialNumber"])}
            />
          </td>
        );
      },
    },
  ];
  const HandleAddOrUpdate = async () => {
    let resultFromServer = await TrackingTripApiService.AddOrUpdateAsync(trip);
    console.log(resultFromServer);
    if (resultFromServer.isSuccess) {
      toast.success("اضافه کردن سفر به درستی انجام شد .");
      await LoadData();
    } else {
      toast.error(resultFromServer.messages[0]);
    }
  };
  const HandleConfirmDelete = async () => {
    if (!tripIdForDelete) {
      toast.warn("لطفا یک سفر را برای حذف انتخاب کنید . ");
      return;
    }
    let resultFromServer = await TrackingTripApiService.DeleteBySerialNumber(
      tripIdForDelete
    );
    if (resultFromServer.isSuccess) {
      toast.success("سفر به درستی حذف شد . ");
      await LoadData();
    } else {
      toast.error(resultFromServer.messages[0]);
      console.error(resultFromServer);
    }
  };
  const HandleSetValue = (property, value) => {
    let temptrip = trip;
    temptrip[property] = value;
    settrip({ ...temptrip });
  };
  const LoadData = async () => {
    let resultFromServer = await TrackingTripApiService.GetTableAsync();
    if (resultFromServer.isSuccess) {
      settrips(resultFromServer.result.results);
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
        id="modalDeletetrip"
        onHandleClickConfirm={HandleConfirmDelete}
      />
      <tripAddOrEditModalCom
        trip={trip}
        onHandleSetValue={HandleSetValue}
        onHandleClickConfirm={HandleAddOrUpdate}
      />
      <Card
        titleElement={
          <>
            <h5>مدیریت سفر ها</h5>
            <div>
              <ModalShowBtn
                className="btn-sm btn-primary"
                id="btnShowModal"
                modalId="ModalAddEdittrip"
                content="اضافه کردن سفر جدید"
              />
            </div>
          </>
        }
      >
        <Table columns={columns} type="primary-2" rows={trips} />
      </Card>
    </>
  );
}
export default TripTableCom;
