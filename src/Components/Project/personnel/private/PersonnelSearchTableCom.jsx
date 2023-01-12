import React, { useState } from "react";
import { Col, InlineDisplay, Row } from "../../../Basic/containers/Containers";
import { InputText, Label } from "../../../Basic/formControlls/FormControlls";
function PersonnelSearchTableCom({ onHandleSearchClick }) {
  const [personnelSearch, setPersonnelSearch] = useState({
    personnelNumber: "",
    name: "",
    family: "",
  });
  const HandleClearSearch = () => {
    setPersonnelSearch({
      personnelNumber: "",
      name: "",
      family: "",
    });
  };
  return (
    <Row>
      <Col col="3">
        <InlineDisplay>
          <Label htmlFor="personnelNumber" text="شماره پرسنلی : " />
          <InputText
            id="personnelNumber"
            value={personnelSearch.personnelNumber}
            onHandleChangeValue={(val) =>
              setPersonnelSearch({
                ...personnelSearch,
                personnelNumber: val,
              })
            }
          />
        </InlineDisplay>
      </Col>
      <Col col="3">
        <InlineDisplay>
          <Label htmlFor="name" text="نام : " />
          <InputText
            id="name"
            value={personnelSearch.name}
            onHandleChangeValue={(val) =>
              setPersonnelSearch({
                ...personnelSearch,
                name: val,
              })
            }
          />
        </InlineDisplay>
      </Col>
      <Col col="3">
        <InlineDisplay>
          <Label htmlFor="family" text="نام خانوادگی : " />
          <InputText
            id="family"
            value={personnelSearch.family}
            onHandleChangeValue={(val) =>
              setPersonnelSearch({
                ...personnelSearch,
                family: val,
              })
            }
          />
        </InlineDisplay>
      </Col>
      <Col col="3">
        <button
          className="btn btn-outline-primary "
          onClick={(e) => onHandleSearchClick(personnelSearch)}
        >
          جستجو
        </button>
        <button
          className="btn btn-outline-info mx-2"
          onClick={(e) => HandleClearSearch()}
        >
          پاکسازی فیلتر
        </button>
      </Col>
    </Row>
  );
}

export default PersonnelSearchTableCom;
