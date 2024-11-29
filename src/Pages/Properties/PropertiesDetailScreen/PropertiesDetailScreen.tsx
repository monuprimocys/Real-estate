import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePropertyDetailScreen_apiMutation } from "../../../app/api/PropertyDetailScreenApi/PropertyDetailScreen_api";
import locationIcon from "../../../assets/Image/location.png";
import cardicon1 from "../../../assets/Image/cardicon1.png";
import cardicon2 from "../../../assets/Image/cardicon2.png";
import cardicon3 from "../../../assets/Image/cardicon3.png";
import msgIcon from "../../../assets/Image/message-text.png";
import propertyDetailicon from "../../../assets/Image/propertidetailscreenidicon.png";
import PropertiesDetailScreenHeader from "./PropertiesDetailScreenHeader";
import CircularProgress from "@mui/joy/CircularProgress";
import GoogleMapReact from "google-map-react";
import { MdLocationPin } from "react-icons/md";
import properticeicon from "../../../assets/Image/properticeicon.png";
import properticescallicon from "../../../assets/Image/properticeiconcall.png";
import properticesiconwhatshop from "../../../assets/Image/properticeiconwhatshp.png";
import smsicon from "../../../assets/Image/sms.jpg";
import BtnwithoutArrow from "../../../componets/Buttons/BtnwithoutArrow";
import propertydetailarroicon from "../../../assets/Image/propertydetailscreentypearrowicon.png";
import PropertiesDetailScreenSimilarProperties from "./PropertiesDetailScreenSimilarProperties";
import prevIcon from "../../../assets/Image/arrow-left.png";
import nextIcon from "../../../assets/Image/arrow-right.png";
function PropertiesDetailScreen() {
  const { id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState(null);
  const [propertyDescription, setPropertyDescription] = useState(null);

  const [venderDetail, setVenderDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [getPropertyDetail] = usePropertyDetailScreen_apiMutation();
  const [thumbnails, setThumbnails] = useState([]); // For carousel thumbnails
  const [mainImage, setMainImage] = useState(null); // For main image
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    if (!id) {
      console.error("Property ID is missing");
      return;
    }

    const fetchPropertyDetails = async () => {
      setIsLoading(true);
      try {
        const response = await getPropertyDetail({ id: id }).unwrap();

        if (response?.response_code === "1") {
          setPropertyDetails(response.property_data);
          setPropertyDescription(response.property_description);

          setVenderDetail(response.vendor_details);
          setThumbnails(response.property_data?.property_image || []);
          // Set the first image as the main image by default
          setMainImage(response.property_data?.property_image?.[0] || null);
        }
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [id, getPropertyDetail]);

  // Function to continuously slide the images
  const slideImages = () => {
    setThumbnails((prevThumbnails) => {
      const newThumbnails = [...prevThumbnails];
      newThumbnails.push(newThumbnails.shift());
      return newThumbnails;
    });
  };

  // Handle clicking a thumbnail to set the main image
  const handleThumbnailClick = (img) => {
    setMainImage(img);
  };

  const {
    title,
    price,
    location,
    property_id,
    bedroom,
    bathroom,
    area,
    lon,
    lat,
    property_features = [],
    property_common_notea,
    type,
    property_image = [],
  } = propertyDetails || {};

  // Update the number of visible cards based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(4); // 4 cards visible on xl screens
      } else if (window.innerWidth >= 766) {
        setVisibleCards(1); // 2 cards visible on md screens
      } else {
        setVisibleCards(1); // 1 card visible on mobile screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (thumbnails.length > visibleCards) {
        slideImages();
      }
    }, 50000);

    return () => clearInterval(interval);
  }, [thumbnails, visibleCards]);

  // vender details
  const { first_name, last_name, mobile, whatsup_number, email } =
    venderDetail || {};

  console.log("the values of the ", thumbnails);

  return (
    <>
      <PropertiesDetailScreenHeader />
      <div className="w-full h-auto">
        {isLoading ? (
          <div className="w-full col-span-2 mt-10 text-xl font-semibold text-center text-gray-600">
            <CircularProgress color="primary" variant="outlined" />
          </div>
        ) : (
          <>
            <div className="md:w-[95%] w-full xl:w-[90%] mx-auto xl:flex overflow-hidden grid gap-y-6 gap-x-5 mt-10 h-auto ">
              {/* Left Column: Thumbnails Carousel */}
              <div className="relative w-[90%] mx-auto xl:w-[14%] h-full overflow-hidden ">
                <div className="flex flex-col items-center">
                  <div
                    className="grid w-full h-full grid-cols-1 grid-rows-1 transition-transform duration-500 ease-in-out xl:grid-cols-1 gap-y-5 "
                    style={{ transform: `translateY(-${0}px)` }}
                  >
                    {thumbnails.slice(0, visibleCards).map((media, index) => (
                      <div
                        key={index}
                        className={`h-[10rem] md:h-[13.8rem] lg:h-[22rem] xl:h-[12.2rem] 2xl:h-[13.8rem] rounded-xl flex-shrink-0 cursor-pointer ${
                          media === mainImage
                            ? "border-2 border-[#B5843F] shadow-lg rounded-xl"
                            : ""
                        }`}
                        onClick={() => handleThumbnailClick(media)} // Click handler for thumbnails
                      >
                        {media.type === "image" ? (
                          <img
                            src={media.url}
                            alt={`property-${index}`}
                            className="object-cover w-full h-full overflow-hidden rounded-xl"
                          />
                        ) : media.type === "video" ? (
                          <div className="relative w-full h-full">
                            <video
                              src={media.url}
                              alt={`property-video-${index}`}
                              className="w-full h-full rounded-xl"
                              controls
                            />
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  <div className="absolute z-10 flex items-center justify-between w-full gap-6 bottom-6">
                    <button
                      onClick={() => slideImages()} // Manual slide
                      className="absolute left-0 p-2 transform -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 hover:bg-gray-200"
                    >
                      <img src={prevIcon} alt="Previous" className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => slideImages()} // Manual slide
                      className="absolute right-0 p-2 transform -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 hover:bg-gray-200"
                    >
                      <img src={nextIcon} alt="Next" className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Main Image and Details */}
              <div
                className="xl:w-[85%] flex flex-col mx-auto rounded-xl w-[90%]"
                style={{ boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)" }}
              >
                {/* Main Image / Video */}
                <div className="w-full h-full rounded-xl">
                  <div className=" w-full 2xl:h-[46.3rem] relative overflow-hidden h-[20rem] xl:h-[40rem]">
                    {mainImage?.type === "image" ? (
                      <img
                        src={mainImage?.url}
                        alt="property-bg"
                        className="w-full h-full transition-all duration-500 ease-in-out rounded-xl"
                      />
                    ) : mainImage?.type === "video" ? (
                      <div className="relative w-full h-full">
                        <video
                          src={mainImage?.url}
                          alt={`property-video`}
                          className="w-full h-full rounded-xl"
                          controls
                        />
                      </div>
                    ) : null}

                    <div className="flex items-end justify-end w-full pr-[2rem] mt-[-2.3rem]">
                      <div className="rounded-3xl flex justify-center items-center h-[3.4rem] w-[6.5rem] bg-[#FFFFFF] cursor-pointer">
                        <p className="font-[700] text-[#B5843F] text-xl pb-2 flex justify-center items-center Bostonfont">
                          ${price}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-full h-auto p-4 overflow-auto bg-white shadow-lg lg:p-10 rounded-b-xl"
                    style={{
                      boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
                      border: "1.78px solid #ECECEC",
                    }}
                  >
                    {/* Property Title */}
                    <h3 className="ml-1 text-xl font-semibold Bostonfont">
                      {title}
                    </h3>

                    {/* Location and Property ID */}
                    <div className="flex mt-4 space-x-8">
                      <div className="flex items-center gap-3 cursor-pointer">
                        <img
                          src={locationIcon}
                          alt="Location"
                          className="w-6 h-6"
                        />
                        <p className="Bostonfont">{location}</p>
                      </div>
                      <div className="flex items-center gap-3 cursor-pointer">
                        <img
                          src={propertyDetailicon}
                          alt="Property ID"
                          className="w-6 h-6"
                        />
                        <p className="Bostonfont">
                          Property ID:{" "}
                          <span className="font-semibold text-[#B5843F] Bostonfont">
                            {property_id}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="mt-6">
                      <div className="flex flex-wrap items-center justify-between space-y-2 md:space-y-0">
                        <div className="flex items-center space-x-4 text-sm text-black">
                          <span className="flex items-center Bostonfont">
                            <img
                              src={cardicon1}
                              alt="Beds"
                              className="w-5 h-6 mr-1"
                            />
                            {bedroom} Beds
                          </span>
                          <span className="flex items-center Bostonfont">
                            <img
                              src={cardicon2}
                              alt="Baths"
                              className="w-5 h-6 mr-1"
                            />
                            {bathroom} Baths
                          </span>
                          <span className="flex items-center Bostonfont">
                            <img
                              src={cardicon3}
                              alt="Area"
                              className="w-5 h-6 mr-1"
                            />
                            {area} sqft
                          </span>
                        </div>

                        <div className="flex space-x-3">
                          <button className="flex items-center px-3 py-1 text-sm text-white bg-[#B5843F] rounded-md space-x-1 hover:bg-[#9c6e34] transition-colors">
                            <img
                              src={msgIcon}
                              alt="Message"
                              className="w-4 h-4"
                            />
                            <span className="Bostonfont">Message</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-[90%] mx-auto mt-10 xl:flex justify-between items-start gap-6 md:w-[90%] ">
              {/* Left side - 70% width */}
              <div className="xl:w-[80%] flex flex-col gap-10 h-auto w-[90%] md:w-[95%] mx-auto">
                {/* Description section */}
                <div
                  className="w-full h-auto p-6 rounded-md"
                  style={{
                    boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
                    border: "1.78px solid #ECECEC",
                  }}
                >
                  <h3 className="text-[#B5843F] font-bold Bostonfont text-2xl line-clamp-1 py-4">
                    Description
                  </h3>
                  <div className="w-full md:ml-4 ml-[-1.3rem] h-auto px-1">
                    <ul>
                      <li className="flex items-center space-x-3 list-disc">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <p className="text-[#000000] opacity-70 font-[400] text-lg Bostonfont">
                          {propertyDescription}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Features section */}
                <div
                  className="w-full h-auto p-6 mx-auto bg-white rounded-md shadow-md"
                  style={{
                    boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
                    border: "1.78px solid #ECECEC",
                  }}
                >
                  <h3 className="text-[#B5843F] font-bold Bostonfont text-2xl line-clamp-1 py-4">
                    Features
                  </h3>
                  <div className="flex">
                    {/* First Column */}
                    <div className="flex flex-wrap gap-8">
                      {/* Map through the property features */}
                      {property_features.map((feature, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-2 space-y-4 sm:space-y-0 sm:flex-row"
                          >
                            {/* Static image */}
                            <img
                              src={properticeicon}
                              alt="Feature Icon"
                              className="h-[1.5rem] w-[1.5rem]"
                            />
                            {/* Feature text */}
                            <p className="text-[#000000] opacity-[70%] text-lg Bostonfont">
                              {feature}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* location */}
                <div
                  className="w-full h-auto p-6 mx-auto rounded-md shadow-md"
                  style={{
                    boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
                    border: "1.78px solid #ECECEC",
                  }}
                >
                  <h3 className="text-[#B5843F] font-bold Bostonfont text-2xl line-clamp-1 py-4">
                    Address
                  </h3>
                  <div style={{ width: "100%" }} className="h-[30rem]">
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyAMZ4GbRFYSevy7tMaiH5s0JmMBBXc0qBA&center=${lat},${lon}&zoom=13`}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      title="Google Map"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
                    ></iframe>
                  </div>
                </div>

                {/* commen note */}
                <div
                  className="w-full h-auto p-6 mx-auto rounded-md shadow-md bg-[#FFF7ED]"
                  style={{
                    boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
                    border: "1.78px solid #ECECEC",
                  }}
                >
                  <div className="w-full h-auto">
                    <h3 className="text-[#B5843F] font-bold Bostonfont text-2xl line-clamp-1 py-4">
                      Properties Common Note
                    </h3>
                    <div className="flex ">
                      <p className="text-[#535353] Bostonfont text-lg">
                        {property_common_notea}
                      </p>
                    </div>
                  </div>
                </div>

                {/* agent detail */}
                <div
                  className="w-full h-auto p-6 mx-auto rounded-md shadow-md bg-[#FFFFFF]"
                  style={{
                    boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
                    border: "1.78px solid #ECECEC",
                  }}
                >
                  <div className="w-full h-auto">
                    <h3 className="text-[#B5843F] font-bold Bostonfont text-2xl line-clamp-1 py-4">
                      Agent Lika Real Estate
                    </h3>
                    <div className="flex flex-wrap items-center justify-between space-y-4 md:space-y-0  xl:w-[70%] gap-6">
                      {/* First Column - Phone */}
                      <div className="flex items-center space-x-2 cursor-pointer">
                        <img
                          src={properticescallicon}
                          alt="Phone Icon"
                          className="h-[1.5rem] w-[1.5rem]"
                        />
                        <p className="text-[#000000] opacity-70 text-lg Bostonfont">
                          {mobile}
                        </p>
                      </div>

                      {/* Second Column - WhatsApp */}
                      <div className="flex items-center space-x-2 cursor-pointer">
                        <img
                          src={properticesiconwhatshop}
                          alt="WhatsApp Icon"
                          className="h-[1.5rem] w-[1.5rem]"
                        />
                        <p className="text-[#000000] opacity-70 text-lg Bostonfont">
                          {whatsup_number}
                        </p>
                      </div>

                      {/* Third Column - Email */}
                      <div className="flex items-center space-x-2 cursor-pointer">
                        <img
                          src={smsicon}
                          alt="Email Icon"
                          className="h-[1.5rem] w-[1.5rem]"
                        />
                        <p className="text-[#000000] opacity-70 text-lg Bostonfont">
                          {email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-full pt-8">
                    <BtnwithoutArrow label="Know More" />
                  </div>
                </div>
              </div>

              {/* Right side - 30% width */}
              <div
                className="xl:w-[20%] flex flex-col gap-10  h-full p-6 mx-auto w-[90%] md:w-[95%] mt-10 xl:mt-0"
                style={{
                  boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
                  border: "1.78px solid #ECECEC",
                }}
              >
                <div className="w-full ">
                  <h3 className="text-[#B5843F] font-bold Bostonfont text-2xl line-clamp-1 ">
                    Property Types
                  </h3>
                </div>

                {/* property type detail */}

                <div className="flex flex-col gap-6">
                  <div className="flex items-center w-full gap-6">
                    {/* static image */}
                    <div className="flex items-center justify-center w-6 h-6">
                      <img
                        src={propertydetailarroicon}
                        alt="Property Type Icon"
                      />
                    </div>

                    {/* dynamic data  */}
                    <div>
                      <p className="text-[#000000] opacity-[70%] text-lg Bostonfont">
                        {type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mx-auto mt-10 flex justify-between items-start gap-6 rounded-[4rem] py-16 w-full"
              style={{
                boxShadow: "3px -1px 29.9px 0px #00000012",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <PropertiesDetailScreenSimilarProperties />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default PropertiesDetailScreen;
