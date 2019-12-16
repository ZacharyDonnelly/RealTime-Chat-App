import React from "react";
import "./NotFound.styles.scss";

const NotFound = () => {
  return (
    <div className="code-area">
      <span style={{ color: "#777", fontStyle: "italic" }}>
        404 page not found.
      </span>
      <span>
        <span style={{ color: "#d65562" }}>if</span>(
        <span style={{ color: "#4ca8ef" }}>!</span>
        <span style={{ fontStyle: "italic", color: "#bdbdbd" }}>found</span>)
        {"{"}
      </span>
      <span>
        <span style={{ paddingLeft: "15px", color: "#2796ec" }}>
          <i style={{ width: "10px", display: "inline-block" }} />
          throw
        </span>
        <span>
          (<span style={{ color: "#a6a61f" }}>new Error</span>);
        </span>
        <span style={{ display: "block" }}>{"}"}</span>
        <span style={{ color: "#777", fontStyle: "italic" }}>
          {" "}
          <a className="notfound-a" href="/">
            Go home!
          </a>
        </span>
      </span>
    </div>
  );
};

export default NotFound;
