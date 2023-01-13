import React from "react";
import { Col, Row } from "../../../../Basic/containers/Containers";
import {
  DividerDanger,
  DividerPrimary,
} from "../../../../Basic/divider/Divider";
import { InputListGroup } from "../../../../Basic/formControlls/FormControlls";
import DeviceListGroupCom from "../../../device/DeviceListGroupCom";
import TrackingServiceListGroupCom from "../../../trackingService/TrackingServiceListGroupCom";

function PersonnelAssignToStationAndServiceCom({
  personnel,
  onHandleSetValue,
  onHandleAddOrUpdate,
}) {
  return (
    <Row>
      <Col col="6">
        <strong className="text-primary">سرویس ها</strong>
        <DividerPrimary />
        <TrackingServiceListGroupCom
          className="ms-2"
          // onHandleChangeValue={(serial, isCheck) => {
          //   if (!onHandleSetValue) {
          //     console.warn(
          //       `onHandleSetValue is not exist in PersonnelAssignToDeviceOrGroupCom`
          //     );
          //     return;
          //   }
          //   if (isCheck == "1") {
          //     //-- ADD
          //     let newData = personnel.PersonnelAssignToDevices;
          //     if (newData === undefined || newData === null) newData = [];
          //     newData = newData.filter((str) => str !== serial);
          //     newData.push(serial);
          //     onHandleSetValue("PersonnelAssignToDevices", newData);

          //     //-- REMOVE
          //     newData = personnel.PersonnelUnAssignFromDevices;
          //     if (newData === undefined || newData === null) newData = [];
          //     newData = newData.filter((str) => str !== serial);
          //     onHandleSetValue("PersonnelUnAssignFromDevices", newData);
          //   } else {
          //     //-- ADD
          //     let newData = personnel.PersonnelAssignToDevices;
          //     if (newData === undefined || newData === null) newData = [];
          //     newData = newData.filter((str) => str !== serial);
          //     onHandleSetValue("PersonnelAssignToDevices", newData);

          //     //-- REMOVE
          //     newData = personnel.PersonnelUnAssignFromDevices;
          //     if (newData === undefined || newData === null) newData = [];
          //     newData = newData.filter((str) => str !== serial);
          //     newData.push(serial);
          //     onHandleSetValue("PersonnelUnAssignFromDevices", newData);
          //   }
          // }}
        />
      </Col>
      <Col col="6">
        <strong className="text-danger">ایستگاه های سرویس انتخابی</strong>
        <DividerDanger />
      </Col>
      <div className="mt-3">
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={onHandleAddOrUpdate}
        >
          ثبت تغییرات
        </button>
        <button type="reset" className="btn btn-outline-secondary">
          برگشت
        </button>
      </div>
    </Row>
  );
}

export default PersonnelAssignToStationAndServiceCom;
