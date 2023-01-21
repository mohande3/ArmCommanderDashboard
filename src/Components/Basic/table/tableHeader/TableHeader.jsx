import React from "react";
import { InputCheckBox } from "../../formControlls/FormControlls";

function TableHeader({
  columns = [],
  type = "",
  isCheckable = false,
  isCheckAll = false,
}) {
  return (
    <thead className={!type ? "" : "table-" + type}>
      <tr>
        {isCheckable && (
          <th>
            <input
              class="form-check-input"
              type="checkbox"
              checked={isCheckAll}
            ></input>
          </th>
        )}
        {columns.map((col, index) => (
          <th key={index} className={col.className}>
            {col.title}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
