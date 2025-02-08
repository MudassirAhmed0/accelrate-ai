import React from "react";

const TextArea = () => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor="details" className="text20">
        Tell us more
      </label>
      <textarea
        required
        id="details"
        type="text"
        autoComplete="off"
        placeholder="We love details"
        className="w-full h-[100px] outline-none bg-transparent lg:text22 mtext18 placeholder:lg:text22 placeholder:mtext18 text-white placeholder:text-[#FFFFFF33] placeholder:font-light border-[#FFFFFF33] border-b mt20 pb-[0.625vw] focus:border-white"
      ></textarea>
    </div>
  );
};

export default TextArea;
