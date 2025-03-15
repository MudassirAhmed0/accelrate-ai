import React from "react";

const ListsWrapper = ({ data }) => {
  return (
    <section className="bg-black text-white">
      <div className="myContainer py1">
        <h2 className="lg:w-[80%] capitalize">{data?.heading}</h2>
        <div
          className="lg:text30 mtext20 defaultList lg:mt-16 mt-10 porcess_content"
          dangerouslySetInnerHTML={{ __html: data?.content }}
        ></div>
      </div>
    </section>
  );
};

export default ListsWrapper;
