import React from "react";

function Card({ className = "", id = "", title = "", titleElement, children }) {
  return (
    <>
      <div id={id} className={"card h-100 " + className}>
        <div className="card-body">
          {titleElement === undefined ? (
            <h5 className="card-title">{title}</h5>
          ) : (
            <div className="card-header-2">{titleElement}</div>
          )}
          {children}
        </div>
      </div>
    </>
  );
}

export { Card };
