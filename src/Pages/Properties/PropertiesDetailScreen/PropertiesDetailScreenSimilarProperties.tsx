import React, { useEffect, useState } from "react";
import { usePropertyDetailScreen_apiMutation } from "../../../app/api/PropertyDetailScreenApi/PropertyDetailScreen_api";
import bedicon1 from "../../../assets/Image/cardicon1.png";
import Bathsicon from "../../../assets/Image/cardicon2.png";
import Areaicon from "../../../assets/Image/cardicon3.png";
import msgIcon from "../../../assets/Image/message-text.png";
import callicon from "../../../assets/Image/call.png";
import locationIcon from "../../../assets/Image/location.png";
import heartIcon from "../../../assets/Image/heart.png";
import Headingcontent from "../../../componets/Headingcontent/Headingcontent";
import PropertiesHomeScreenCard from "../../../componets/Cards/PropertiesHomeScreenCard/PropertiesHomeScreenCard";
import { useParams } from "react-router-dom";
import prevIcon from "../../../assets/Image/arrow-left.png"; // Add your previous icon here
import nextIcon from "../../../assets/Image/arrow-right.png"; // Add your next icon here

function PropertiesDetailScreenSimilarProperties() {
  const [getFeatures] = usePropertyDetailScreen_apiMutation();
  const [featuresData, setFeaturesData] = useState([]);
  const [startIndex, setStartIndex] = useState(1);
  const [visibleCardsCount, setVisibleCardsCount] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const { id } = useParams();

  // Fetch features data
  useEffect(() => {
    async function fetchFeatures() {
      try {
        const response = await getFeatures({ id: id }).unwrap();
        if (response?.response_code === "1") {
          setFeaturesData(response.similar_products || []);
          return;
        }
      } catch (error) {
        console.error("Error fetching features data:", error);
      }
    }
    fetchFeatures();
  }, [getFeatures, id]);

  useEffect(() => {
    function updateCardsCount() {
      const width = window.innerWidth;
      if (width < 768) setVisibleCardsCount(1);
      else if (width < 1480) setVisibleCardsCount(2);
      else setVisibleCardsCount(4);
    }

    updateCardsCount();
    window.addEventListener("resize", updateCardsCount);
    return () => window.removeEventListener("resize", updateCardsCount);
  }, []);

  useEffect(() => {
    if (featuresData.length > 4) {
      const slideInterval = setInterval(() => {
        setIsTransitioning(true);
        setStartIndex((prevIndex) => prevIndex + 1);
      }, 4000);

      return () => clearInterval(slideInterval);
    }
  }, [featuresData]);

  useEffect(() => {
    if (featuresData.length > 0) {
      if (startIndex === featuresData.length + 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setStartIndex(1);
        }, 500);
      } else if (startIndex === 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setStartIndex(featuresData.length);
        }, 500);
      }
    }
  }, [startIndex, featuresData]);

  const clonedData = [
    featuresData[featuresData.length - 1],
    ...featuresData,
    ...featuresData,
  ];

  // Calculate translateX for smooth sliding
  const translateXValue = -(startIndex * (100 / visibleCardsCount));

  // Function to move to the previous card
  const handlePrevClick = () => {
    setIsTransitioning(true);
    setStartIndex((prevIndex) =>
      prevIndex === 1 ? featuresData.length : prevIndex - 1
    );
  };

  // Function to move to the next card
  const handleNextClick = () => {
    setIsTransitioning(true);
    setStartIndex((prevIndex) =>
      prevIndex === featuresData.length ? 1 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-full mt-10 rounded-[4rem] py-16 overflow-hidden">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-bold text-black md:text-5xl Bostonfont">
          <Headingcontent title="Similar  " highlightedTitle=" Properties" />
        </h2>
      </div>
      <div className="relative mt-10 overflow-hidden 2xl:w-[80%] mx-auto w-[90%] md:w-[95%] lg:w-[90%] xl:w-[85%]">
        {/* Slider */}
        <div
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(${translateXValue}%)`,
          }}
        >
          {clonedData.map((feature, index) => (
            <div
              key={index}
              className="flex-shrink-0 gap-6 pb-4 overflow-hidden rounded-lg"
              style={{ flex: `0 0 ${100 / visibleCardsCount}%` }}
            >
              {feature && (
                <PropertiesHomeScreenCard
                  mainImage={feature.property_image[0]?.url || "image"}
                  heartIcon={heartIcon}
                  heading={feature.title}
                  title={feature.type}
                  location={feature.location}
                  locationIcon={locationIcon}
                  icon1={bedicon1}
                  icon2={Bathsicon}
                  icon3={Areaicon}
                  icon4={msgIcon}
                  icon5={callicon}
                  beds={feature.bedroom}
                  baths={feature.bathroom}
                  area={feature.area}
                  price={feature.price}
                  status={feature.status}
                />
              )}
            </div>
          ))}
        </div>

        {/* Previous and Next buttons */}
        {featuresData.length > 4 && (
          <button
            onClick={handlePrevClick}
            className="absolute left-0 p-2 transform -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 hover:bg-gray-200"
          >
            <img src={prevIcon} alt="Previous" className="w-6 h-6" />
          </button>
        )}
        {featuresData.length > 4 && (
          <button
            onClick={handleNextClick}
            className="absolute right-0 p-2 transform -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 hover:bg-gray-200"
          >
            <img src={nextIcon} alt="Next" className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}

export default PropertiesDetailScreenSimilarProperties;
