"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "work",
    link: "/",
  },
  {
    title: "about",
    link: "/",
  },
  {
    title: "services",
    link: "/",
  },
  {
    title: "contact",
    link: "/",
  },
];
const Header = () => {
  useGSAP(() => {
    gsap.from(".headerLink span", {
      duration: 0.7,
      ease: "power1.out",
      y: -150,
      opacity: 0,
    });
    gsap.from("nav ul li", {
      duration: 1.5,
      ease: "power4.out",
      y: -40,
      opacity: 0,
      stagger: 0.03,
    });
    gsap.from(".contactLink a", {
      duration: 2,
      ease: "power4.out",
      y: -40,
      opacity: 0,
    });
  }, []);
  return (
    <header className="fixed w-full top-0 left-0 z-10 mix-blend-difference capitalize tracking-[-.14px] lg:text20">
      <div className="lg:h-[4.539vw] lg:py-[0.73206442166vw] flex flex-col justify-end">
        <div className="lg:px-[40px] flex justify-between text-white">
          <Link
            href={"/"}
            className="flex lg:gap-[0.41666666666vw] overflow-hidden headerLink"
          >
            <span>The Growth Accelerator</span>
          </Link>
          <nav>
            <ul className="flex lg:gap-[0.41666666666vw] overflow-hidden">
              {navLinks.map((navLink, index) => (
                <li
                  key={index}
                  className="link-active relative overflow-hidden after:bg-white after:w-full after:h-[1px] after:absolute after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-[1] after:transition-transform after:duration-[600ms] after:ease-[cubic-bezier(0.85,0,0.15,1)] after:origin-top-left"
                >
                  <Link href={"/"}>{navLink.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="contactLink overflow-hidden">
            <Link
              href={"/"}
              className="inline-flex lg:gap-[0.41666666666vw] items-center group relative overflow-hidden after:bg-white after:w-full after:h-[1px] after:absolute after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-[1] after:transition-transform after:duration-[600ms] after:ease-[cubic-bezier(0.85,0,0.15,1)] after:origin-top-left"
            >
              <span className="absolute transform group-hover:translate-x-0 group-hover:translate-y-0 translate-x-[-125%] translate-y-[50%] group-hover:opacity-[1] opacity-[0] transition-all duration-[700ms] ease-[cubic-bezier(0.52,0,0,1)]">
                ↗
              </span>
              <span className="normal-case group-hover:translate-x-[1.171875vw] transition-all duration-[700ms] ease-[cubic-bezier(0.52,0,0,1)]">
                Let&apos;s talk
              </span>
              <span className="transform group-hover:translate-x-[125%] group-hover:translate-y-[-50%] group-hover:opacity-0 opacity-[1] transition-all duration-[700ms] ease-[cubic-bezier(0.52,0,0,1)]">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
