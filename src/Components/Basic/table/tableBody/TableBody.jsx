import React from "react";

function TableBody({ columns = [], rows = [] }) {
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
