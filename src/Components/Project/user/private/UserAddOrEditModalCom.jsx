import React from "react";
import StaticValuesService from "../../../../services/StaticValuesService";
import { Col, Row } from "../../../Basic/containers/Containers";
import {
  InputPassword,
  InputSelecte,
  InputText,
  Label,
} from "../../../Basic/formControlls/FormControlls";
import Modal from "../../../Basic/modal/Modal";

function UserAddOrEditModalCom({
  user,
  onHandleSetValue,
  onHandleClickConfirm,
}) {
  return (
    <Modal
      id="ModalAddEditUser"
      title="اضافه کردن کاربر جدید"
      onHandleClickConfirm={onHandleClickConfirm}
    >
      <Row>
        <Col col="12">
          <Label htmlFor="userName" text="نام کاربری : " />
          <InputText
            id="userName"
            placeHolder="نام کاربری"
            value={user.userName}
            onHandleChangeValue={(val) => onHandleSetValue("userName", val)}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col col="6">
          <Label htmlFor="password" text="رمز عبور : " />
          <InputPassword
            id="password"
            placeHolder="رمز عبور"
            value={user.password}
            onHandleChangeValue={(val) => onHandleSetValue("password", val)}
          />
        </Col>
        <Col col="6">
          <Label htmlFor="confirmPassword" text="تکرار رمز عبور : " />
          <InputPassword
            id="confirmPassword"
            placeHolder="تکرار رمز عبور"
            value={user.confirmPassword}
            onHandleChangeValue={(val) =>
              onHandleSetValue("confirmPassword", val)
            }
          />
        </Col>
      </Row>
    </Modal>
  );
}


export default UserAddOrEditModalCom;
