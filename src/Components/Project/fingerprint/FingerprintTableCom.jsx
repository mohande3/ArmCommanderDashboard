import React from "react";
import { Card } from "../../Basic/card/Card";
import { ModalShowBtn } from "../../Basic/modal/Modal";
import Table from "../../Basic/table/Table";

function FingerprintTableCom() {
  const columns = [
    {
      title: "کد",
      property: "deviceId",
    },
    {
      title: "کد پرسنلی",
      property: "name",
    },
    {
      title: "نام و نام خانوادگی",
      property: "serialNumber",
    },
    {
      title: "تعداد",
      property: "count",
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
              content="EDI"
              onHandleClick={(e) => {
                // setDevice({
                //   serialNumber: row["serialNumber"],
                //   ipAddress: row["ipAddress"],
                //   portNumber: row["portNumber"],
                //   name: row["name"],
                //   description: row["description"],
                //   version: row["version"],
                //   location: row["location"],
                //   macAddress: row["macAddress"],
                //   dateTimeOfCurrent: row["dateTimeOfCurrent"],
                //   typeOfDevice: row["typeOfDevice"],
                //   gateId: row["gateId"],
                //   carId: row["carId"],
                // });
              }}
            />
            <ModalShowBtn
              className="btn-sm btn-danger me-2"
              content="DEL"
              modalId="modalDeleteDevice"
              //   onHandleClick={(e) => setDeviceIdForDelete(row["serialNumber"])}
            />
          </td>
        );
      },
    },
  ];
  return (
    <Card title="مدیریت تمپلیت اثرانگشت های موجود">
      <Table columns={columns} rows={[]} type="primary-2" />
    </Card>
  );
}

export default FingerprintTableCom;
