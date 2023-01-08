import React from "react";

function TableHeader({ columns = [], type = "" }) {
  return (
    <thead className={!type ? "" : "table-" + type}>
      <tr>
        {columns.map((col, index) => (
          <th key={index}>{col.title}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
