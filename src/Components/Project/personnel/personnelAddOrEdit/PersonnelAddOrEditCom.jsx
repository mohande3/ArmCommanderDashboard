import React, { useState } from "react";
import { Card } from "../../../Basic/card/Card";
import PersonnelAssignToDeviceOrGroupCom from "./private/PersonnelAssignToDeviceOrGroupCom";
import PersonnelCharacterCom from "./private/PersonnelCharacterCom";
import PersonnelUsuallyCharacterCom from "./private/PersonnelUsuallyCharacterCom";

function PersonnelAddOrEditCom() {
  const [personnel, setPersonnel] = useState({
    personnelNumber: "",
    name: "",
    family: "",
    dateTimeOfStartWork: "",
    dateTimeOfEndWork: "",
    serviceLocationPhone: "",
    nameFather: "",
    nationalId: "",
    sex: "0",
    isActive: "1",
    isSpecial: "",
    dateTimeOfBirthDay: "",
    locationOfBirth: "",
    education: "",
    serviceLocation: "",
    selfPhone: "",
    
    PersonnelDevices: [],
    CarStationId: 0,
    CarPathCode: "",
    PersonnelImage: "",
    PersonnelImageBase64: "",
  });
  const HandleSetValue = (property, value) => {
    let data = personnel;
    data[property] = value;
    setPersonnel({...data});
  };
  return (
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
            <i className="tf-icons bx bx-home"></i> مشخصات پرسنلی
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
            <i className="tf-icons bx bx-user"></i> مشخصات شخصی
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="nav-link"
            role="tab"
            data-bs-toggle="tab"
            data-bs-target="#navs-pills-justified-messages"
            aria-controls="navs-pills-justified-messages"
            aria-selected="true"
          >
            <i className="tf-icons bx bx-message-square"></i> اتصال شخص به گروه
            و دستگاه
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade  active show"
          id="navs-pills-justified-home"
          role="tabpanel"
        >
          <PersonnelCharacterCom
            personnel={personnel}
            onHandleSetValue={HandleSetValue}
          />
        </div>
        <div
          className="tab-pane fade"
          id="navs-pills-justified-profile"
          role="tabpanel"
        >
          <PersonnelUsuallyCharacterCom
            personnel={personnel}
            onHandleSetValue={HandleSetValue}
          />
        </div>
        <div
          className="tab-pane fade"
          id="navs-pills-justified-messages"
          role="tabpanel"
        >
          <PersonnelAssignToDeviceOrGroupCom />
        </div>
      </div>
    </div>
  );
}

export default PersonnelAddOrEditCom;
