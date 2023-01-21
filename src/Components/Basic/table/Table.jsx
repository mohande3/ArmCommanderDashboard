import React from "react";
import TableBody from "./tableBody/TableBody";
import TableHeader from "./tableHeader/TableHeader";

function Table({
  type = "",
  id = "",
  columns = [],
  rows = [],
  className = "",
  isCheckable = false,
  isCheckAll = false,
  idsChecked = [],
  onHandleCheckedAll,
  onHandleCheckedOne,
}) {
  return (
    <table className={"table table-responsive " + className}>
      <TableHeader
        columns={columns}
        type={type}
        isCheckable={isCheckable}
        isCheckAll={isCheckAll}
      />
      <TableBody
        columns={columns}
        rows={rows}
        isCheckable={isCheckable}
        isCheckAll={isCheckAll}
        idsChecked={idsChecked}
        onHandleCheckedOne={onHandleCheckedOne}
      />
    </table>
  );
}

export default Table;
