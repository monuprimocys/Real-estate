/* eslint-disable no-irregular-whitespace */
import React, { useState, useEffect } from "react";
import bgimage1 from "../../../assets/Image/real-estate-hero-bg.png";
import bgimage2 from "../../../assets/Image/1.png";
import bgimage3 from "../../../assets/Image/2.png";
import SimpleBtn from "../../../componets/Buttons/SimpleBtn";
import Header from "../../Header/Header";
import AdvanceSerach from "../../../componets/AdvanceSerach/AdvanceSerach";

// Array of slider contents
const sliderContent = [
  {
    url: bgimage1,
    heading: "Discover your place to live ",
    text: "We have made quality development a hallmark by incorporating the latest in contemporary architecture to suit your tastes and budget.",
  },
  {
    url: bgimage2,
    heading: "Start your journey to a new home.",
    text: "Our hallmark is excellence, combining contemporary design with affordability to meet your unique tastes.",
  },
  {
    url: bgimage3,
    heading: "Experience life where it feels right.",
    text: "We pride ourselves on delivering high-quality projects with the latest architectural trends, designed to suit both your style and pocket.",
  },
];

const Section1: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slider effect using useEffect to change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative w-full min-h-screen overflow-x-hidden transition-all duration-100 ease-in bg-white md:bg-right bg-no-repeat bg-cover 2xl:bg-bottom pb-4  `}
      style={{
        backgroundImage: `url(${sliderContent[currentSlide].url})`,
        zIndex: 0,
      }}
    >
      <div className="">
        <Header />
      </div>

      {/* Content search box */}
      <div className="w-full ">
        <AdvanceSerach />
      </div>

      {/* Text content */}
      <div className="xl:w-[38%] relative xl:left-[9.5%] w-[90%] mx-auto xl:mx-0 h-auto text-white mt-8 md:mt-10 flex flex-col gap-y-8  ">
        {/* Heading */}
        <div>
          <h1 className="md:text-8xl lg:text-9xl xl:text-7xl 2xl:text-8xl  Bostonfont font-[600] text-5xl line-clamp-2">
            {sliderContent[currentSlide].heading}
          </h1>
        </div>

        {/* Paragraph */}
        <div>
          <p className="md:text-2xl xl:text-2xl lg:text-3xl Bostonfont font-[500] text-lg">
            {sliderContent[currentSlide].text}
          </p>
        </div>

        {/* Button */}
        <SimpleBtn />
      </div>
    </div>
  );
};

export default Section1;
