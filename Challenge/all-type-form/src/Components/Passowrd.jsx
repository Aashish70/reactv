import React, { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

function Passowrd() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full h-screen bg-gray-600 flex justify-center items-center">
      <div className="relative w-80">
        {/* Input Field */}
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 pr-10 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 rounded"
          placeholder="Enter your password"
        ></input>

        {/* Clickable Icon */}
        <span 
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
        >
          {showPassword ? (
            <IoEyeSharp size={22} />
          ) : (
            <IoEyeOffSharp size={22} />
          )}
        </span>
      </div>
    </div>
  );
}

export default Passowrd;
