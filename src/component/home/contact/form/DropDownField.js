import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const DropDownField = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");

  const options = [
    "AI-Powered Conversational Assistants",
    "Intelligent Voice AI Solutions",
    "Business Process Automation & Orchestration",
    "Advanced Data Intelligence & Automation",
    "Scalable & AI-Integrated Web Solutions",
    "E-commerce Automation & Secure Payment Systems",
  ];

  return (
    <div className="w-full">
      <span className="text20">What can we help with?</span>
      <div className="relative mt20">
        {/* Dropdown Button */}
        <button
          type="button"
          className={`${
            isOpen ? "border-white" : "border-[#FFFFFF33]"
          } border-b w-full text22 flex justify-between items-center pb-[0.625vw]`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected}
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown List */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-[2] w-full mt-2 border bg-white text-black border-white rounded-lg shadow-lg overflow-hidden"
          >
            {options.map((option) => (
              <li
                key={option}
                className="px-4 py-2 text22 cursor-pointer transition hover:bg-black hover:text-white hover:shadow-white/50"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default DropDownField;
