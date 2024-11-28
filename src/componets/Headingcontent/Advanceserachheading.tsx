




import React from "react";
import { HeadingcontentProps } from "../../constants/HeadingcontentProps";

const Advanceserachheading: React.FC<HeadingcontentProps> = ({
  title,
  highlightedTitle,
}) => {
  return (
    <div className="flex items-center justify-between px-4 ">
      {/* Left side dots and line */}
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-2 ">
          <div className="hidden w-2 h-2 overflow-hidden bg-black rounded-full md:h-3 md:w-3 xl:h-2 xl:w-2 opacity-40 md:block"></div>
          <div className="hidden w-2 h-2 overflow-hidden bg-black rounded-full md:h-3 md:w-3 xl:h-2 xl:w-2 opacity-40 md:block"></div>
          <div className="hidden w-2 h-2 overflow-hidden bg-black rounded-full md:h-3 md:w-3 xl:h-2 xl:w-2 opacity-40 md:block"></div>
        </div>
        <div className="hidden w-8 h-1 bg-black rounded-full md:block xl:w-20 xl:h-1 opacity-40"></div>
      </div>

      {/* Center content */}
      <div className="flex justify-center flex-grow px-1">
        <h1 className="text-2xl font-extrabold tracking-wide text-center md:text-3xl Bostonfont ">
          {title}{" "}
          <span className=" text-[#B5843F] md:text-3xl   Bostonfont font-extrabold  tracking-wide">
            {highlightedTitle}
          </span>
        </h1>
      </div>

      {/* Right side dots and line */}
      <div className="flex items-center gap-4 mt-2 xl:ml-2">
        <div className="hidden w-8 h-1 bg-black rounded-full md:block xl:w-20 xl:h-1 opacity-40"></div>
        <div className="flex items-center gap-2">
          <div className="hidden w-2 h-2 overflow-hidden bg-black rounded-full md:h-3 md:w-3 xl:h-2 xl:w-2 opacity-40 md:block"></div>
          <div className="hidden w-2 h-2 overflow-hidden bg-black rounded-full md:h-3 md:w-3 xl:h-2 xl:w-2 opacity-40 md:block"></div>
          <div className="hidden w-2 h-2 overflow-hidden bg-black rounded-full md:h-3 md:w-3 xl:h-2 xl:w-2 opacity-40 md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Advanceserachheading;
