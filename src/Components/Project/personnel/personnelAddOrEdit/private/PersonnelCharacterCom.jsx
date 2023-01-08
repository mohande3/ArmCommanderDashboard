import React, { useState } from "react";
import {
  Input,
  InputDatePicker,
  InputSelecte,
  InputSwitch,
  InputText,
  Label,
} from "../../../../Basic/formControlls/FormControlls";
import {
  LoaderSpinnerMedium,
  LoaderSpinnerSmall,
} from "../../../../Basic/loader/LoaderSpinner";

function PersonnelCharacterCom({ personnel, onHandleSetValue,onHandleAddOrUpdate }) {
  const [locationServices, setLocationServices] = useState(null);
  const GetImage = () => {
    if (!personnel.personnelImage)
      return "../assets/img/avatars/1.png";
    return personnel.personnelImage;
  }
  const HandleChangeImage = e => {
    onHandleSetValue('personnelImage',URL.createObjectURL(e.target.files[0]))
  }
  return (
    <>
      <div className="d-flex align-items-start align-items-sm-center gap-4">
        <img
          src={GetImage()}
          alt="user-avatar"
          className="d-block rounded"
          height="100"
          width="100"
          id="uploadedAvatar"
        />
        <div className="button-wrapper">
          <label
            htmlFor="upload"
            className="btn btn-primary mx-2 mb-4"
            tabIndex="0"
          >
            <span className="d-none d-sm-block">انتخاب تصویر</span>
            <i className="bx bx-upload d-block d-sm-none"></i>
            <input
              type="file"
              id="upload"
              className="account-file-input hidden"
              hidden=""
              accept="image/png, image/jpeg"
              onChange={HandleChangeImage}
            />
          </label>
          <button
            onClick={e=>onHandleSetValue('personnelImage',null)}
            type="button"
            className="btn btn-outline-secondary account-image-reset mb-4"
          >
            <i className="bx bx-reset d-block d-sm-none"></i>
            <span className="d-none d-sm-block">ریست</span>
          </button>

          <p className="text-muted mb-0">
            Allowed JPG, GIF or PNG. Max size of 800K
          </p>
        </div>
      </div>
      <hr className="my-0 my-3" />
      <div>
        <div className="row">
          <div className="mb-3 col-md-6">
            <Label text="نام : " htmlFor="name" />
            <InputText
              id="name"
              placeHolder="نام"
              value={personnel.name}
              onHandleChangeValue={(val) => {
                onHandleSetValue("name", val);
              }}
            />
          </div>
          <div className="mb-3 col-md-6">
            <Label text="نام خانوادگی : " htmlFor="family" />
            <InputText
              id="family"
              placeHolder="نام خانوادگی"
              value={personnel.family}
              onHandleChangeValue={(val) => {
                onHandleSetValue("family", val);
              }}
            />
          </div>
          <div className="mb-3 col-md-6">
            <Label text="شماره پرسنلی : " htmlFor="personnelNumber" />
            <InputText
              id="personnelNumber"
              placeHolder="نام شماره پرسنلی"
              value={personnel.personnelNumber}
              onHandleChangeValue={(val) => {
                onHandleSetValue("personnelNumber", val);
              }}
            />
          </div>
          <div className="mb-3 col-md-6">
            <Label text="تاریخ شروع قرارداد : " htmlFor="dateTimeOfStartWork" />
            <InputDatePicker
              id="dateTimeOfStartWork"
              className="d-block"
              value={personnel.dateTimeOfStartWork}
              onHandleChangeValue={(val) => {
                onHandleSetValue("dateTimeOfStartWork", val);
              }}
            />
          </div>
          <div className="mb-3 col-md-6">
            <Label text="تاریخ پایان قرارداد : " htmlFor="dateTimeOfEndWork" />
            <InputDatePicker
              id="dateTimeOfEndWork"
              className="d-block"
              value={personnel.dateTimeOfEndWork}
              onHandleChangeValue={(val) => {
                onHandleSetValue("dateTimeOfEndWork", val);
              }}
            />
          </div>
          <div className="mb-3 col-md-6">
            <Label text="محل خدمت : " htmlFor="serviceLocation" />
            {locationServices === null ? (
              <>
                <LoaderSpinnerSmall className="mx-2 text-warning" />
              </>
            ) : (
              <></>
            )}
            <InputSelecte
              id="serviceLocation"
              placeHolder="محل خدمت"
              options={locationServices}
            />
          </div>
          <div className="mb-3 col-md-6">
            <Label text="تلفن محل خدمت : " htmlFor="serviceLocationPhone" />
            <InputText
              id="serviceLocationPhone"
              placeHolder="تلفن محل خدمت"
              value={personnel.serviceLocationPhone}
              onHandleChangeValue={(val) => {
                onHandleSetValue("serviceLocationPhone", val);
              }}
            />
          </div>
          <div className="mb-3 col-md-6">
          </div>
          <div className="mb-3 col-md-6">
            <InputSwitch
              text="فعال بودن پرسنل"
              id="isActive"
              value={personnel.isActive}
              onHandleChangeValue={(val) => {
                onHandleSetValue("isActive", val);
              }}
            />
            <InputSwitch
              text="استثنا بودن پرسنل"
              id="isSpecial"
              className="mt-2"
              value={personnel.isSpecial}
              onHandleChangeValue={(val) => {
                onHandleSetValue("isSpecial", val);
              }}
            />
          </div>
        </div>
        <div className="mt-2">
          <button type="submit" className="btn btn-primary mx-2" onClick={onHandleAddOrUpdate}>
            ثبت تغییرات
          </button>
          <button type="reset" className="btn btn-outline-secondary">
            برگشت
          </button>
        </div>
      </div>
    </>
  );
}

export default PersonnelCharacterCom;
