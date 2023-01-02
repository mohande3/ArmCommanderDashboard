import React from "react";

const Container = ({ className = "", children }) => {
  return <div className={"container " + className}>{children}</div>;
};
const Row = ({ className = "", children }) => {
  return <div className={"row " + className}>{children}</div>;
};
const Col = ({ className = "", col = "", children }) => {
  return <div className={"col-" + col + " " + className}>{children}</div>;
};

export { Container, Row, Col };
