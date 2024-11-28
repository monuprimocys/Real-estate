/* eslint-disable no-irregular-whitespace */
import React, { useState, useEffect } from "react";
import bgimage1 from "../../../assets/Image/real-estate-hero-bg.png";
import bgimage2 from "../../../assets/Image/1.png";
import bgimage3 from "../../../assets/Image/2.png";
import searchicon from "../../../assets/Image/search-icon.png";
import dropdown from "../../../assets/Image/dropdwon-icon.png";
import iconbottmeright from "../../../assets/Image/homesection1logobottome.png";
import SimpleBtn from "../../../componets/Buttons/SimpleBtn";
import Header from "../../Header/Header";
import RangeSlider from "./rangeinputbox";
import Advanceserachbtn from "../../../componets/Buttons/Advanceserachbtn";
import Headingcontent from "../../../componets/Headingcontent/Headingcontent";
import AdvanceSearchiconminus from "../../../assets/Image/add.png";
import AdvanceSearchiconplus from "../../../assets/Image/add1.png";

import Advanceserachheading from "../../../componets/Headingcontent/Advanceserachheading";

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
  const [active, setActive] = useState("buy");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  // Auto-slider effect using useEffect to change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Toggle Advanced Search visibility
  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch((prev) => !prev);
  };

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
      <div
        className={`w-[90%] 2xl:w-[80%] xl:w-[80%] mx-auto bg-[#FFFFFF] rounded-lg flex flex-col items-center relative px-8  mt-10    ${
          showAdvancedSearch ? "pb-4 " : "pb-1"
        }`}
      >
        {/* Top buttons */}
        <div className="absolute top-[-1.5rem] md:left-8 2xl:w-[18%] h-[2.8rem] bg-[#FFFFFF] rounded-3xl flex justify-between items-center  ">
          <button
            type="button"
            className={`px-10 h-full transition-colors duration-300 rounded-3xl fontpoppins font-[500] ${
              active === "buy"
                ? "bg-[#B5843F] text-white"
                : "bg-white text-[#000000] opacity-65"
            }`}
            onClick={() => setActive("buy")}
          >
            Buy
          </button>
          <button
            type="button"
            className={`px-10 h-full transition-colors duration-300 rounded-3xl fontpoppins font-[500] ${
              active === "rent"
                ? "bg-[#B5843F] text-white"
                : "bg-white text-[#000000] opacity-65"
            }`}
            onClick={() => setActive("rent")}
          >
            Rent
          </button>
        </div>

        {/* Input fields */}

        <div
          className={`grid items-center  gap-4 pt-10 pb-12 mx-auto md:mt-4 md:py-16 xl:justify-between xl:flex md:grid-rows-2 md:grid-cols-2    ${
            showAdvancedSearch ? "xl:w-[103%] w-full " : " w-full"
          }`}
        >
          {["location", "bedroom", "bathroom", "propertyType"].map(
            (field, index) => (
              <div key={index} className="xl:w-[22%] 2xl:w-[23.2%]  ">
                <label
                  htmlFor={field}
                  className="block mb-2 text-sm font-semibold text-black capitalize Bostonfont"
                >
                  {field}
                </label>
                <div className="relative">
                  <select
                    id={field}
                    className="w-full px-4 py-3 pr-10 text-gray-700 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-[#B5843F] cursor-pointer"
                  >
                    <option value="">{`Select ${field}`}</option>
                    {field === "location" && (
                      <>
                        <option value="new-york">New York</option>
                        <option value="los-angeles">Los Angeles</option>
                        <option value="chicago">Chicago</option>
                      </>
                    )}
                    {field === "bedroom" && (
                      <>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                      </>
                    )}
                    {field === "bathroom" && (
                      <>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                      </>
                    )}
                    {field === "propertyType" && (
                      <>
                        <option value="business-unit">Business Unit</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                      </>
                    )}
                  </select>
                  <span className="absolute transform -translate-y-1/2 right-4 top-1/2">
                    <img
                      src={dropdown}
                      alt="Dropdown Icon"
                      className="w-4 h-4"
                    />
                  </span>
                </div>
              </div>
            )
          )}
          <div
            className={`flex items-center justify-center  ${
              showAdvancedSearch
                ? "w-0 h-0 opacity-0"
                : "w-[43px] h-[43px] opacity-100"
            } bg-[#B5843F] rounded-lg mt-7 cursor-pointer`}
          >
            <div className="h-[20px] w-[20px] flex justify-center items-center">
              <img src={searchicon} alt="Search" />
            </div>
          </div>
        </div>
        <div
          className={`flex items-center justify-center  w-[100%] mx-auto  mt-[-2rem]  ${
            showAdvancedSearch ? "opacity-100  " : "opacity-0 h-[0.2rem] "
          } `}
        >
          <Advanceserachheading title="Advance " highlightedTitle="Search" />
        </div>
        {/* Smoothly revealed advanced search fields */}
        <div
          className={`w-full transition-all duration-500 ease-in-out overflow-hidden     ${
            showAdvancedSearch
              ? "xl:max-h-[500px] opacity-100 overflow-hidden xl:w-[100%] 2xl:w-[101%] mx-auto w-full"
              : "max-h-0 opacity-0 transition-all overflow-hidden  w-full"
          }`}
          style={{ zIndex: 10 }} // Ensuring it is above background
        >
          <div className="grid w-full md:gap-x-[1rem] xl:gap-x-[1.5rem]  2xl:gap-x-[1.5rem] gap-y-[1rem]  md:gap-y-[2rem] pt-5 mx-auto xl:grid-cols-4 xl:grid-rows-1 md:grid-rows-auto md:grid-cols-2">
            {/* Keyword as input field */}
            <div className="w-full ">
              <label
                htmlFor="Keyword"
                className="block mb-2 text-sm font-semibold  capitalize Bostonfont text-[#000000]"
              >
                Keyword
              </label>
              <input
                type="text"
                id="Keyword"
                className="md:w-full w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                placeholder="Enter keyword"
              />
            </div>

            {/* Garages dropdown */}
            <div className="xl:w-full">
              <label
                htmlFor="Garages"
                className="block mb-2 text-sm font-semibold text-black capitalize Bostonfont"
              >
                Garages
              </label>
              <div className="relative Bostonfont">
                <select
                  id="Garages"
                  className="md:w-full w-full px-4 py-3 pr-10 text-gray-700 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-[#B5843F] Bostonfont cursor-pointer"
                >
                  <option value="">Select Garages</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
                <span className="absolute transform -translate-y-1/2 right-4 top-1/2">
                  <img src={dropdown} alt="Dropdown Icon" className="w-4 h-4" />
                </span>
              </div>
            </div>
            {/*Agency dropdown */}
            <div className="xl:w-full">
              <label
                htmlFor="Garages"
                className="block mb-2 text-sm font-[600] capitalize Bostonfont text-[#000000]"
              >
                Agency
              </label>
              <div className="relative Bostonfont">
                <select
                  id="Garages"
                  className="md:w-full w-full px-4 py-3 pr-10 text-gray-700 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-[#B5843F] Bostonfont cursor-pointer"
                >
                  <option value="">Select Garages</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
                <span className="absolute transform -translate-y-1/2 right-4 top-1/2">
                  <img src={dropdown} alt="Dropdown Icon" className="w-4 h-4" />
                </span>
              </div>
            </div>
            {/* Agent dropdown */}
            <div className="xl:w-full">
              <label
                htmlFor="Garages"
                className="block mb-2 text-sm font-[600] capitalize Bostonfont text-[#000000]"
              >
                Agent
              </label>
              <div className="relative Bostonfont">
                <select
                  id="Garages"
                  className="md:w-full w-full px-4 py-3 pr-10 text-gray-700 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-[#B5843F] Bostonfont cursor-pointer"
                >
                  <option value="">Select Garages</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
                <span className="absolute transform -translate-y-1/2 right-4 top-1/2">
                  <img src={dropdown} alt="Dropdown Icon" className="w-4 h-4" />
                </span>
              </div>
            </div>
            {/*  Min Area m2 dropdown */}
            <div className="w-full ">
              <label
                htmlFor="Keyword"
                className="block mb-2 text-sm font-semibold  capitalize Bostonfont text-[#000000]"
              >
                Min Area m2
              </label>
              <input
                type="text"
                id="Keyword"
                className="md:w-full w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                placeholder="Min Area m2"
              />
            </div>

            {/*  Max Area m2 dropdown */}
            <div className="w-full ">
              <label
                htmlFor="Keyword"
                className="block mb-2 text-sm font-semibold  capitalize Bostonfont text-[#000000]"
              >
                Max Area m2
              </label>
              <input
                type="text"
                id="Keyword"
                className="md:w-full w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                placeholder="Max Area m2"
              />
            </div>
            {/*  Min Lot Size m2 dropdown */}
            <div className="w-full ">
              <label
                htmlFor="Keyword"
                className="block mb-2 text-sm font-semibold  capitalize Bostonfont text-[#000000]"
              >
                Min Lot Size m2
              </label>
              <input
                type="text"
                id="Keyword"
                className="md:w-full w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                placeholder="Min Lot Size m2"
              />
            </div>
            {/*  Max Lot Size m2 dropdown */}
            <div className="w-full ">
              <label
                htmlFor="Keyword"
                className="block mb-2 text-sm font-semibold  capitalize Bostonfont text-[#000000]"
              >
                Max Lot Size m2
              </label>
              <input
                type="text"
                id="Keyword"
                className="md:w-full w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                placeholder="Max Lot Size m2"
              />
            </div>
            {/*Property ID dropdown */}
            <div className="w-full ">
              <label
                htmlFor="Keyword"
                className="block mb-2 text-sm font-semibold  capitalize Bostonfont text-[#000000]"
              >
                Property ID
              </label>
              <input
                type="text"
                id="Keyword"
                className="md:w-full w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                placeholder="Property ID"
              />
            </div>
            {/* Garages dropdown */}
            <div className="xl:w-full">
              <label
                htmlFor="Garages"
                className="block mb-2 text-sm font-[600] capitalize Bostonfont text-[#000000]"
              >
                Garages
              </label>
              <div className="relative Bostonfont">
                <select
                  id="Garages"
                  className="md:w-full w-full px-4 py-3 pr-10 text-gray-700 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-[#B5843F] Bostonfont cursor-pointer"
                >
                  <option value="">Select Garages</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
                <span className="absolute transform -translate-y-1/2 right-4 top-1/2">
                  <img src={dropdown} alt="Dropdown Icon" className="w-4 h-4" />
                </span>
              </div>
            </div>
            {/* Price field with 50% width */}
            <div className="w-full ">
              <label
                htmlFor="Price"
                className="block mb-2 text-sm font-[600] capitalize Bostonfont text-[#000000]"
              >
                Price
              </label>
              <div className="relative w-full Bostonfont">
                <div className="items-center w-full text-gray-700 rounded-lg">
                  <RangeSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`relative flex flex-col items-center justify-center w-full  mt-3 ${
            showAdvancedSearch ? "" : "h-[1rem] md:mt-[1rem] mt-[1.8rem]"
          }`}
        >
          <div
            className={`flex items-center justify-center   ${
              showAdvancedSearch ? "opacity-100 mt-9 " : "  opacity-0"
            } `}
          >
            <Advanceserachbtn />
          </div>
          <div
            className={`relative flex items-center justify-center px-7 py-4 text-lg text-white bg-black cursor-pointer rounded-2xl fontpoppins blur-none ${
              showAdvancedSearch
                ? "opacity-100 bottom-[-2.5rem]"
                : "md:bottom-8 bottom-10 "
            }`}
            onClick={toggleAdvancedSearch}
          >
            <div className="flex items-center justify-between">
              <div>Advance Search</div>
              <div className="flex items-center justify-center ">
                <img
                  src={
                    showAdvancedSearch
                      ? AdvanceSearchiconminus
                      : AdvanceSearchiconplus
                  }
                  alt="Toggle advanced search"
                  className="w-[2rem] h-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
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
