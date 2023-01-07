import React,{useState} from "react";
import { Card } from "../../../Basic/card/Card";
import PersonnelAssignToDeviceOrGroupCom from "./private/PersonnelAssignToDeviceOrGroupCom";
import PersonnelCharacterCom from "./private/PersonnelCharacterCom";
import PersonnelUsuallyCharacterCom from "./private/PersonnelUsuallyCharacterCom";

function PersonnelAddOrEditCom() {
    const [personnel, setPersonnel] = useState({
    personnelNumber: '',
    name: '',
    family: '',
    dateTimeOfStartWork: '',
    dateTimeOfEndWork: '',
    serviceLocationPhone: '',
    NameFather: '',
    NationalId: '',
    Sex: '',
    IsActive: '',
    IsSpecial: '',
    DateTimeOfBirthDay: '',
    LocationOfBirth: '',
    Education: '',
    ServiceLocation: '',
    SelfPhone: '',
    IsChangeAssignToDevices: false,
    PersonnelDevices: [],
    CarStationId: 0,
    CarPathCode: '',
    PersonnelImage: '',
    PersonnelImageBase64:''
    })
  const HandleSetValue=(property, value) => {
    let data = personnel;
    data[property] = value;
    setPersonnel(data);
    console.log('AFTER SET : ',personnel.name);
  }
  return (
    <div class="nav-align-top mb-4">
      <ul class="nav nav-pills mb-3 nav-fill" role="tablist">
        <li class="nav-item">
          <button
            type="button"
            class="nav-link"
            role="tab"
            data-bs-toggle="tab"
            data-bs-target="#navs-pills-justified-home"
            aria-controls="navs-pills-justified-home"
            aria-selected="false"
          >
            <i class="tf-icons bx bx-home"></i> مشخصات پرسنلی
          </button>
        </li>
        <li class="nav-item">
          <button
            type="button"
            class="nav-link"
            role="tab"
            data-bs-toggle="tab"
            data-bs-target="#navs-pills-justified-profile"
            aria-controls="navs-pills-justified-profile"
            aria-selected="false"
          >
            <i class="tf-icons bx bx-user"></i> مشخصات شخصی
          </button>
        </li>
        <li class="nav-item">
          <button
            type="button"
            class="nav-link active"
            role="tab"
            data-bs-toggle="tab"
            data-bs-target="#navs-pills-justified-messages"
            aria-controls="navs-pills-justified-messages"
            aria-selected="true"
          >
            <i class="tf-icons bx bx-message-square"></i> اتصال شخص به گروه و دستگاه
          </button>
        </li>
      </ul>
      <div class="tab-content">
        <div
          class="tab-pane fade"
          id="navs-pills-justified-home"
          role="tabpanel"
        >
          <PersonnelCharacterCom
            personnel={personnel}
            onHandleSetValue={HandleSetValue} />
        </div>
        <div
          class="tab-pane fade"
          id="navs-pills-justified-profile"
          role="tabpanel"
        >
          <PersonnelUsuallyCharacterCom />
        </div>
        <div
          class="tab-pane fade active show"
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
