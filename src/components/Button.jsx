import React from "react";

const Button = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 h-12 rounded-xl  text-lg font-medium text-white shadow-lg
                 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600
                 hover:opacity-90 hover:scale-105 transition-transform duration-200"
    >
      {label}
    </button>
  );
};

export default Button;
