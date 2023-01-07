import React from "react";

function TableBody({ columns = [], rows = [] }) {
  if (rows == null)
    return (
      <tbody>
        <div className="alert alert-warning">Not loaded</div>
      </tbody>
    );
  return (
    <tbody>
      {rows.map((row, index) => {
        return (
          <tr key={index}>
            {columns.map((col, indexCol) => {
              return <td key={indexCol}>{row[col.property]}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
