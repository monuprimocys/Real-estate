import Card from "../../../componets/Cards/Section3Card"; // Corrected the path if necessary
import heartIcon from "../../../assets/Image/heart.png";
import locationIcon from "../../../assets/Image/location.png"; // Update to the correct path for location icon
import cardicon1 from "../../../assets/Image/cardicon1.png"; // Beds icon
import cardicon2 from "../../../assets/Image/cardicon2.png"; // Baths icon
import cardicon3 from "../../../assets/Image/cardicon3.png"; // Area icon
import msgIcon from "../../../assets/Image/message-text.png"; // Message icon
import callicon from "../../../assets/Image/call.png"; // Call icon
import mainimage from "../../../assets/Image/section3caed1.png";
import mainimage1 from "../../../assets/Image/section3bgimage2.png";
import mainimage2 from "../../../assets/Image/section3bgimage3.png";
import mainimage3 from "../../../assets/Image/section3bgimage4.png";
import mainimage4 from "../../../assets/Image/section3bgimage5.png";
import mainimage5 from "../../../assets/Image/section3bgimage6.png";

import bglineimage from "../../../assets/Image/section3bgimage-line.png";
import { useState } from "react";
import Headingcontent from "../../../componets/Headingcontent/Headingcontent";

interface CardData {
  mainImage: string;
  heartIcon: string;
  heading: string;
  location: string;
  locationIcon: string;
  icon1: string; 
  icon2: string; 
  icon3: string; 
  icon4: string; 
  icon5: string; 
  beds: number;
  baths: number;
  area: number;
  price: number;
}

// Sample data array
const cardData: CardData[] = [
  {
    mainImage: mainimage,
    heartIcon: heartIcon,
    heading:
      "Luxurious villa with modern design Luxurious villa with modern designLuxurious villa with modern designLuxurious villa with modern design",
    location: "15 Greenfield Lane, Chester, CH1 2LD",
    locationIcon: locationIcon,
    icon1: cardicon1, // Beds icon
    icon2: cardicon2, // Baths icon
    icon3: cardicon3, // Area icon
    icon4: msgIcon, // Message icon,
    icon5: callicon, //
    beds: 2,
    baths: 2,
    area: 1000,
    price: 500000,
  },
  {
    mainImage: mainimage1,
    heartIcon: heartIcon,
    heading:
      "Luxurious villa with modern design Luxurious villa with modern designLuxurious villa with modern designLuxurious villa with modern design",
    location: "15 Greenfield Lane, Chester, CH1 2LD",
    locationIcon: locationIcon,
    icon1: cardicon1, // Beds icon
    icon2: cardicon2, // Baths icon
    icon3: cardicon3, // Area icon
    icon4: msgIcon, // Message icon,
    icon5: callicon, //
    beds: 2,
    baths: 2,
    area: 1000,
    price: 500000,
  },
  {
    mainImage: mainimage2,
    heartIcon: heartIcon,
    heading:
      "Luxurious villa with modern design Luxurious villa with modern designLuxurious villa with modern designLuxurious villa with modern design",
    location: "15 Greenfield Lane, Chester, CH1 2LD",
    locationIcon: locationIcon,
    icon1: cardicon1, // Beds icon
    icon2: cardicon2, // Baths icon
    icon3: cardicon3, // Area icon
    icon4: msgIcon, // Message icon,
    icon5: callicon, //
    beds: 2,
    baths: 2,
    area: 1000,
    price: 500000,
  },
  {
    mainImage: mainimage5,
    heartIcon: heartIcon,
    heading:
      "Luxurious villa with modern design Luxurious villa with modern designLuxurious villa with modern designLuxurious villa with modern design",
    location: "15 Greenfield Lane, Chester, CH1 2LD",
    locationIcon: locationIcon,
    icon1: cardicon1, // Beds icon
    icon2: cardicon2, // Baths icon
    icon3: cardicon3, // Area icon
    icon4: msgIcon, // Message icon,
    icon5: callicon, //
    beds: 2,
    baths: 2,
    area: 1000,
    price: 500000,
  },
  {
    mainImage: mainimage3,
    heartIcon: heartIcon,
    heading:
      "Luxurious villa with modern design Luxurious villa with modern designLuxurious villa with modern designLuxurious villa with modern design",
    location: "15 Greenfield Lane, Chester, CH1 2LD",
    locationIcon: locationIcon,
    icon1: cardicon1, // Beds icon
    icon2: cardicon2, // Baths icon
    icon3: cardicon3, // Area icon
    icon4: msgIcon, // Message icon,
    icon5: callicon, //
    beds: 2,
    baths: 2,
    area: 1000,
    price: 500000,
  },
  {
    mainImage: mainimage4,
    heartIcon: heartIcon,
    heading:
      "Luxurious villa with modern design Luxurious villa with modern designLuxurious villa with modern designLuxurious villa with modern design",
    location: "15 Greenfield Lane, Chester, CH1 2LD",
    locationIcon: locationIcon,
    icon1: cardicon1, // Beds icon
    icon2: cardicon2, // Baths icon
    icon3: cardicon3, // Area icon
    icon4: msgIcon, // Message icon,
    icon5: callicon, //
    beds: 2,
    baths: 2,
    area: 1000,
    price: 500000,
  },

  // Add more card data as needed
];

function Section3() {
  const [active, setActive] = useState("all");

  return (
    <div
      className="p-4 rounded-[5rem] bg-cover bg-center mt-[2rem]"
      style={{
        boxShadow: "3px -1px 29.9px 0px #00000012",
        backgroundImage: `url(${bglineimage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[95%]   md:w-[88%] 2xl:w-[84%] xl:w-[83%] mx-auto h-auto flex flex-col items-center relative  justify-center  mt-9 pb-5  -z-50 ">
        {/* heading  */}

        <div className="flex items-start justify-between gap-x-4">
          {/* "Our" Section */}
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold text-black md:text-5xl Bostonfont">
              <Headingcontent title="Our " highlightedTitle="  Properties" />
            </h2>
          </div>
        </div>

        {/* serach item */}

        <div className="flex items-center justify-between w-[60%] mt-8">
          {/* All Button */}
          <button
            type="button"
            className={` h-[2.5rem] w-[3.5rem]  transition-colors duration-300 rounded-t-2xl fontpoppins font-[500] ${
              active === "all"
                ? "bg-[#056CB2] text-white"
                : "bg-white text-[#000000] opacity-65"
            }`}
            onClick={() => setActive("all")}
          >
            All
          </button>

          {/* Buy Button */}
          <button
            type="button"
            className={`  h-[2.5rem] w-[3.5rem]  transition-colors duration-300 rounded-t-2xl fontpoppins font-[500] ${
              active === "buy"
                ? "bg-[#056CB2] text-white"
                : "bg-white text-[#000000] opacity-65"
            }`}
            onClick={() => setActive("buy")}
          >
            Buy
          </button>

          {/* Rent Button */}
          <button
            type="button"
            className={` h-[2.5rem] w-[3.5rem]  transition-colors duration-300 rounded-t-2xl fontpoppins font-[500] items-center ${
              active === "rent"
                ? "bg-[#056CB2] text-white"
                : "bg-white text-[#000000] opacity-65"
            }`}
            onClick={() => setActive("rent")}
          >
            Rent
          </button>
        </div>

        {/* line */}
        <div className="w-full mx-auto h-[1px]  bg-[#000000] opacity-[33%]"></div>

        {/* card */}

        <div className="grid w-full h-full gap-5 mt-[3rem] 2xl:grid-cols-3 lg:grid-cols-2 ">
          {cardData.map((card, index) => (
            <Card
              key={index}
              mainImage={card.mainImage}
              heartIcon={card.heartIcon}
              heading={card.heading}
              location={card.location}
              locationIcon={card.locationIcon}
              icon1={card.icon1}
              icon2={card.icon2}
              icon3={card.icon3}
              icon4={card.icon4}
              icon5={card.icon5}
              beds={card.beds}
              baths={card.baths}
              area={card.area}
              price={card.price}
              title={""}
            />
          ))}
        </div>

        <div className="mt-10">
          <button
            type="button"
            className="px-8 py-[16px] text-white transition-colors duration-300 bg-[#056CB2] rounded-[5rem] fontpoppins font-[500] cursor-pointer"
          >
            View All Properties {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section3;
