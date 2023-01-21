import React from "react";

const Divider = ({
  type = "",
  text = "",
  className = "",
  textLocation = "",
}) => {
  if (!text) return <hr className={type !== "" ? "bg-" + type : ""} />;
  return (
    <div
      class={
        "divider " +
        (type !== "" ? "divider-" + type : "") +
        (textLocation !== "" ? "text-" + type : "")
      }
    >
      <div class={`divider-text ${type ? "text-" + type : ""}`}>{text}</div>
    </div>
  );
};
const DividerPrimary = ({ text, className = "", textLocation = "" }) => {
  return (
    <Divider
      text={text}
      className={className}
      type="primary"
      textLocation={textLocation}
    />
  );
};
const DividerDanger = ({ text, className = "", textLocation = "" }) => {
  return (
    <Divider
      text={text}
      className={className}
      type="danger"
      textLocation={textLocation}
    />
  );
};
const DividerInfo = ({ text, className = "", textLocation = "" }) => {
  return (
    <Divider
      text={text}
      className={className}
      type="info"
      textLocation={textLocation}
    />
  );
};
const DividerSuccess = ({ text, className = "", textLocation = "" }) => {
  return (
    <Divider
      text={text}
      className={className}
      type="success"
      textLocation={textLocation}
    />
  );
};

export default Divider;
export { DividerDanger, DividerInfo, DividerSuccess, DividerPrimary };
