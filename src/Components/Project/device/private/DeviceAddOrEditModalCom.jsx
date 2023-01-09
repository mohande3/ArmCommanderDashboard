import React from 'react'
import { Col, Row } from '../../../Basic/containers/Containers';
import { InputText, Label } from '../../../Basic/formControlls/FormControlls';
import Modal from '../../../Basic/modal/Modal'

function DeviceAddOrEditModalCom({device,onHandleSetValue,onHandleClickConfirm}) {
  return (
    <Modal
      id="ModalAddEditDevice"
      title="اضافه کردن دستگاه جدید"
      onHandleClickConfirm={onHandleClickConfirm}
    >
      <Row>
        <Col col="6">
          <Label htmlFor="serialNumber" text="سریال دستگاه : " />
          <InputText
            id="serialNumber"
            placeHolder="سریال دستگاه"
            value={device.serialNumber}
            onHandleChangeValue={(val) => onHandleSetValue("serialNumber", val)}
          />
        </Col>
        <Col col="6">
          <Label htmlFor="name" text="نام دستگاه : " />
          <InputText
            id="name"
            placeHolder="نام دستگاه"
            value={device.name}
            onHandleChangeValue={(val) => onHandleSetValue("name", val)}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col col="8">
          <Label htmlFor="ipAddress" text="آی پی دستگاه : " />
          <InputText
            id="ipAddress"
            placeHolder="آی پی دستگاه"
            value={device.ipAddress}
            onHandleChangeValue={(val) => onHandleSetValue("ipAddress", val)}
          />
        </Col>
        <Col col="4">
          <Label htmlFor="portNumber" text="پورت دستگاه : " />
          <InputText
            id="portNumber"
            placeHolder="پورت دستگاه"
            value={device.portNumber}
            onHandleChangeValue={(val) => onHandleSetValue("portNumber", val)}
          />
        </Col>
      </Row>
    </Modal>
  );
}

export default DeviceAddOrEditModalCom