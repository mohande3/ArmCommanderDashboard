import React from "react";

function Card({ className = "", id = "", title = "", titleElement, children }) {
  return (
    <>
      <div id={id} class={"card h-100 " + className}>
        <div className="card-body">
          {titleElement === undefined ? (
            <h5 className="card-title">{title}</h5>
          ) : (
            <>{titleElement}</>
          )}
          {children}
        </div>
      </div>
    </>
  );
}

export default Card;
