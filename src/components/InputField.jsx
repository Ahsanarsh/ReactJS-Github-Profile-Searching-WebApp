import React from "react";

const InputField = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-80 h-12 px-2.5 text-lg rounded-xl bg-white/90 text-gray-800 
                 placeholder-gray-500 shadow-md 
                 focus:outline-none focus:ring-4 focus:ring-purple-300 
                 transition"
    />
  );
};

export default InputField;
