import React, { useState } from "react";
import { Col, InlineDisplay, Row } from "../../../Basic/containers/Containers";
import {
  InputDatePicker,
  InputText,
  Label,
} from "../../../Basic/formControlls/FormControlls";

function TimeLogSearchTableCom({ onHandleSearchClick }) {
  const [timeLogSearch, setTimeLogSearch] = useState({
    personnelNumber: "",
    serialNumber: "",
    fromDate: "",
    toDate: "",
  });
  const HandleClearSearch = () => {
    setTimeLogSearch({
      personnelNumber: "",
      serialNumber: "",
      fromDate: "",
      toDate: "",
    });
  };
  return (
    <>
      <Row>
        <Col col="3">
          <InlineDisplay>
            <Label text="کد پرسنلی : " htmlFor="personnelNumber" />
            <InputText
              id="personnelNumber"
              value={timeLogSearch.personnelNumber}
              onHandleChangeValue={(val) => {
                setTimeLogSearch({
                  ...timeLogSearch,
                  personnelNumber: val,
                });
              }}
            />
          </InlineDisplay>
        </Col>
        <Col col="3">
          <InlineDisplay>
            <Label text="سریال دستگاه : " htmlFor="serialNumber" />
            <InputText
              id="serialNumber"
              value={timeLogSearch.serialNumber}
              onHandleChangeValue={(val) => {
                setTimeLogSearch({
                  ...timeLogSearch,
                  serialNumber: val,
                });
              }}
            />
          </InlineDisplay>
        </Col>
        <Col col="3">
          <InlineDisplay>
            <Label text="از تاریخ : " htmlFor="fromDate" />
            <InputDatePicker
              id="fromDate"
              value={timeLogSearch.fromDate}
              onHandleChangeValue={(val) => {
                setTimeLogSearch({
                  ...timeLogSearch,
                  fromDate: val,
                });
              }}
            />
          </InlineDisplay>
        </Col>
        <Col col="3">
          <InlineDisplay>
            <Label text="تا تاریخ : " htmlFor="toDate" />
            <InputDatePicker
              id="toDate"
              value={timeLogSearch.toDate}
              onHandleChangeValue={(val) => {
                setTimeLogSearch({
                  ...timeLogSearch,
                  toDate: val,
                });
              }}
            />
          </InlineDisplay>
        </Col>
        <Col col="3 me-auto mt-2 d-flex justify-content-end">
          <button
            className="btn btn-outline-primary"
            onClick={(e) => onHandleSearchClick(timeLogSearch)}
          >
            جستجو
          </button>
          <button
            className="btn btn-outline-info me-2"
            onClick={(e) => HandleClearSearch()}
          >
            پاکسازی فیلتر
          </button>
        </Col>
      </Row>
    </>
  );
}

export default TimeLogSearchTableCom;
