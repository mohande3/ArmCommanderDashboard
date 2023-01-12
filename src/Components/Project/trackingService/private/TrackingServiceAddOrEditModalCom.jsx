import React from "react";
import StaticValuesService from "../../../../services/StaticValuesService";
import { Col, Row } from "../../../Basic/containers/Containers";
import {
  InputSelecte,
  InputSwitch,
  InputText,
  Label,
} from "../../../Basic/formControlls/FormControlls";
import Modal from "../../../Basic/modal/Modal";

function TrackingServiceAddOrEditModalCom({
  service,
  onHandleSetValue,
  onHandleClickConfirm,
}) {
  return (
    <Modal
      id="ModalAddEditService"
      title="اضافه کردن سرویس جدید"
      onHandleClickConfirm={onHandleClickConfirm}
    >
      <Row>
        <Col col="6">
          <Label htmlFor="name" text="نام مسیر : " />
          <InputText
            id="name"
            placeHolder="نام مسیر"
            value={service.name}
            onHandleChangeValue={(val) => onHandleSetValue("name", val)}
          />
        </Col>
        <Col col="6">
          <Label htmlFor="code" text="کد مسیر : " />
          <InputText
            id="code"
            placeHolder="کد مسیر"
            value={service.code}
            onHandleChangeValue={(val) => onHandleSetValue("code", val)}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col col="12">
          <Label htmlFor="description" text="توضیحات : " />
          <InputText
            id="description"
            placeHolder="توضیحات"
            value={service.description}
            onHandleChangeValue={(val) => onHandleSetValue("description", val)}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col col="6">
          <InputSwitch
            onHandleChangeValue={(val) => onHandleSetValue("isActive", val)}
            id="isActive"
            text="فعال بودن سرویس"
            value={service.isActive}
          />
        </Col>
        <Col col="6"></Col>
      </Row>
    </Modal>
  );
}
export default TrackingServiceAddOrEditModalCom;
