import React from "react";

function TableHeader({ columns = [], type = "" }) {
  return (
    <thead className={!type ? "" : "table-" + type}>
      <tr>
        {columns.map((col, index) => (
          <th key={index} className={col.className}>{col.title}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
