import React from "react";

const TextField = ({ label, placeholder, id }) => {
  return (
    <div className="lg:w-[48%] w-full flex flex-col">
      <label htmlFor={`${id}`} className="text20">
        {label}
      </label>
      <input
        required
        id={`${id}`}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        className="w-full outline-none bg-transparent lg:text22 mtext18 placeholder:lg:text22 placeholder:mtext18 text-white placeholder:text-[#FFFFFF33] placeholder:font-light border-[#FFFFFF33] border-b mt20 pb-[0.625vw] focus:border-white"
      />
    </div>
  );
};

export default TextField;
