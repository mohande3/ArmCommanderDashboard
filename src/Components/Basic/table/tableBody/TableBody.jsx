import React from "react";

function TableBody({
  columns = [],
  rows = [],
  isCheckable = false,
  isCheckAll = false,
  idsChecked = [],
  onHandleCheckedOne,
}) {
  if (rows == null)
    return (
      <tbody>
        <div className="alert alert-warning">Not loaded</div>
      </tbody>
    );
  const HandleColWithRender = (col, row) => {
    if (col.render) return col.render(row);
    else {
      return row[col.property];
    }
  };
  const IsChecked = (cols = [], row) => {
    console.log("IDS", idsChecked);
    try {
      if (isCheckAll) return true;
      let check = undefined;
      cols.forEach((col) => {
        if (col.fieldForCheckSelected) {
          check = idsChecked.find((x) => x === row[col.property]);
        }
      });
      if (check === undefined) return false;
      else return true;
    } catch (error) {
      console.error("Table->TableBody->IsChecked", error);
    }
  };
  const GetValueChecked = (cols = [], row) => {
    try {
      let data = undefined;
      cols.forEach((col) => {
        if (col.fieldForCheckSelected) {
          data = row[col.property];
        }
      });
      return data;
    } catch (error) {
      console.error("Table->TableBody->GetValueChecked()", error);
    }
  };
  return (
    <tbody>
      {rows.map((row, index) => {
        return (
          <tr key={index}>
            {isCheckable && (
              <th>
                <input
                  class="form-check-input"
                  type="checkbox"
                  checked={IsChecked(columns, row)}
                  onChange={(e) => {
                    if (!onHandleCheckedOne) {
                      console.warn("Not exist onHandleCheckedOne");
                      return;
                    }
                    onHandleCheckedOne(
                      e.target.checked === true ? "check" : "uncheck",
                      GetValueChecked(columns, row)
                    );
                  }}
                ></input>
              </th>
            )}
            {columns.map((col, indexCol) => {
              return <td key={indexCol}>{HandleColWithRender(col, row)}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
