import React from "react";
import { Card } from "../../Basic/card/Card";
import Table from "../../Basic/table/Table";
function PersonnelTableCom() {
  const columns = [
    {
      title: "col1",
      property: "",
    },
    {
      title: "col1",
      property: "",
    },
    {
      title: "col1",
      property: "",
    },
    {
      title: "col1",
      property: "",
    },
    {
      title: "col1",
      property: "",
    },
  ];
  return (
    <Card title="مدیریت کاربران">
      <Table columns={columns} />
    </Card>
  );
}

export default PersonnelTableCom;
