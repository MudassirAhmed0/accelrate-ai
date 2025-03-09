import React from "react";

const ListsWrapper = ({ data }) => {
  return (
    <div className="myContainer lg:w-[70%] py1">
      <h2 className="lg:w-[80%]">{data?.heading}</h2>
      <div
        className="lg:text30 mtext22 text-black defaultList mt30 porcess_content"
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></div>
    </div>
  );
};

export default ListsWrapper;
