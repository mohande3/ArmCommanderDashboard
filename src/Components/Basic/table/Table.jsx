import React from "react";
import TableBody from "./tableBody/TableBody";
import TableHeader from "./tableHeader/TableHeader";

function Table({ id = "", columns = [], rows = [] }) {
  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody columns={columns} rows={rows} />
    </table>
  );
}

export default Table;
