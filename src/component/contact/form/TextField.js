import React from "react";

const TextField = ({ lable, placeholder }) => {
  return (
    <div className="w-[48%] flex flex-col">
      <label htmlFor="name" className="text20">
        {lable}
      </label>
      <input
        required
        id="name"
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        className="w-full outline-none bg-transparent lg:text22 mtext18 placeholder:lg:text22 placeholder:mtext18 text-white placeholder:text-[#FFFFFF33] placeholder:font-light border-[#FFFFFF33] border-b mt20 pb-[0.625vw] focus:border-white"
      />
    </div>
  );
};

export default TextField;
