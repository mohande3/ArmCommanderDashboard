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
import { DividerPrimary } from "../../../Basic/divider/Divider";
import StationListGroupCom from "../../station/StationListGroupCom";
function TrackingServiceAddOrEditModalCom({
  service,
  onHandleSetValue,
  onHandleClickConfirm,
}) {
  return (
    <Modal
      size="lg"
      id="ModalAddEditService"
      title="اضافه کردن سرویس جدید"
      onHandleClickConfirm={onHandleClickConfirm}
    >
      <div className="nav-align-top mb-4">
        <ul className="nav nav-pills mb-3 nav-fill" role="tablist">
          <li className="nav-item">
            <button
              type="button"
              className="nav-link active"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#navs-pills-justified-home"
              aria-controls="navs-pills-justified-home"
              aria-selected="false"
            >
              <i className="tf-icons bx bx-home"></i> مشخصات عمومی سرویس
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="nav-link"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#navs-pills-justified-profile"
              aria-controls="navs-pills-justified-profile"
              aria-selected="false"
            >
              <i className="tf-icons bx bx-user"></i> ایستگاه های سرویس
            </button>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade  active show"
            id="navs-pills-justified-home"
            role="tabpanel"
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
                  onHandleChangeValue={(val) =>
                    onHandleSetValue("description", val)
                  }
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col col="6">
                <InputSwitch
                  onHandleChangeValue={(val) =>
                    onHandleSetValue("isActive", val)
                  }
                  id="isActive"
                  text="فعال بودن سرویس"
                  value={service.isActive}
                />
              </Col>
              <Col col="6"></Col>
            </Row>
          </div>
          <div
            className="tab-pane fade"
            id="navs-pills-justified-profile"
            role="tabpanel"
          >
            <Row>
              <Col>
                <StationListGroupCom
                  stationCheckeds={service.stationAssignt}
                  onHandleChangeValue={(code, isSelected) => {
                     if (!onHandleSetValue) {
                       console.warn(
                         `onHandleSetValue is not exist in PersonnelAssignToDeviceOrGroupCom`
                       );
                       return;
                     }
                     if (isSelected == "1") {
                       //-- ADD
                       let newData = service.stationAssignt;
                       if (newData === undefined || newData === null)
                         newData = [];
                       newData = newData.filter((str) => str !== code);
                       newData.push(code);
                       onHandleSetValue("stationAssignt", newData);

                       //-- REMOVE
                       newData = service.stationUnAssignt;
                       if (newData === undefined || newData === null)
                         newData = [];
                       newData = newData.filter((str) => str !== code);
                       onHandleSetValue("stationUnAssignt", newData);
                     } else {
                       //-- ADD
                       let newData = service.stationAssignt;
                       if (newData === undefined || newData === null)
                         newData = [];
                       newData = newData.filter((str) => str !== code);
                       onHandleSetValue("stationAssignt", newData);

                       //-- REMOVE
                       newData = service.stationUnAssignt;
                       if (newData === undefined || newData === null)
                         newData = [];
                       newData = newData.filter((str) => str !== code);
                       newData.push(code);
                       onHandleSetValue("stationUnAssignt", newData);
                     }
                  }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default TrackingServiceAddOrEditModalCom;
