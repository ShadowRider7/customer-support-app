import React from "react";
import design1 from "../../assets/vector1.png";

const State = ({ status }) => {
  return (
    <div>
      <img
        src={design1}
        className="absolute -top-5 -left-5 w-full sm:w-80 pointer-events-none"
        alt=""
      />
      <div className="relative flex flex-col items-center">
        <h2 className="text-white text-xl font-normal tracking-wide">
          {status}
        </h2>
        <p className="text-white text-[72px] font-bold leading-none mt-2">0</p>
      </div>
      <img
        src={design1}
        className="absolute -bottom-5 -right-5 w-full sm:w-80 pointer-events-none -scale-x-100 "
        alt=""
      />
    </div>
  );
};

export default State;
