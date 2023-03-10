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

function PersonnelCharacterCom({
  personnel,
  onHandleSetValue,
  onHandleAddOrUpdate,
  isEdit = false,
}) {
  const [locationServices, setLocationServices] = useState(null);
  const [isChangeImage, setIsChangeImage] = useState(false);
  const GetImage = () => {
    if (!isChangeImage) {
      if (
        isEdit &&
        personnel.personnelImage !== undefined &&
        personnel.personnelImage !== null &&
        personnel.personnelImage !== ""
      )
        return `data:image/jpeg;base64,${personnel.personnelImage}`;
      else if (isEdit) return "../../assets/img/avatars/1.png";

      if (
        personnel.personnelImage === undefined ||
        personnel.personnelImage === null ||
        personnel.personnelImage === ""
      )
        return "../assets/img/avatars/1.png";
      return URL.createObjectURL(personnel.personnelImage);
    } else {
      if (
        isEdit &&
        personnel.personnelImage !== undefined &&
        personnel.personnelImage !== null &&
        personnel.personnelImage !== ""
      )
        return URL.createObjectURL(personnel.personnelImage);
      else if (isEdit) return "../../assets/img/avatars/1.png";

      if (
        personnel.personnelImage === undefined ||
        personnel.personnelImage === null ||
        personnel.personnelImage === ""
      )
        return "../assets/img/avatars/1.png";
      return URL.createObjectURL(personnel.personnelImage);
    }
  };
  const HandleChangeImage = (e) => {
    setIsChangeImage(true);
    onHandleSetValue("personnelImage", e.target.files[0]);
  };
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
            <span className="d-none d-sm-block">???????????? ??????????</span>
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
            onClick={(e) => onHandleSetValue("personnelImage", null)}
            type="button"
            className="btn btn-outline-secondary account-image-reset mb-4"
          >
            <i className="bx bx-reset d-block d-sm-none"></i>
            <span className="d-none d-sm-block">????????</span>
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
            <Label text="?????? : " htmlFor="name" />
            <InputText
              id="name"
              placeHolder="??????"
              value={personnel.name}
              onHandleChangeValue={(val) => {
                onHandleSetValue("name", val);
              }}
            />
          </div>
          <div className="mb-3 col-md-6">
            <Label text="?????? ???????????????? : " htmlFor="family" />
            <InputText
              id="family"
              placeHolder="?????? ????????????????"
              value={personnel.family}
              onHandleChangeValue={(val) => {
                onHandleSetValue("family", val);
              }}
            />
          </div>
          <div className="mb-3 col-md-6">
            <Label text="?????????? ???????????? : " htmlFor="personnelNumber" />
            <InputText
              id="personnelNumber"
              placeHolder="?????? ?????????? ????????????"
              value={personnel.personnelNumber}
              onHandleChangeValue={(val) => {
                onHandleSetValue("personnelNumber", val);
              }}
            />
          </div>
          <div className="mb-3 col-md-6">
            <Label text="?????????? ???????? ?????????????? : " htmlFor="dateTimeOfStartWork" />
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
            <Label text="?????????? ?????????? ?????????????? : " htmlFor="dateTimeOfEndWork" />
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
            <Label text="?????? ???????? : " htmlFor="serviceLocation" />
            {locationServices === null ? (
              <>
                <LoaderSpinnerSmall className="mx-2 text-warning" />
              </>
            ) : (
              <></>
            )}
            <InputSelecte
              id="serviceLocation"
              placeHolder="?????? ????????"
              options={locationServices}
            />
          </div>
          <div className="mb-3 col-md-6">
            <Label text="???????? ?????? ???????? : " htmlFor="serviceLocationPhone" />
            <InputText
              id="serviceLocationPhone"
              placeHolder="???????? ?????? ????????"
              value={personnel.serviceLocationPhone}
              onHandleChangeValue={(val) => {
                onHandleSetValue("serviceLocationPhone", val);
              }}
            />
          </div>
          <div className="mb-3 col-md-6"></div>
          <div className="mb-3 col-md-6">
            <InputSwitch
              text="???????? ???????? ??????????"
              id="isActive"
              value={personnel.isActive}
              onHandleChangeValue={(val) => {
                onHandleSetValue("isActive", val);
              }}
            />
            <InputSwitch
              text="???????????? ???????? ??????????"
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
          <button
            type="submit"
            className="btn btn-primary mx-2"
            onClick={onHandleAddOrUpdate}
          >
            ?????? ??????????????
          </button>
          <button type="reset" className="btn btn-outline-secondary">
            ??????????
          </button>
        </div>
      </div>
    </>
  );
}

export default PersonnelCharacterCom;
