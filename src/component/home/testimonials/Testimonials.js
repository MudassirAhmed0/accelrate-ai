import React from "react";

const Testimonials = () => {
  return (
    <section className="fullVh fullSvh w-full bg-secondary-light flex">
      <div className="flex justify-between items-stretch min-h-full w-full">
        <div className="w-[40%] px-[40px] flex flex-col justify-center">
          <div className="flex items-center gap-x-[15px]">
            <span className="block size-[8px] rounded-full bg-primary-teal"></span>
            <span className="text22 uppercase text-primary-teal font-medium">
              Nos produits & services
            </span>
          </div>
          <h4 className="text70 font-bold poppins text-secondary-gray">
            Des réponses à vos challenges RH
          </h4>
        </div>
        <div className="w-[57%] bg-primary-blue flex items-center">
          <div className="w-full min-h-[65%] flex items-stretch whitespace-nowrap">
            <div className="min-h-full bg-secondary-gray w-[33%] rounded-[20px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
