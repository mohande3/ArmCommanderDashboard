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

function StationAddOrEditModalCom({
  station,
  onHandleSetValue,
  onHandleClickConfirm,
}) {
  return (
    <Modal
      id="ModalAddEditstation"
      title="اضافه کردن ایستگاه جدید"
      onHandleClickConfirm={onHandleClickConfirm}
    >
      <Row>
        <Col col="6">
          <Label htmlFor="name" text="نام ایستگاه : " />
          <InputText
            id="name"
            placeHolder="نام ایستگاه"
            value={station.name}
            onHandleChangeValue={(val) => onHandleSetValue("name", val)}
          />
        </Col>
        <Col col="6">
          <Label htmlFor="code" text="کد ایستگاه : " />
          <InputText
            id="code"
            placeHolder="کد ایستگاه"
            value={station.code}
            onHandleChangeValue={(val) => onHandleSetValue("code", val)}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col col="6">
          <Label htmlFor="latitude" text="طول جغرافیایی : " />
          <InputText
            id="latitude"
            placeHolder="طول جغرافیایی"
            value={station.latitude}
            onHandleChangeValue={(val) => onHandleSetValue("latitude", val)}
          />
        </Col>
        <Col col="6">
          <Label htmlFor="longitude" text="عرض جغرافیایی : " />
          <InputText
            id="longitude"
            placeHolder="عرض جغرافیایی"
            value={station.longitude}
            onHandleChangeValue={(val) => onHandleSetValue("longitude", val)}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col col="6">
          <Label htmlFor="description" text="توضیحات : " />
          <InputText
            id="description"
            placeHolder="توضیحات"
            value={station.description}
            onHandleChangeValue={(val) => onHandleSetValue("description", val)}
          />
        </Col>
        <Col col="6">
          <InputSwitch
            onHandleChangeValue={(val) => onHandleSetValue("isActive", val)}
            id="isActive"
            text="فعال بودن ایستگاه"
            value={station.isActive}
          />
        </Col>
      </Row>
    </Modal>
  );
}

export default StationAddOrEditModalCom;
