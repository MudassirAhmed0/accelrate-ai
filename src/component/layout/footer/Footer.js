import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111] py-[14px] lg:py-[2.5vw] text20 text-white">
      <div className="myContainer">
        <div className="xl:flex flex-wrap items-center justify-between">
          <p className="w-[22%]">
            We like automating things, but never relationships. Let’s build
            something smart, together
          </p>
          <div className="mb-6 lg:mb-0 xl:mb-0">
            <ul className="xl:flex lg:flex md:flex sm:flex gap-[30px]">
              <li className="hover:text-gray-500 mb-4 sm:mb-0">
                <a href="/">Terms of service</a>
              </li>
              <li className="hover:text-gray-500 mb-4 sm:mb-0">
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0">
            <div className="flex justify-start sm:justify-start xl:justify-end space-x-6">
              <div>
                <a href="/">
                  <svg
                    aria-label="Twitter"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
              </div>
              <div>
                <a href="/">
                  <svg
                    aria-label="Instagram"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
              <div>
                <a href="/">
                  <svg
                    aria-label="Dribble"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-dribbble"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={12} r={9} />
                    <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
                    <path d="M6.4 19c3.5-3.5 6-6.5 14.5-6.4" />
                    <path d="M3.1 10.75c5 0 9.814-.38 15.314-5" />
                  </svg>
                </a>
              </div>
              <div>
                <a href="/">
                  <svg
                    aria-label="Github"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
