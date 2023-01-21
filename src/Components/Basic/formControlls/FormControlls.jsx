import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputSelectePrivate from "./private/InputSelecte";
import InputListCheckGroupPrivate from "./private/InputListCheckGroupPrivate";

const Label = ({ className = "", id = "", text = "", htmlFor = "" }) => {
  return (
    <label className={"form-label " + className} id={id} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

// ================= TEXT =====================
const Input = ({
  className = "",
  placeHolder = "",
  type = "",
  id = "",
  value = "",
  onHandleChangeValue,
}) => {
  const HandleChangeValue = (e) => {
    if (onHandleChangeValue === null || onHandleChangeValue === undefined) {
      console.warn(`Not exist onHandleChangeValue for ${id} controll`);
      return;
    }
    onHandleChangeValue(e.target.value);
  };
  if (value === null || value === undefined) {
    value = "";
    console.warn(`VALUE can not be null or empty for : ${id}`);
  }
  return (
    <input
      className={"form-control " + className}
      id={id}
      value={value}
      onChange={HandleChangeValue}
      placeholder={placeHolder}
      type={type}
    />
  );
};
const InputText = ({
  className = "",
  placeHolder = "",
  id = "",
  value = "",
  onHandleChangeValue,
}) => {
  return (
    <Input
      className={className}
      placeHolder={placeHolder}
      type="text"
      id={id}
      value={value}
      onHandleChangeValue={onHandleChangeValue}
    />
  );
};
const InputPassword = ({
  className = "",
  placeHolder = "",
  id = "",
  value = "",
  onHandleChangeValue,
}) => {
  return (
    <Input
      className={className}
      placeHolder={placeHolder}
      type="password"
      id={id}
      value={value}
      onHandleChangeValue={onHandleChangeValue}
    />
  );
};
const InputDatePicker = ({
  id = "",
  className = "",
  isSelectCurrentDay,
  value = "",
  onHandleChangeValue,
}) => {
  const HandleChangeValue = (data) => {
    if (onHandleChangeValue === null || onHandleChangeValue === undefined) {
      console.warn(`Not exist onHandleChangeValue for ${id} controll`);
      return;
    }
    console.log(data);
    onHandleChangeValue(data.unix);
  };
  return (
    <div className={"datePicker " + className}>
      <DatePicker
        plugins={[<DatePickerHeader position="left" />]}
        calendar={persian}
        locale={persian_fa}
        value={new DateObject(value * 1000)}
        onChange={HandleChangeValue}
        inputClass="form-control"
        calendarPosition="bottom-right"
      />
    </div>
  );
};
const InputSelecte = ({
  className = "",
  id = "",
  options = [],
  onHandleChangeValue,
  defaultValue,
}) => {
  return (
    <InputSelectePrivate
      className={className}
      id={id}
      options={options}
      onHandleChangeValue={onHandleChangeValue}
      defaultValue={defaultValue}
    />
  );
};

const InputListCheckGroup = ({
  rows = [],
  valueSelected = [],
  onHandleChangeValue,
  id = "",
}) => {
  return (
    <InputListCheckGroupPrivate
      rows={rows}
      onHandleChangeValue={onHandleChangeValue}
      valueSelected={valueSelected}
      id={id}
    />
  );
};

const InputSwitch = ({
  text = "",
  id = "",
  value = "",
  className = "",
  onHandleChangeValue,
}) => {
  const HandleChangeValue = (data) => {
    if (onHandleChangeValue === null || onHandleChangeValue === undefined) {
      console.warn(`Not exist onHandleChangeValue for ${id} controll`);
      return;
    }
    onHandleChangeValue(data === true ? "1" : "0");
  };

  return (
    <div className={"form-check form-switch " + className}>
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        // value={value}
        checked={value === "1"}
        onChange={(e) => HandleChangeValue(e.target.checked)}
      />
      <label className="form-check-label" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};
const InputCheckBox = ({
  className = "",
  id = "",
  text = "",
  value,
  onHandleChangeValue,
}) => {
  const HandleChangeValue = (data) => {
    if (onHandleChangeValue === null || onHandleChangeValue === undefined) {
      console.warn(`Not exist onHandleChangeValue for ${id} controll`);
      return;
    }
    onHandleChangeValue(data === true ? "1" : "0");
  };
  return (
    <div className={className}>
      <div className={"form-check "}>
        <input
          className="form-check-input"
          type="checkbox"
          // value={value}
          id={id}
          checked={value == "1"}
          onChange={(e) => HandleChangeValue(e.target.checked)}
        />
        <label className="form-check-label" htmlFor={id}>
          {text}
        </label>
      </div>
    </div>
  );
};
const InputRadioBox = ({
  className = "",
  text = "",
  id = "",
  group = "",
  onHandleChangeValue,
  value
}) => {
  const HandleChangeValue = (data) => {
    if (onHandleChangeValue === null || onHandleChangeValue === undefined) {
      console.warn(`Not exist onHandleChangeValue for ${id} controll`);
      return;
    }
    onHandleChangeValue(data === true ? "1" : "0");
  };
  return (
    <div className={"form-check" + className}>
      <input
        class="form-check-input"
        type="radio"
        name={group}
        id={id}
        // value="option2"
        checked={value}
        onChange={HandleChangeValue}
      />
      <label className="form-check-label" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};
// ====================== SHOW
const ShowDateFromUnix = ({ unix }) => {
  if (!unix) {
    console.warn("UNIX can not be null or empty");
    return;
  }
  let date = new DateObject({
    date: Number(unix) * 1000,
  });
  return <span>{date.convert(persian, persian_fa).format()}</span>;
};
const ShowTimeFromUnix = ({ unix, className = "" }) => {
  if (!unix) {
    console.warn("UNIX can not be null or empty");
    return;
  }
  let date = new DateObject({
    date: Number(unix) * 1000,
  });
  return (
    <span className={className}>
      {date.convert(persian, persian_fa).format("hh:mm")}
    </span>
  );
};

export {
  Label,
  Input,
  InputText,
  InputPassword,
  InputDatePicker,
  InputSelecte,
  InputListCheckGroup,
  InputSwitch,
  InputCheckBox,
  InputRadioBox,
  ShowDateFromUnix,
  ShowTimeFromUnix,
};
