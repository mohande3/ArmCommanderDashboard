import React from "react";

function TableHeader({ columns = [] }) {
  return (
    <thead>
      <tr>
        {columns.map((col, index) => (
          <th key={index}>{col.title}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
