import React from "react";
import StaticValuesService from "../../../../../services/StaticValuesService";
import { Col, Row } from "../../../../Basic/containers/Containers";
import {
  InputDatePicker,
  InputSelecte,
  InputSwitch,
  InputText,
  Label,
} from "../../../../Basic/formControlls/FormControlls";
import Modal from "../../../../Basic/modal/Modal";

function TripAddOrUpdateModalCom({
  trip,
  onHandleSetValue,
  onHandleClickConfirm,
}) {
  return (
    <Modal
      id="ModalAddEditTrip"
      title="اضافه کردن سفر جدید"
      onHandleClickConfirm={onHandleClickConfirm}
    >
      <Row>
        <Col col="6">
          <Label htmlFor="name" text="نام سفر : " />
          <InputText
            id="name"
            placeHolder="نام سفر"
            value={trip.name}
            onHandleChangeValue={(val) => onHandleSetValue("name", val)}
          />
        </Col>
        <Col col="6">
          <Label htmlFor="code" text="کد سفر : " />
          <InputText
            id="code"
            placeHolder="کد سفر"
            value={trip.code}
            onHandleChangeValue={(val) => onHandleSetValue("code", val)}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col col="6">
          <Label htmlFor="dateTimeOfStart" text="زمان شروع سفر : " />
          <InputDatePicker
            id="dateTimeOfStart"
            placeHolder="زمان شروع سفر"
            value={trip.startTime}
            onHandleChangeValue={(val) =>
              onHandleSetValue("dateTimeOfStart", val)
            }
          />
        </Col>
        <Col col="6">
          <Label htmlFor="serviceCode" text="کد سرویس را وارد کنید : " />
          <InputText
            id="serviceCode"
            placeHolder="کد سرویس"
            value={trip.serviceCode}
            onHandleChangeValue={(val) => onHandleSetValue("serviceCode", val)}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col col="12">
          <Label htmlFor="description" text="توضیحات : " />
          <InputText
            id="description"
            placeHolder="توضیحات"
            value={trip.description}
            onHandleChangeValue={(val) => onHandleSetValue("description", val)}
          />
        </Col>
      </Row>
    </Modal>
  );
}

export default TripAddOrUpdateModalCom;
