import { useState } from "react";

const RadioField = () => {
  const [selected, setSelected] = useState("");

  const options = [
    "Email",
    "LinkedIn",
    "Referral",
    "Instagram",
    "Carrier Pigeon",
  ];

  return (
    <div className="flex flex-col">
      {/* Label */}
      <label className="text-white text20 mb-2">
        How would you like to hear from us?
      </label>

      {/* Radio Buttons */}
      <div className="flex flex-wrap gap-3 mt20">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 cursor-pointer text-white text22"
          >
            {/* Custom Radio Button */}
            <div className="relative size-4 flex items-center justify-center border border-white rounded-full transition-all duration-300">
              <input
                type="radio"
                name="contact"
                value={option}
                checked={selected === option}
                onChange={() => setSelected(option)}
                className="absolute w-full h-full opacity-0 cursor-pointer"
              />
              {selected === option && (
                <div className="size-2 bg-white rounded-full"></div>
              )}
            </div>
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioField;
