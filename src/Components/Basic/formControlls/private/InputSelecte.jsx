import React from "react";

function InputSelectePrivate({
  className = "",
  id = "",
  options = [],
  onHandleChangeValue,
  defaultValue,
}) {
  const HandleChangeValue = (e) => {
    if (!onHandleChangeValue) {
      console.warn(`Not exist HandleChangeValue for ${id}`);
      return;
    }
    onHandleChangeValue(e.target.value);
  };
  return (
    <select
      id={id}
      className={"select2 form-select " + className}
      onChange={HandleChangeValue}
      defaultValue={defaultValue}
    >
      {options == null ? (
        <></>
      ) : (
        options.map((op, index) => {
          return (
            <option
              key={index}
              value={op.value}
            >
              {op.name}
            </option>
          );
        })
      )}
    </select>
  );
}

export default InputSelectePrivate;
