import React,{useState} from 'react'
import { Input, InputDatePicker, InputSelecte, InputText, Label } from '../../../../Basic/formControlls/FormControlls'
import { LoaderSpinnerMedium, LoaderSpinnerSmall } from '../../../../Basic/loader/LoaderSpinner'

function PersonnelUsuallyCharacterCom() {
  const [locationServices, setLocationServices] = useState(null)
  return (
        <>
          <div class="d-flex align-items-start align-items-sm-center gap-4">
          <img
            src="../assets/img/avatars/1.png"
            alt="user-avatar"
            class="d-block rounded"
            height="100"
            width="100"
            id="uploadedAvatar"
          />
          <div class="button-wrapper">
            <label for="upload" class="btn btn-primary mx-2 mb-4" tabindex="0">
              <span class="d-none d-sm-block">انتخاب تصویر</span>
              <i class="bx bx-upload d-block d-sm-none"></i>
              <input
                type="file"
                id="upload"
                class="account-file-input hidden"
                hidden=""
                accept="image/png, image/jpeg"
              />
            </label>
            <button
              type="button"
              class="btn btn-outline-secondary account-image-reset mb-4"
            >
              <i class="bx bx-reset d-block d-sm-none"></i>
              <span class="d-none d-sm-block">ریست</span>
            </button>

            <p class="text-muted mb-0">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>
      <hr class="my-0 my-3" />
 <form id="formAccountSettings" method="POST" onsubmit="return false">
          <div class="row">
            <div class="mb-3 col-md-6">
              <Label text='نام : ' htmlFor='firstName' />
              <InputText id='firstName' placeHolder='نام' />
            </div>
            <div class="mb-3 col-md-6">
              <Label text='نام خانوادگی : ' htmlFor='lastName' />
              <InputText id='lastName' placeHolder='نام خانوادگی' />
            </div>
            <div class="mb-3 col-md-6">
              <Label text='شماره پرسنلی : ' htmlFor='personnelNumber' />
              <InputText id='personnelNumber' placeHolder='نام شماره پرسنلی' />
            </div>
            <div class="mb-3 col-md-6">
              <Label text='تاریخ شروع قرارداد : ' htmlFor='dateTimeOfStartWork' />
              <InputDatePicker
                id='dateTimeOfStartWork'
                className='d-block' />
            </div>
            <div class="mb-3 col-md-6">
              <Label text='تاریخ پایان قرارداد : ' htmlFor='dateTimeOfEndWork' />
              <InputDatePicker
                id='dateTimeOfEndWork'
                className='d-block' />
            </div>
            <div class="mb-3 col-md-6">
              <Label text='محل خدمت : ' htmlFor='serviceLocation' />
              {locationServices === null ? <>
                <LoaderSpinnerSmall className="mx-2 text-warning" />
              </>:<></>}
              <InputSelecte id='serviceLocation'
                placeHolder='محل خدمت' options={locationServices} />
            </div>
            <div class="mb-3 col-md-6">
              <Label text='تلفن محل خدمت : ' htmlFor='serviceLocationPhone' />
              <InputText id='serviceLocationPhone' placeHolder='تلفن محل خدمت' />
            </div>
          </div>
          <div class="mt-2">
            <button type="submit" class="btn btn-primary mx-2">
              ثبت تغییرات
            </button>
            <button type="reset" class="btn btn-outline-secondary">
              برگشت
            </button>
          </div>
        </form>
    </>
  )
}

export default PersonnelUsuallyCharacterCom