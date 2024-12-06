import { useEffect, useState } from "react";
import Card from "../../../componets/Cards/Section3Card";
import heartIcon from "../../../assets/Image/heart.png";
import locationIcon from "../../../assets/Image/location.png";
import cardicon1 from "../../../assets/Image/cardicon1.png"; // Beds icon
import cardicon2 from "../../../assets/Image/cardicon2.png"; // Baths icon
import cardicon3 from "../../../assets/Image/cardicon3.png"; // Area icon
import msgIcon from "../../../assets/Image/message-text.png"; // Message icon
import callicon from "../../../assets/Image/call.png"; // Call icon
import bglineimage from "../../../assets/Image/section3bgimage-line.png";
import Headingcontent from "../../../componets/Headingcontent/Headingcontent";
import { useGet_all_filtterMutation } from "../../../app/api/PropertyScreenFiltterApi/filtter_api";
import { useNavigate } from "react-router-dom";

function Section3() {
  const [active, setActive] = useState("all");
  const [properties, setProperties] = useState([]);
  const [visibleProperties, setVisibleProperties] = useState(6);
  const [isAllVisible, setIsAllVisible] = useState(false);
  const [getAllFiltter] = useGet_all_filtterMutation();


  const navigate = useNavigate()

  useEffect(() => {
    // Fetch property data from API
    const fetchProperties = async () => {
      try {
        const response = await getAllFiltter();
        if (response.data && response.data.filter_property) {
          // Filter properties based on selected status
          const filteredProperties = response.data.filter_property.filter((property) => {
            if (active === "all") return true; // If 'All' is selected, show all properties
            return property.status.toLowerCase() === active.toLowerCase(); // Match the status
          });

          // Transform API data for rendering
          const formattedProperties = filteredProperties.map((property) => ({
            mainImage: property.property_image.length
              ? property.property_image[0].url
              : "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Fallback image
            heartIcon: heartIcon,
            heading: property.title,
            location: property.location || "Location not provided",
            locationIcon: locationIcon,
            icon1: cardicon1, // Beds icon
            icon2: cardicon2, // Baths icon
            icon3: cardicon3, // Area icon
            icon4: msgIcon, // Message icon
            icon5: callicon, // Call icon
            beds: property.bedroom,
            baths: property.bathroom,
            area: property.area || 0,
            price: property.price,
            status: property.status
          }));

          setProperties(formattedProperties);
        }
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    };

    fetchProperties();
  }, [getAllFiltter, active]);

  const handleToggleView = () => {
    if (isAllVisible) {
      setVisibleProperties(6);
    } else {
      setVisibleProperties(properties.length);
    }
    setIsAllVisible(!isAllVisible);
    navigate("/properties")
  };

  return (
    <div
      className="p-4 rounded-[5rem] bg-cover bg-center mt-[2rem] "
      style={{
        boxShadow: "3px -1px 29.9px 0px #00000012",
        backgroundImage: `url(${bglineimage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[95%] md:w-[88%] 2xl:w-[84%] xl:w-[83%] mx-auto h-auto flex flex-col items-center relative justify-center mt-9 pb-5 ">
        {/* heading */}
        <div className="flex items-start justify-between gap-x-4">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold text-black md:text-5xl Bostonfont">
              <Headingcontent title="Our " highlightedTitle="Properties" />
            </h2>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-between w-[60%] mt-8">
          {["All", "Rent", "Sale"].map((type) => (
            <button
              key={type}
              type="button"
              className={`h-[2.5rem] w-[3.5rem] transition-colors duration-300 rounded-t-2xl fontpoppins font-[500] ${active === type.toLowerCase() ? "bg-[#056CB2] text-white" : "bg-white text-[#000000] opacity-65"
                }`}
              onClick={() => setActive(type.toLowerCase())}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full mx-auto h-[1px] bg-[#000000] opacity-[33%]"></div>

        {/* Cards */}
        <div className="grid w-full h-full gap-5 mt-[3rem] 2xl:grid-cols-3 lg:grid-cols-2">
          {properties.slice(0, visibleProperties).map((property, index) => (
            <Card
              key={index}
              mainImage={property.mainImage}
              heartIcon={property.heartIcon}
              heading={property.heading}
              location={property.location}
              locationIcon={property.locationIcon}
              icon1={property.icon1}
              icon2={property.icon2}
              icon3={property.icon3}
              icon4={property.icon4}
              icon5={property.icon5}
              beds={property.beds}
              baths={property.baths}
              area={property.area}
              price={property.price}
              title={""}
              status={property.status}
            />
          ))}
        </div>

        {/* Toggle Button for View All or Show Less */}
        <div className="mt-10">
          <button
            type="button"
            className="px-8 py-[16px] text-white transition-colors duration-300 bg-[#056CB2] rounded-[5rem] fontpoppins font-[500] cursor-pointer "
            onClick={handleToggleView}

          >
            {isAllVisible ? "Show Less" : "View All Properties"} {">"}
          </button>
        </div>
      </div>
    </div >
  );
}

export default Section3;
