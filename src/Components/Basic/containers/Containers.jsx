import React from "react";

const Container = ({ className = "", children }) => {
  return <div className={"container " + className}>{children}</div>;
};

const ContainerFluid = ({ className = "", children }) => {
  return <div className={"container-fluid " + className}>{children}</div>;
};
const Row = ({ className = "", children }) => {
  return <div className={"row " + className}>{children}</div>;
};
const Col = ({ className = "", col = "", children }) => {
  return <div className={"col-" + col + " " + className}>{children}</div>;
};
const InlineDisplay = ({ className = "", children }) => {
  return (
    <div
      className={"d-flex flex-row align-items-center form-inline " + className}
    >
      {children}
    </div>
  );
};

export { Container, ContainerFluid, Row, Col, InlineDisplay };
