import React from "react";

export default function Button({ children, className, color, theme }) {
  let background;

  if (color === "secondary") {
    background = "bg-secondary hover:bg-secondary_hover";
  } else if (color === "danger") {
    background = "bg-red_primary hover:bg-red_primary_hover";
  } else {
    background = "bg-primary hover:bg-primary_hover";
  }

  switch (theme) {
    case "small":
      return (
        <div>
          <button
            className={`${className} ${background} px-4 py-2 uppercase shadow-xl
                  text-white text-xs font-medium animate`}
          >
            {children}
          </button>
        </div>
      );
    case "big":
      return (
        <div>
          <button
            className={`${className} ${background} px-8 py-4 uppercase shadow-xl
                      text-white text-base font-medium animate`}
          >
            {children}
          </button>
        </div>
      );
    default:
      return (
        <div>
          <button
            className={`${className} ${background} px-4 py-3 uppercase shadow-xl
                    text-white text-sm font-medium animate`}
          >
            {children}
          </button>
        </div>
      );
  }
}
