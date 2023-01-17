import React from "react";

function Progress({ className = "", classNameProgress = "bg-white" }) {
  return (
    <div className={"progress w-100 " + className} style={{ height: "2px" }}>
      <div
        className={"progress-bar " + classNameProgress}
        role="progressbar"
        style={{ width: "25%" }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}

export default Progress;
