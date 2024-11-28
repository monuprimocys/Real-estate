import React from "react";
import { section6cardtype } from "../../constants/section6cardtype";

interface Section6CardProps {
  cardData: section6cardtype;
}

const Section6Card: React.FC<Section6CardProps> = ({ cardData }) => {
  return (
    <div
      className="h-[20rem] w-[21.5rem] md:w-[20.3rem] lg:w-[26rem] lg:h-[26rem] xl:w-[20rem] xl:h-[20rem] overflow-hidden cursor-pointer relative "
      style={{
        borderRadius: "25px",
      }}
    >
      {/* Background image container with hover effect */}
      <div
        className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-110"
        style={{
          backgroundImage: `url(${cardData.mainImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "25px",
          position: "relative",
        }}
      ></div>

      {/* Content section remains unaffected by hover */}
      <div className="relative z-10 flex flex-col flex-wrap p-4 lg:mt-[-25rem] mt-[-18rem] xl:mt-[-18rem]">
        <h3
          className="text-lg fontpoppins font-[500]"
          style={{ color: cardData.colorheadingandtitle }}
        >
          {cardData.heading}
        </h3>
        <h2
          className="text-xl fontpoppins font-[700]"
          style={{ color: cardData.colorheadingandtitle }}
        >
          {cardData.title}
        </h2>
      </div>

      {/* Icon positioned at the bottom left */}
      <div className="h-[4.2rem] w-[4.2rem] rounded-full bg-white flex justify-center items-center absolute bottom-[-0.4rem] left-[-0.4rem]">
        <div className="h-[3.2rem] w-[3.2rem] rounded-full bg-[#056CB2] flex justify-center items-center p-2">
          <img src={cardData.icon} alt={cardData.title} className="" />
        </div>
      </div>
    </div>
  );
};

export default Section6Card;
