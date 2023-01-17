import React from "react";

function Card({
  className = "",
  id = "",
  title = "",
  image = "",
  titleElement,
  children,
}) {
  return (
    <>
      <div id={id} className={"card h-100 " + className}>
        {image && (
          <img className="card-img-top" src={image} alt="Card image cap" />
        )}
        <div className="card-body">
          {titleElement === undefined ? (
            title && <h5 className="card-title">{title}</h5>
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
