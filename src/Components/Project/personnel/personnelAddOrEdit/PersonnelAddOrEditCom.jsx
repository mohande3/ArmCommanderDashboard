import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import PersonnelApiService from "../../../../services/apis/PersonnelApiService";
import { Card } from "../../../Basic/card/Card";
import PersonnelAssignToDeviceOrGroupCom from "./private/PersonnelAssignToDeviceOrGroupCom";
import PersonnelCharacterCom from "./private/PersonnelCharacterCom";
import PersonnelUsuallyCharacterCom from "./private/PersonnelUsuallyCharacterCom";

function PersonnelAddOrEditCom() {
  const personnelNumber = useParams();
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
    personnelImage: "",
  });
  const HandleSetValue = (property, value) => {
    let data = personnel;
    data[property] = value;
    setPersonnel({ ...data });
  };
  const HandleAddOrUpdate = async () => {
    let resultFromServer = await PersonnelApiService.AddOrUpdateAsync(
      personnel
    );
    if (resultFromServer.isSuccess) {
      if (personnelNumber.personnelNumber === undefined)
        toast.success("شخص به درستی اضافه شد");
      else toast.success("شخص به درستی ویرایش شد");
    } else {
      console.error(resultFromServer);
      resultFromServer.messages.forEach((msg) => toast.error(msg));
    }
  };
  const LoadData = async () => {
    let resultFromServer = await PersonnelApiService.GetAsync(
      personnelNumber.personnelNumber
    );
    if (resultFromServer.isSuccess) {
      setPersonnel({
        personnelNumber: resultFromServer.result.personnelNumber,
        name: resultFromServer.result.name,
        family: resultFromServer.result.family,
        dateTimeOfStartWork: resultFromServer.result.dateTimeOfStartWork,
        dateTimeOfEndWork: resultFromServer.result.dateTimeOfEndWork,
        serviceLocationPhone: resultFromServer.result.serviceLocationPhone,
        nameFather: resultFromServer.result.nameFather,
        nationalId: resultFromServer.result.nationalId,
        sex: resultFromServer.result.sex === 1 ? "1" : "0",
        isActive: resultFromServer.result.isActive === true ? "1" : "0",
        isSpecial: resultFromServer.result.isSpecial === true ? "1" : "0",
        dateTimeOfBirthDay: resultFromServer.result.dateTimeOfBirthDay,
        locationOfBirth: resultFromServer.result.locationOfBirth,
        education: resultFromServer.result.education,
        serviceLocation: resultFromServer.result.serviceLocation,
        selfPhone: resultFromServer.result.selfPhone,
        personnelImage: resultFromServer.result.personnelImage,
      });
    } else {
      toast.error(resultFromServer.messages[0]);
    }
  };
  useEffect(() => {
    if (
      personnelNumber.personnelNumber !== undefined &&
      personnelNumber.personnelNumber !== null
    )
      LoadData();
  }, []);
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
            onHandleAddOrUpdate={HandleAddOrUpdate}
            isEdit={personnelNumber.personnelNumber !== undefined}
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
            onHandleAddOrUpdate={HandleAddOrUpdate}
          />
        </div>
        <div
          className="tab-pane fade"
          id="navs-pills-justified-messages"
          role="tabpanel"
        >
          <PersonnelAssignToDeviceOrGroupCom
            personnel={personnel}
            onHandleSetValue={HandleSetValue}

          />
        </div>
      </div>
    </div>
  );
}

export default PersonnelAddOrEditCom;
