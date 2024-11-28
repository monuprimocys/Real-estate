import "./Section6.css"; // Ensure this path is correct
import secondbgimage3 from "../../../assets/Image/secondsection2.png";
import SimpleBtn from "../../../componets/Buttons/SimpleBtn";
import Section6Card from "../../../componets/Cards/Section6Card";
import { section6cardtype } from "../../../constants/section6cardtype";
import cardicon from "../../../assets/Image/section6icon.png";
import mainbgimage1 from "../../../assets/Image/section6bgimage1.png";
import mainbgimage2 from "../../../assets/Image/section6bgimage2.png";
import mainbgimage3 from "../../../assets/Image/section6bgimage3.png";
import mainbgimage4 from "../../../assets/Image/section6bgimage4.png";

const cardDataArray: section6cardtype[] = [
  {
    mainImage: mainbgimage1,
    heading: "155 Properties",
    title: "Apartment",
    icon: cardicon,
    colorheadingandtitle: "#056CB2",
  },
  {
    mainImage: mainbgimage2,
    heading: "155 Properties",
    title: "Apartment",
    icon: cardicon,
    colorheadingandtitle: "#FFFFFF",
  },
  {
    mainImage: mainbgimage3,
    heading: "155 Properties",
    title: "Apartment",
    icon: cardicon,
    colorheadingandtitle: "#056CB2",
  },
  {
    mainImage: mainbgimage4,
    heading: "155 Properties",
    title: "Apartment",
    icon: cardicon,
    colorheadingandtitle: "#FFFFFF",
  },
];

function Section6() {
  return (
    <div className="relative flex flex-col items-center w-full h-auto py-6 overflow-hidden bg-white -z-50 " >
      {/* Marquee Section */}
      <div className="absolute grid items-center justify-center w-full grid-cols-1 grid-rows-1 overflow-hidden opacity-25 top-[9rem] xl:top-[8.5rem] 2xl:bottom-1/2 animate-marquee-container">
        <div className="flex animate-marquee">
          <h2 className="md:text-9xl text-center text-[#E0E0E0] whitespace-nowrap text-7xl">
            Residential Architecture Real Estate Residential Architecture Real
          </h2>
          <h2 className="md:text-9xl text-center text-[#E0E0E0] whitespace-nowrap text-7xl">
            Residential Architecture Real Estate Residential Architecture Real
          </h2>
        </div>
      </div>

      {/* Main Content with top padding to avoid overlap */}
      <div className="w-[100%] md:w-[88%] lg:w-[88%] xl:w-[83%] 2xl:w-[75%] mx-auto grid 2xl:grid-cols-2 items-center justify-center mt-32 h-auto    ">
        {/* Left Column Content */}
        <div className="flex flex-col gap-6 w-full  md:w-[100%] h-[25rem] xl:w-[90%]    px-4 md:px-0">
          <h2 className="text-[#000000] Bostonfont text-2xl md:text-4xl font-semibold">
            Explore
          </h2>
          <div className="w-[20%] md:w-[16%] mt-[-1rem]">
            <img
              src={secondbgimage3}
              alt="Vector representation of a neighborhood"
              className="w-full h-full filter grayscale-0"
            />
          </div>
          <div>
            <h3 className="Bostonfont text-[#000000] font-bold text-[30px] md:text-[40px] leading-[40px] md:leading-[50px] cursor-pointer">
              New Neighbor-hood
            </h3>
          </div>
          <div>
            <p className="Bostonfont text-[#343434] text-base md:text-lg line-clamp-3">
              Great place to relax, have a picnic, or enjoy nature. You might
              discover unique stores, artisanal products, along with local food.
              Great place to relax, have a picnic, or enjoy nature. You might
              discover unique stores, artisanal products, along with local food.
            </p>
          </div>
          <div className="z-40 m-0 opacity-100 cursor-pointer">
            <SimpleBtn />
          </div>
        </div>

        {/* Right Column Card Grid */}
        <div className="grid h-auto xl:grid-cols-3 2xl:grid-cols-2 gap-y-4  xl:w-[95%]   w-full   flex-wrap  md:grid-cols-2  ml-3 md:ml-0">
          {cardDataArray.map((cardData, index) => (
            <Section6Card key={index} cardData={cardData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section6;
