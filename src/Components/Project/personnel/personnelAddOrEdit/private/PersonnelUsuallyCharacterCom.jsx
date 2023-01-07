import React, { useState } from "react";
import StaticValuesService from "../../../../../services/StaticValuesService";
import {
  Input,
  InputDatePicker,
  InputSelecte,
  InputText,
  Label,
} from "../../../../Basic/formControlls/FormControlls";
import {
  LoaderSpinnerMedium,
  LoaderSpinnerSmall,
} from "../../../../Basic/loader/LoaderSpinner";

function PersonnelUsuallyCharacterCom({ personnel, onHandleSetValue }) {
  const [locationServices, setLocationServices] = useState(null);
  return (
    <>
      <div className="row">
        <div className="mb-3 col-md-6">
          <Label text="کد ملی : " htmlFor="nationalId" />
          <InputText
            id="nationalId"
            placeHolder="کد ملی"
            value={personnel.nationalId}
            onHandleChangeValue={(val) => {
              onHandleSetValue("nationalId", val);
            }}
          />
        </div>
        <div className="mb-3 col-md-6">
          <Label text="نام پدر : " htmlFor="nameFather" />
          <InputText
            id="nameFather"
            placeHolder="نام پدر"
            value={personnel.nameFather}
            onHandleChangeValue={(val) => {
              onHandleSetValue("nameFather", val);
            }}
          />
        </div>
        <div className="mb-3 col-md-6">
          <Label text="جنسیت : " htmlFor="sex" />
          <InputSelecte
            id="sex"
            defaultValue={personnel.sex}
            onHandleChangeValue={(val) => {
              onHandleSetValue("sex", val);
            }}
            options={StaticValuesService.Sex}
          />
        </div>
        <div className="mb-3 col-md-6">
          <Label text="تاریخ تولد : " htmlFor="dateTimeOfBirthDay" />
          <InputDatePicker
            id="dateTimeOfBirthDay"
            value={personnel.dateTimeOfBirthDay}
            onHandleChangeValue={(val) =>
              onHandleSetValue("dateTimeOfBirthDay", val)
            }
          />
        </div>
        <div className="mb-3 col-md-6">
          <Label text="محل تولد : " htmlFor="locationOfBirth" />
          <InputText
            id="locationOfBirth"
            onHandleChangeValue={(val) => {
              onHandleSetValue("locationOfBirth", val);
            }}
          />
        </div>
        <div className="mb-3 col-md-6">
          <Label text="تحصیلات : " htmlFor="education" />
          <InputSelecte
            id="education"
            defaultValue={personnel.education}
            onHandleChangeValue={(val) => {
              onHandleSetValue("education", val);
            }}
            options={StaticValuesService.Educations}
          />
        </div>
        <div className="mb-3 col-md-6">
          <Label text="تلفن : " htmlFor="selfPhone" />
          <InputText
            id="selfPhone"
            placeHolder="تلفن"
            value={personnel.selfPhone}
            onHandleChangeValue={(val) => {
              onHandleSetValue("selfPhone", val);
            }}
          />
        </div>
      </div>
      <div className="mt-2">
        <button type="submit" className="btn btn-primary mx-2">
          ثبت تغییرات
        </button>
        <button type="reset" className="btn btn-outline-secondary">
          برگشت
        </button>
      </div>
    </>
  );
}

export default PersonnelUsuallyCharacterCom;
