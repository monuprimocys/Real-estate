import React from "react";
import { CardProps } from "../../../constants/Cardvaluesdatatype";

const PropertiesHomeScreenCard: React.FC<CardProps> = ({
  mainImage,
  heartIcon,
  heading,
  title,
  location,
  locationIcon,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  beds,
  baths,
  area,
  price,
  status
 
}) => {
  return (
    <div className="overflow-hidden bg-white rounded-[1.2rem] shadow-xl w-[21.8rem]  lg:w-[27rem] xl:w-[30rem] 2xl:w-[23rem] group cursor-pointer">
      {/* Top Image Section */}
      <div className="relative">
        <div className="overflow-hidden">
          <img
            className="object-cover w-full transition-transform duration-500 ease-in-out transform h-52 sm:h-60 group-hover:scale-110 bg-slate-400 "
            src={mainImage}
            alt={title}
          />
        </div>
        {/* Sell  and rent Tag  */}
        <span className="absolute top-3 left-0 px-6 py-1 text-xs font-bold text-white bg-[#056CB2] rounded-r-md Bostonfont cursor-pointer">
          {status}
        </span>
        {/* Heart Icon */}
        <div className="absolute flex items-center justify-center w-10 h-10 transition-opacity bg-white rounded-full cursor-pointer hover:bg-[#056CB2] top-3 right-4 opacity-90 hover:opacity-100 ">
          <img
            src={heartIcon}
            alt="Save"
            className="w-6 h-6 transition-transform duration-500 ease-in-out transform hover:brightness-0 hover:invert "
          />
        </div>
        {/* Price Display */}
        <div className="absolute h-[3rem] w-[6rem] bg-[#FFFFFF] right-1 bottom-[-1.2rem] rounded-3xl flex justify-center items-center">
          <p className="font-[900] text-[#B5843F] Bostonfont text-lg">
            ${price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-4 space-y-3">
        {/* Title */}
        <h2 className="text-lg font-[800] text-[#000000] Bostonfont line-clamp-1">
          {heading}
        </h2>

        {/* Location */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 hover:bg-[#056CB2]">
            <img
              src={locationIcon}
              alt="Location"
              className="w-4 h-4 transition-transform duration-500 ease-in-out transform hover:brightness-0 hover:invert"
            />
          </div>
          <p className="text-sm text-[#000000] Bostonfont font-normal line-clamp-1 cursor-pointer">
            {location}
          </p>
        </div>

        {/* Property Details */}
        <div className="flex flex-wrap items-center justify-between mt-2 space-y-2 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-[#000000] ">
            <span className="flex items-center cursor-pointer">
              <img src={icon1} alt="Beds" className="w-5 h-6 mr-1" />
              {beds} Beds
            </span>
            <span className="flex items-center cursor-pointer">
              <img src={icon2} alt="Baths" className="w-5 h-6 mr-1" />
              {baths} Baths
            </span>
            <span className="flex items-center cursor-pointer">
              <img src={icon3} alt="Area" className="w-5 h-6 mr-1" />
              {area} sqft
            </span>
          </div>

          <div className="flex items-end justify-end w-full pt-3 space-x-3">
            <button className="flex items-center px-3 py-1 text-sm text-white bg-[#B5843F] Bostonfont rounded-md space-x-1 hover:bg-[#9c6e34] transition-colors cursor-pointer">
              <img src={icon4} alt="Message" className="w-4 h-4" />
              <span>Message</span>
            </button>
            <button className="flex items-center px-3 py-1 text-sm text-[#056CB2] border Bostonfont border-[#056CB2] rounded-md space-x-1 hover:bg-[#bacad4] transition-colors cursor-pointer">
              <img src={icon5} alt="Call" className="w-4 h-4" />
              <span>Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesHomeScreenCard;
