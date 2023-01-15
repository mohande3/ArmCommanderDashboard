import React from "react";
import TableBody from "./tableBody/TableBody";
import TableHeader from "./tableHeader/TableHeader";

function Table({
  type = "",
  id = "",
  columns = [],
  rows = [],
  className = "",
}) {
  return (
    <table className={"table table-responsive " + className}>
      <TableHeader columns={columns} type={type} />
      <TableBody columns={columns} rows={rows} />
    </table>
  );
}

export default Table;
