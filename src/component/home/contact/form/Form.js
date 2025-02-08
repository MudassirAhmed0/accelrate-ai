import React from "react";
import DropDownField from "./DropDownField";
import TextField from "./TextField";
import TextArea from "./TextArea";
import RadioField from "./RadioField";

const Form = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <form
      data-aos="fade"
      onSubmit={handleForm}
      className="swiss lg:w-[50%] w-full text-white flex items-start justify-between flex-wrap gap-x-[0.625vw] gap-y-[30px] bg-[#1a1a1a] lg:p-[4.16666666667vw] p-[30px] rounded-[10px]"
    >
      <TextField
        id={"name"}
        label={"What’s your name?"}
        placeholder={"So we can cay hi properly"}
      />
      <TextField
        id={"company"}
        label={"Your Company"}
        placeholder={"Optional, but we love context!"}
      />
      <DropDownField />
      <TextArea />
      <RadioField />

      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="cursor-pointer bg-[#111] px-6 py-3 rounded-xl border-[1px] border-white text-white font-medium group"
        >
          <div className="relative overflow-hidden">
            <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Submit
            </p>
            <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Submit
            </p>
          </div>
        </button>
      </div>
    </form>
  );
};

export default Form;
