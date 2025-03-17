"use client";
import LinkBtn from "@/component/common/buttons/LinkBtn";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import useAos from "@/hooks/useAos";
import useResponsivness from "@/hooks/useResponsivness";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoArrowDownOutline } from "react-icons/io5";
import DropDown from "./dropdown/DropDown";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "services",
    dropDown: true,
  },
  // {
  //   title: "Expertise",
  //   link: "#",
  // },

  {
    title: "Case Studies",
    link: "/showcase",
  },

  // {
  //   title: "Blogs",
  //   link: "#",
  // },
  // {
  //   title: "Careers",
  //   link: "#",
  // },
  {
    title: "contact",
    link: "/#contact",
  },
];
const Header = () => {
  const { isDesktop, isTablet, isMobile } = useResponsivness();
  const sideBarRef = useRef();
  const header = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerDropDown = useRef();
  const dropDownChevron = useRef();
  useAos();
  useGSAP(() => {
    gsap.from(".headerLink span", {
      duration: 0.7,
      ease: "power1.out",
      y: -150,
      opacity: 0,
    });
  }, []);
  useGSAP(() => {
    if (isDesktop) {
      gsap.from("nav ul li", {
        duration: 1.5,
        ease: "power4.out",
        y: -40,
        opacity: 0,
        stagger: 0.03,
      });
      setTimeout(() => {
        gsap.killTweensOf("nav ul li");
        gsap.set("nav ul li", { clearProps: "all" });
      }, 800);
      gsap.from(".contactLink a", {
        duration: 2,
        ease: "power4.out",
        y: -40,
        opacity: 0,
      });
    }
  }, [isDesktop]);

  const tl = useRef();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useGSAP(
    () => {
      if (isTablet || isMobile) {
        gsap.set("nav ul li .item", { y: 75 });
        gsap.set(".header_SocialLinks .wrapper a", { y: 75 });

        tl.current = gsap
          .timeline({ paused: true })

          .to(".sideBar", {
            duration: 1.25,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut",
          })
          .to("nav ul li .item", {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
          })
          .to(".header_SocialLinks .wrapper a", {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
          });
      }
    },
    { scope: header, dependencies: [isTablet, isMobile] }
  );

  useEffect(() => {
    if (isTablet || isMobile) {
      if (isMenuOpen) {
        tl.current.play();
        document.querySelector("body").classList.add("active");
      } else {
        tl.current.reverse();
        document.querySelector("body").classList.remove("active");
      }
    }
  }, [isMenuOpen, isTablet, isMobile]);
  const handleDropDown = () => {
    if (!isDesktop) {
      const headerDropDownEl = headerDropDown.current;
      const wrapperElHeight =
        headerDropDownEl.querySelector(".wrapper").offsetHeight;
      if (headerDropDownEl.classList.contains("active")) {
        headerDropDownEl.style.maxHeight = `0`;
        headerDropDownEl.style.opacity = `0`;
        dropDownChevron.current.style.transform = "scaleY(1)";
        headerDropDownEl.classList.remove("active");
      } else {
        headerDropDownEl.style.maxHeight = `${wrapperElHeight}px`;
        headerDropDownEl.style.opacity = `1`;
        dropDownChevron.current.style.transform = "scaleY(-1)";
        headerDropDownEl.classList.add("active");
      }
    }
  };

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: true, // Ensure touchpad support
      gestureOrientation: "both", // Supports both vertical & horizontal gestures
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <header
      ref={header}
      className="fixed bg-[#111] w-full top-0 left-0 z-10 text-white capitalize tracking-[-.14px]"
    >
      <div className="lg:h-[4.539vw] lg:py-[0.73206442166vw] lg:pb-[1.40625vw] py-[3.63636363636vw] flex flex-col justify-end">
        <div className="lg:px-[40px] px-[2.79069767442vw] flex lg:items-end items-center justify-between text-white">
          <Link
            href={"/"}
            className="flex lg:gap-[0.41666666666vw] overflow-hidden headerLink lg:text20 mtext14 relative z-[2]"
          >
            <span>Accelerate-AI</span>
          </Link>
          <nav
            ref={sideBarRef}
            style={{
              clipPath: isDesktop
                ? "none"
                : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            }}
            className="sideBar px-[2.79069767442vw] lg:px-[unset] pt-[24.2424242424vw] pb-[2.79069767442vw] lg:pb-[unset] lg:pt-[2vw] flex lg:flex-row flex-col justify-between gap-[10.4651162791vw] lg:gap-[unset] lg:justify-normal absolute inset-0 w-full fullVhcm
fullSvhcm lg:static lg:!size-[unset] bg-[#101010] lg:bg-transparent"
          >
            <Link
              onClick={toggleMenu}
              href={"/#contact"}
              className="lg:hidden grow-[1] inline-flex lg:text20 mtext18 lg:gap-[0.41666666666vw] gap-[5px] items-end relative"
            >
              <span className="normal-case group-hover:translate-x-[1.171875vw]">
                Let&apos;s talk
              </span>
              <span>↗</span>
            </Link>
            <ul className="flex lg:flex-row grow-[1] flex-col lg:gap-[0.81666666666vw] overflow-hidden overflow-y-auto lg:overflow-hidden">
              {navLinks.map((navLink, index) => (
                <li
                  onClick={
                    isDesktop
                      ? undefined
                      : navLink.dropDown
                      ? handleDropDown
                      : toggleMenu
                  }
                  style={{
                    clipPath: isDesktop
                      ? "none"
                      : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                  key={index}
                  className={`lg:text20 text-[7.51072961373vh] leading-[7.51072961373vh]`}
                >
                  {navLink.dropDown ? (
                    <div
                      className={`item
                        ${
                          navLink.dropDown ? "group/dropDown" : ""
                        }  cursor-pointer flex flex-col`}
                    >
                      <div className="flex items-center lg:gap-x-[0.55555555555vw] after:hidden lg:after:block afterLineHover relative z-[2]">
                        {navLink.title}
                        <IoArrowDownOutline
                          ref={dropDownChevron}
                          className="group-hover/dropDown:lg:scale-y-[-1]"
                        />
                      </div>
                      <DropDown
                        headerDropDown={headerDropDown}
                        toggleMenu={toggleMenu}
                      />
                    </div>
                  ) : (
                    <Link
                      href={`${navLink.link}`}
                      className="block after:hidden lg:after:block afterLineHover relative z-[2] item"
                    >
                      {navLink.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col justify-end mtext18 leading-[27px] lg:hidden grow-[1] header_SocialLinks">
              <div
                className="wrapper"
                style={{
                  clipPath: isDesktop
                    ? "none"
                    : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              >
                <Link
                  href={"https://www.instagram.com/"}
                  target="__blank"
                  className="block"
                >
                  Instagram
                </Link>
              </div>
              <div
                className="wrapper"
                style={{
                  clipPath: isDesktop
                    ? "none"
                    : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              >
                <Link
                  href={"https://www.linkedin.com/"}
                  target="__blank"
                  className="block"
                >
                  linkedin
                </Link>
              </div>
            </div>
          </nav>
          <div className="contactLink overflow-hidden hidden lg:block">
            <Link
              href={"/#contact"}
              className="inline-flex lg:text20 lg:gap-[0.41666666666vw] items-center group relative overflow-hidden after:bg-white after:w-full after:h-[1px] after:absolute after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-[1] after:transition-transform after:duration-[600ms] after:ease-[cubic-bezier(0.85,0,0.15,1)] after:origin-top-left"
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
          <button
            onClick={toggleMenu}
            className="relative z-[2] h-[50px] overflow-hidden flex items-end justify-center lg:hidden mtext18 bg-[#ffffff21] px-[20px] py-[12px] capitalize"
          >
            <div
              className={`${
                isMenuOpen
                  ? "sm:translate-y-[58%] translate-y-[60%]"
                  : "translate-y-0"
              } flex flex-col gap-y-[10px] transition-all duration-1000`}
            >
              <span
                className={`${
                  isMenuOpen ? "opacity-[1]" : "opacity-0"
                } transition-all duration-1000`}
              >
                close
              </span>
              <span
                className={`${
                  isMenuOpen ? "opacity-0" : "opacity-1"
                } transition-all duration-1000`}
              >
                menu
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
