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
import properticeicon from "../../../assets/Image/properticeicon.png";
import GoogleMapReact from "google-map-react";
import propertydetailarroicon from "../../../assets/Image/propertydetailscreentypearrowicon.png";
import { MdLocationPin } from "react-icons/md";
import BtnwithoutArrow from "../../../componets/Buttons/BtnwithoutArrow";
import properticescallicon from "../../../assets/Image/properticeiconcall.png";
import properticesiconwhatshop from "../../../assets/Image/properticeiconwhatshp.png";
import smsicon from "../../../assets/Image/sms.jpg";
import bedicon1 from "../../../assets/Image/cardicon1.png";
import Bathsicon from "../../../assets/Image/cardicon2.png";
import Areaicon from "../../../assets/Image/cardicon3.png";

import callicon from "../../../assets/Image/call.png";

import heartIcon from "../../../assets/Image/heart.png";
import PropertiesHomeScreenCard from "../../../componets/Cards/PropertiesHomeScreenCard/PropertiesHomeScreenCard";
import Headingcontent from "../../../componets/Headingcontent/Headingcontent";

function PropertiesDetailScreen() {
  const { id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState(null);
  const [propertyDescription, setPropertyDescription] = useState(null);
  const [similarProperty, setSimilarProperty] = useState(null);
  const [venderDetail, setVenderDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [getPropertyDetail] = usePropertyDetailScreen_apiMutation();
  const [thumbnails, setThumbnails] = useState([]); // For infinite sliding
  const [selectedIndex, setSelectedIndex] = useState(0); // Track the selected thumbnail

  const visibleCards = 4; // Number of thumbnails visible at a time on 2xl screens

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
          setSimilarProperty(response.similar_products);
          setVenderDetail(response.vendor_details);
          setThumbnails(response.property_data?.property_image || []);
        }
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [
    id,
    getPropertyDetail,
    setIsLoading,
    setPropertyDescription,
    setSimilarProperty,
    setVenderDetail,
  ]);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (thumbnails.length > visibleCards) {
        setSelectedIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % thumbnails.length;
          return nextIndex;
        });

        setThumbnails((prev) => {
          const newThumbnails = [...prev.slice(1), prev[0]];
          return newThumbnails;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [thumbnails, visibleCards]);

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  const {
    title,
    price,
    location,
    property_id,
    property_image = [],
    bedroom,
    bathroom,
    area,
    property_features = [],
    type,
    lon,
    lat,
    property_common_notea,
  } = propertyDetails || {};

  // vender details
  const { first_name, last_name, mobile, whatsup_number, email } =
    venderDetail || {};

  const getMainImage = (images) => {
    const image = images.find((img) => img.type === "image");
    return image ? image.url : "defaultImage.jpg"; // Fallback to a default image
  };

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
              <div className="relative w-[90%] mx-auto xl:w-[14%] h-full overflow-hidden rounded-xl">
                <div
                  className="grid transition-transform duration-500 ease-in-out xl:grid-cols-1 gap-y-5"
                  style={{
                    transform: "translateY(0)",
                  }}
                >
                  {thumbnails.slice(0, visibleCards).map((img, index) => (
                    <div
                      key={index}
                      className="h-[10rem] xl:h-[13rem] rounded-xl flex-shrink-0"
                      onClick={() => handleThumbnailClick(index)}
                    >
                      {img.type === "image" ? (
                        <img
                          src={img.url}
                          alt={`property-${index}`}
                          className="object-cover w-full h-full overflow-hidden cursor-pointer rounded-xl"
                        />
                      ) : (
                        <video
                          src={img.url}
                          alt={`property-video-${index}`}
                          className="object-cover w-full h-full cursor-pointer rounded-xl"
                          controls
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Main Image and Details */}
              <div
                className="xl:w-[85%] flex flex-col mx-auto rounded-xl w-[90%]"
                style={{
                  boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
                  // border: "1.78px solid #ECECEC",
                }}
              >
                {/* Main Image */}
                <div className="w-full h-full rounded-xl">
                  <div className="h-[40rem] w-full 2xl:h-[43rem]">
                    {property_image?.[selectedIndex]?.type === "image" ? (
                      <img
                        src={property_image[selectedIndex]?.url}
                        alt="property-bg"
                        className="object-cover w-full h-full rounded-xl "
                      />
                    ) : (
                      <video
                        src={property_image[selectedIndex]?.url}
                        className="object-cover w-full h-full rounded-xl"
                        controls
                      />
                    )}
                    <div className="flex items-end justify-end w-full pr-[2rem] mt-[-2rem]">
                      <div className="rounded-3xl flex justify-center items-center h-[3.4rem] w-[6.5rem] bg-[#FFFFFF] cursor-pointer">
                        <p className="font-[900] text-[#B5843F] text-xl">
                          ${price}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-full h-auto px-10 py-10 overflow-auto bg-white shadow-lg rounded-b-xl"
                    style={{
                      boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
                      border: "1.78px solid #ECECEC",
                    }}
                  >
                    {/* Property Title */}
                    <h3 className="ml-1 text-xl font-semibold">{title}</h3>

                    {/* Location and Property ID */}
                    <div className="flex mt-4 space-x-8">
                      <div className="flex items-center gap-3 cursor-pointer">
                        <img
                          src={locationIcon}
                          alt="Location"
                          className="w-6 h-6"
                        />
                        <p>{location}</p>
                      </div>
                      <div className="flex items-center gap-3 cursor-pointer">
                        <img
                          src={propertyDetailicon}
                          alt="Property ID"
                          className="w-6 h-6"
                        />
                        <p>
                          Property ID:{" "}
                          <span className="font-semibold text-[#B5843F]">
                            {property_id}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="mt-6">
                      <div className="flex flex-wrap items-center justify-between space-y-2 md:space-y-0">
                        <div className="flex items-center space-x-4 text-sm text-black">
                          <span className="flex items-center">
                            <img
                              src={cardicon1}
                              alt="Beds"
                              className="w-5 h-6 mr-1"
                            />
                            {bedroom} Beds
                          </span>
                          <span className="flex items-center">
                            <img
                              src={cardicon2}
                              alt="Baths"
                              className="w-5 h-6 mr-1"
                            />
                            {bathroom} Baths
                          </span>
                          <span className="flex items-center">
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
                            <span>Message</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-[90%] mx-auto mt-10 flex justify-between items-start gap-6">
              {/* Left side - 70% width */}
              <div className="w-[80%] flex flex-col gap-10 h-auto">
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
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: "AIzaSyAMZ4GbRFYSevy7tMaiH5s0JmMBBXc0qBA",
                      }}
                      defaultZoom={13}
                      draggable={true}
                      defaultCenter={{
                        lat: lat || 0,
                        lng: lon || 0,
                      }}
                      options={{
                        mapTypeControl: true,
                        zoomControl: true,
                      }}
                    >
                      {/* Marker position */}
                      <div
                        lat={lat || 0} // Ensure lat is properly passed
                        lng={lon || 0} // Ensure lon is properly passed
                        style={{
                          position: "absolute",
                          transform: "translate(-50%, -50%)",
                          cursor: "pointer",
                        }}
                      >
                        <MdLocationPin className="text-3xl text-black" />
                      </div>
                    </GoogleMapReact>
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
                    <div className="flex flex-wrap items-center justify-between space-y-4 md:space-y-0  xl:w-[70%]">
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
                className="w-[20%] flex flex-col gap-10  h-full p-6 "
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
              <div className="flex flex-col w-full gap-6">
                <div className="flex items-center justify-center w-full">
                  <h2 className="text-2xl font-bold text-black md:text-5xl Bostonfont">
                    <Headingcontent
                      title="Similar "
                      highlightedTitle="Properties"
                    />
                  </h2>
                </div>

                <div className="grid items-center w-full grid-rows-1 gap-6 px-3 mt-20 2xl:grid-cols-4 md:grid-cols-2 xl:w-[90%] mx-auto ">
                  {similarProperty?.map((feature) => (
                    <PropertiesHomeScreenCard
                      key={feature.id}
                      mainImage={getMainImage(feature.property_image)} // First image or default
                      heartIcon={heartIcon} // Heart icon path/component
                      heading={feature.title}
                      title={feature.type}
                      location={feature.location}
                      locationIcon={locationIcon} // Location icon path/component
                      icon1={bedicon1} // Bed icon path/component
                      icon2={Bathsicon} // Bath icon path/component
                      icon3={Areaicon} // Area icon path/component
                      icon4={msgIcon} // Message icon path/component
                      icon5={callicon} // Call icon path/component
                      beds={feature.bedroom}
                      baths={feature.bathroom}
                      area={feature.area}
                      price={feature.price}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default PropertiesDetailScreen;












const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28792.315234157737!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1`;