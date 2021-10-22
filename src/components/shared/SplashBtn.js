import React from "react";

function SplashBtn({
  active,
  name,
  textColor,
  align,
  color1,
  color2,
  onClick,
}) {
  let background = "#070B1A";

  if (active.toLocaleLowerCase() === name.toLocaleLowerCase()) {
    background = `linear-gradient(80deg, ${color1} 40%, ${color2})`;
  }

  return (
    <div
      className="splash-btn"
      style={{
        background: `linear-gradient(80deg, ${color1} 40%, ${color2})`,
      }}
    >
      <div
        className="splash-btn-inner"
        name={name}
        style={{
          //
          textAlign: align,
          color: textColor,
          background: background,
        }}
        onClick={onClick}
      >
        {name}
      </div>
    </div>
  );
}

export default SplashBtn;
