/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const HorizontalInset = ({
  className,
  divider = "https://c.animaapp.com/cWolSqf1/img/divider.svg",
}) => {
  return (
    <div
      className={`flex flex-col w-80 items-start justify-center pl-4 pr-0 py-0 relative top-px ${className}`}
    >
      <img
        className="relative self-stretch w-full h-px object-cover"
        alt="Divider"
        src={divider}
      />
    </div>
  );
};
