import React from "react";
import { Col, Row } from "../../../../Basic/containers/Containers";
import {
  DividerDanger,
  DividerPrimary,
} from "../../../../Basic/divider/Divider";
import { InputListGroup } from "../../../../Basic/formControlls/FormControlls";
import DeviceListGroupCom from "../../../device/DeviceListGroupCom";

function PersonnelAssignToDeviceOrGroupCom({ personnel, onHandleSetValue }) {
  return (
    <Row>
      <Col col="6">
        <strong className="text-primary">دستگاه ها</strong>
        <DividerPrimary />
        <DeviceListGroupCom
          className="ms-2"
          deviceCheckeds={personnel.PersonnelDevices}
          onHandleChangeValue={(serial, isCheck) => {
            if (!onHandleSetValue) {
              console.warn(
                `onHandleSetValue is not exist in PersonnelAssignToDeviceOrGroupCom`
              );
              return;
            }
            if (isCheck == "1") {
              let newData = personnel.PersonnelDevices;
              if (newData === undefined || newData === null) newData = [];
              newData = newData.filter((str) => str !== serial);
              newData.push(serial);
              onHandleSetValue("PersonnelDevices", newData);
            } else {
              let newData = personnel.PersonnelDevices;
              if (newData === undefined || newData === null) newData = [];
              newData = newData.filter((str) => str !== serial);
              onHandleSetValue("PersonnelDevices", newData);
            }
          }}
        />
      </Col>
      <Col col="6">
        <strong className="text-danger">گروه های دستگاهی</strong>
        <DividerDanger />
      </Col>
    </Row>
  );
}

export default PersonnelAssignToDeviceOrGroupCom;
