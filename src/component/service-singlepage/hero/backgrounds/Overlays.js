import React from "react";

const Overlays = () => {
  return (
    <div className="absolute inset-0 size-full z-[1]">
      <span
        style={{
          background: "linear-gradient(#10101000 25%,#101010 75%)",
        }}
        className="absolute inset-0 size-full z-[1]"
      ></span>
      <span className="absolute top-0 left-0 h-full w-[30%] z-[1] bg-[linear-gradient(90deg,#101010_10%,#10101000)]"></span>
      <span className="absolute top-0 right-0 h-full w-[30%] z-[1] bg-[linear-gradient(-90deg,#101010_10%,#10101000)]"></span>
    </div>
  );
};

export default Overlays;
