import React from "react";
import { section4cardtype } from "../../constants/section4cardtypes";

const Section4Card: React.FC<section4cardtype> = ({
  mainImage,
  heading,
  title,
  borderColor,
}) => {
  return (
    <div
      className={`relative group bg-white rounded-[1.2rem] shadow-2xl sm:w-[25rem] md:w-[42.3rem] lg:w-[27rem] xl:w-[32rem] 2xl:w-[31rem] p-6 h-[270px]`}
      style={{
        borderLeftColor: borderColor,
        borderBottomColor: borderColor,
        borderLeftWidth: "4px",
        borderBottomWidth: "4px",
      }}
    >
      {/* Top-right circular logo */}
      <div
        className="absolute md:right-[-1rem] right-0 top-[-1rem] flex justify-center items-center w-[80px] h-[80px] rounded-full cursor-pointer"
        style={{ backgroundColor: borderColor }} // Dynamic background color for the logo
      >
        <img src={mainImage} alt="Icon" className="w-10 h-10" />
      </div>
      {/* Content Section */}
      <div className="flex flex-col w-full h-full gap-4 overflow-hidden">
        {/* Heading */}
        <h1 className="text-2xl font-bold Bostonfont text-black line-clamp-2 mb-2 pr-[3rem]">
          {heading}
        </h1>
        {/* Description */}
        <p className="overflow-hidden text-base font-normal text-black Bostonfont line-clamp-5">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Section4Card;
