"use client";
import React from "react";

const Contact = ({ variant }) => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <section
      className={`${
        variant ? (variant == "blue" ? " bg-[ghostwhite] " : "") : " bg-black "
      }  text-black py1`}
    >
      <div className="myContainer">
        <h2 className="text-center">Contact</h2>
        <form
          onSubmit={handleForm}
          className="lg:w-[50%] mx-auto mt-[64px] flex flex-col lg:gap-[2.5vw]"
        >
          <div className="w-full border-b pb-[0.9375vw]">
            <input
              required
              type="email"
              placeholder="email"
              className="w-full outline-none bg-transparent lg:text25 mtext18 placeholder:lg:text25 placeholder:mtext18 capitalize"
            />
          </div>
          <div className="w-full border-b pb-[0.9375vw]">
            <input
              required
              type="text"
              placeholder="Message"
              className="w-full outline-none bg-transparent lg:text25 mtext18 placeholder:lg:text25 placeholder:mtext18 capitalize"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="cursor-pointer gradient px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
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
      </div>
    </section>
  );
};

export default Contact;
