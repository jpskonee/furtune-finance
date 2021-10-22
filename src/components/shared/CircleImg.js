import React from "react";

function CircleImg({ img }) {
  return (
    <div className="circle-img">
      <img
        style={{
          borderRadius: "100%",
          width: "inherit",
          padding: "0.78rem",
        }}
        src={`/${img}`}
        alt="pics"
      />
    </div>
  );
}

export default CircleImg;
