import React from "react";
import { LoaderSpinnerMedium } from "../../loader/LoaderSpinner";
import { InputCheckBox } from "../FormControlls";

function InputListCheckGroupPrivate({
  rows = [],
  valueSelected = [],
  onHandleChangeValue,
  id = "",
}) {
  if (rows === null) return <LoaderSpinnerMedium />;
  const IsSelected = (value) => {
    if (
      valueSelected === undefined ||
      valueSelected === null ||
      valueSelected.length === 0
    )
      return false;
    let selected = valueSelected.find((sr) => sr === value);
    return selected !== undefined;
  };
  return (
    <div className="demo-inline-spacing mt-3">
      <div className="list-group">
        {rows.map((row, index) => {
          return (
            <InputCheckBox
              key={index}
              id={row.value}
              value={IsSelected(row.value)}
              className="list-group-item"
              text={row.name}
              onHandleChangeValue={(val) => {
                if (!onHandleChangeValue) {
                  console.warn(`onHandleChangeValue is not exist in ${id}`);
                  return;
                }
                onHandleChangeValue(row.value, val);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default InputListCheckGroupPrivate;
