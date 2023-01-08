import React from "react";

function TableBody({ columns = [], rows = [] }) {
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
  return (
    <tbody>
      {rows.map((row, index) => {
        return (
          <tr key={index}>
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
