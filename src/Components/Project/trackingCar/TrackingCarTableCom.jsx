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
import { Col, Row } from "../../Basic/containers/Containers";
import TrackingCarApiService from "../../../services/apis/TrackingCarApiService";
function TrackingCarTableCom()  {
  const [trackingCars, setTrackingCars] = useState(null);
  const columns = [
    {
      title: "کد",
      property: "carTrackingId",
    },
    {
      title: "نام دستگاه",
      property: "deviceName",
    },
    {
      title: "سریال",
      property: "deviceSerialNumber",
    },
    {
      title: "زمان ردیابی",
      property: "dateTimeOfTracking",
    },
    {
      title: "مکان جغرافیایی",
      property: "",
      render: (row) => {
        return (
          <td>
            <span className="badge bg-primary">{row["latitude"]}</span>
            <span className="badge bg-primary mx-1">{row["longitude"]}</span>
          </td>
        );
      },
    },
  ];



  const LoadData = async () => {
    let resultFromServer = await TrackingCarApiService.GetTableAsync();
    if (resultFromServer.isSuccess) {
      setTrackingCars(resultFromServer.result.results);
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
      <Card
        titleElement={
          <>
            <h5>گزارش ردیابی خودرو</h5>
            <div>
            </div>
          </>
        }
      >
        <Table columns={columns} type="primary-2" rows={trackingCars} />
      </Card>
    </>
  );
}


export default TrackingCarTableCom;
