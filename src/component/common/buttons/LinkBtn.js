import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const LinkBtn = ({
  link,
  text,
  tag: Tag = Link,
  isLoading,
  isExternal = false, // Default to false
  smallVarient,
}) => {
  if (!text) {
    return <></>;
  }

  // Determine the target attribute based on isExternal
  const target = isExternal ? "_blank" : "_self";

  return (
    <Tag
      {...(Tag === Link ? { href: link, target } : {})} // Apply target only if Tag is Link
      className={`${isLoading ? "pointer-events-none" : ""}   ${
        smallVarient
          ? "lg:text16 mtext12"
          : "lg:text22 mtext18 font-medium ml-auto lg:mb-[-0.3125vw]"
      }  lg:leading-[2.5vw]  flex items-center lg:gap-x-[0.3125vw] gap-x-[4px] group afterLineHover poppins`}
    >
      {text}
      <div
        className={`${
          smallVarient ? "lg:text20 mtext16" : "lg:text30 mtext24"
        }  relative overflow-hidden`}
      >
        <div className="translate-x-0 group-hover:translate-x-[100%] group-hover:duration-[600ms] group-hover:transition-[cubic-bezier(0.62,0.05,0.01,0.99)]">
          <IoMdArrowForward />
        </div>
        <div className="absolute top-0 left-[-100%] group-hover:left-0 group-hover:duration-[600ms] group-hover:transition-[cubic-bezier(0.62,0.05,0.01,0.99)]">
          <IoMdArrowForward />
        </div>
      </div>
    </Tag>
  );
};

export default LinkBtn;
