import React from "react";
import { Col, Row } from "../../../../Basic/containers/Containers";
import {
  DividerDanger,
  DividerPrimary,
} from "../../../../Basic/divider/Divider";
import { InputListGroup } from "../../../../Basic/formControlls/FormControlls";
import DeviceListGroupCom from "../../../device/DeviceListGroupCom";

function PersonnelAssignToDeviceOrGroupCom({
  personnel,
  onHandleSetValue,
  onHandleAddOrUpdate,
}) {
  console.log("PERSON TO ASSIGN", personnel);
  return (
    <Row>
      <Col col="6">
        <strong className="text-primary">دستگاه ها</strong>
        <DividerPrimary />
        <DeviceListGroupCom
          className="ms-2"
          deviceCheckeds={personnel.PersonnelAssignToDevices}
          onHandleChangeValue={(serial, isCheck) => {
            if (!onHandleSetValue) {
              console.warn(
                `onHandleSetValue is not exist in PersonnelAssignToDeviceOrGroupCom`
              );
              return;
            }
            if (isCheck == "1") {
              //-- ADD
              let newData = personnel.PersonnelAssignToDevices;
              if (newData === undefined || newData === null) newData = [];
              newData = newData.filter((str) => str !== serial);
              newData.push(serial);
              onHandleSetValue("PersonnelAssignToDevices", newData);

              //-- REMOVE
              newData = personnel.PersonnelUnAssignFromDevices;
              if (newData === undefined || newData === null) newData = [];
              newData = newData.filter((str) => str !== serial);
              onHandleSetValue("PersonnelUnAssignFromDevices", newData);
            } else {
              //-- ADD
              let newData = personnel.PersonnelAssignToDevices;
              if (newData === undefined || newData === null) newData = [];
              newData = newData.filter((str) => str !== serial);
              onHandleSetValue("PersonnelAssignToDevices", newData);

              //-- REMOVE
              newData = personnel.PersonnelUnAssignFromDevices;
              if (newData === undefined || newData === null) newData = [];
              newData = newData.filter((str) => str !== serial);
              newData.push(serial);
              onHandleSetValue("PersonnelUnAssignFromDevices", newData);
            }
          }}
        />
      </Col>
      <Col col="6">
        <strong className="text-danger">گروه های دستگاهی</strong>
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

export default PersonnelAssignToDeviceOrGroupCom;
