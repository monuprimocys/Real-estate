// PropertiesHomeScreen.js
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import { useGet_all_filtterMutation } from "../../../app/api/PropertyScreenFiltterApi/filtter_api";
import PropertiesHomeScreenCard from "../../../componets/Cards/PropertiesHomeScreenCard/PropertiesHomeScreenCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/joy/CircularProgress";
import heartIcon from "../../../assets/Image/heart.png";
import locationIcon from "../../../assets/Image/location.png";
import bedicon1 from "../../../assets/Image/cardicon1.png";
import Bathsicon from "../../../assets/Image/cardicon2.png";
import Areaicon from "../../../assets/Image/cardicon3.png";
import msgIcon from "../../../assets/Image/message-text.png";
import callicon from "../../../assets/Image/call.png";
import PropertyHomeScreenFeactures from "../PropertyHomeScreenFeactures/PropertyHomeScreenFeactures";
import properticescallicon from "../../../assets/Image/properticeiconcall.png";
import properticesiconwhatshop from "../../../assets/Image/properticeiconwhatshp.png";
import smsicon from "../../../assets/Image/sms.jpg";

import GMap from "../PropertyHomeScreenFeactures/googlemap";

function PropertiesHomeScreen() {
  const filterData = useSelector((state) => state.get_all_filtter);
  const allfilltervalues =
    filterData?.filterAllDropDownResponse?.filter_property || [];
  const [defaultApiValues, setDefaultApiValues] = useState([]);
  const [displayedProperties, setDisplayedProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [mapCenter, setMapCenter] = useState({ lat: 23.0714, lng: 72.5168 }); // Default center

  const itemsPerPage = 6;

  const [defaultshowallapivalues] = useGet_all_filtterMutation();
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const defaultResponse = await defaultshowallapivalues().unwrap();
        if (defaultResponse.response_code === "1") {
          const defaultProperties = defaultResponse.filter_property || [];
          setDefaultApiValues(defaultProperties);
          setDisplayedProperties(defaultProperties);

          // Set map center to the first property if available
          if (defaultProperties.length > 0) {
            setMapCenter({
              lat: parseFloat(defaultProperties[0].lat),
              lng: parseFloat(defaultProperties[0].lon),
            });
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [defaultshowallapivalues]);

  useEffect(() => {
    if (allfilltervalues.length) {
      setDisplayedProperties(allfilltervalues);
    } else {
      setDisplayedProperties(defaultApiValues);
    }
  }, [allfilltervalues, defaultApiValues]);

  const paginatedProperties = displayedProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleCardClick = (id) => {
    navigate(`/propertiesDetail/${id}`);
  };


  return (
    <div className="w-full h-auto mt-10">
      {isLoading ? (
        <div className="w-full col-span-2 mt-10 text-xl font-semibold text-center text-gray-600">
          <CircularProgress color="primary" variant="outlined" />
        </div>
      ) : (
        <>
          <div className="mx-auto xl:w-[90%] grid 2xl:grid-cols-2 gap-6 md:w-[95%] h-full 2xl:w-[80%] ">
            <div className="flex flex-col items-center justify-between h-fit">
              <div className="grid w-full gap-5 2xl:grid-cols-2 md:grid-cols-2 justify-items-center h-fit">
                {paginatedProperties.length === 0 ? (
                  <div className="w-full col-span-2 mt-10 text-xl font-semibold text-center text-gray-600">
                    Property not found
                  </div>
                ) : (
                  paginatedProperties.map((property) => (
                    <div
                      key={property.id}
                      onClick={() => handleCardClick(property.id)}
                    >
                      <PropertiesHomeScreenCard
                        mainImage={property.property_image[0]?.url}
                        heartIcon={heartIcon}
                        heading={property.title}
                        location={property.location}
                        locationIcon={locationIcon}
                        icon1={bedicon1}
                        icon2={Bathsicon}
                        icon3={Areaicon}
                        icon4={msgIcon}
                        icon5={callicon}
                        beds={property.bedroom}
                        baths={property.bathroom}
                        area={property.area}
                        price={property.price}
                        title={""}
                      />
                    </div>
                  ))
                )}
              </div>
              <div className="w-[50%] mt-4">
                <Stack spacing={2} className="mt-4">
                  <Pagination
                    count={Math.ceil(displayedProperties.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    shape="rounded"
                    sx={{
                      "& .MuiPaginationItem-root": {
                        backgroundColor: "#FFFFFF",
                        color: "#000000",
                      },
                      "& .Mui-selected": {
                        backgroundColor: "#056CB2",
                      },
                    }}
                  />
                </Stack>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between h-full w-[93%] mx-auto gap-6 md:w-[100%] lg:w-[97%]  pr-2  xl:w-[95%] overflow-hidden">
              <div style={{ width: "100%" }} className="min-h-screen">
                {/* <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAMZ4GbRFYSevy7tMaiH5s0JmMBBXc0qBA",
                  }}
                  center={mapCenter}
                  defaultZoom={12}
                  draggable={true}
                  options={{
                    zoomControl: true,
                    scrollwheel: true,
                    gestureHandling: "auto",
                  }}
                >
                  {displayedProperties.map((property) => (
                    <div
                      key={property.id}
                      lat={property.lat || 0}
                      lng={property.lon || 0}
                    >
                      
                      <MdLocationPin className="text-3xl text-black" />
                    </div>
                  ))}
                </GoogleMapReact> */}
                <GMap />
              </div>
              <div
                className="w-full h-auto p-6 bg-white rounded-md shadow-md 2xl:mb-16"
                style={{
                  boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
                  border: "1.78px solid #ECECEC",
                }}
              >
                <h3 className="text-[#B5843F] font-bold Bostonfont text-2xl line-clamp-1 py-4">
                  Agent Lika Real Estate
                </h3>
                <div className="flex flex-col flex-wrap justify-between space-y-4">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <img
                      src={properticescallicon}
                      alt="Phone Icon"
                      className="h-[1.5rem] w-[1.5rem]"
                    />
                    <p className="text-[#000000] opacity-70 text-lg Bostonfont">
                      +91 9863125740
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <img
                      src={properticesiconwhatshop}
                      alt="WhatsApp Icon"
                      className="h-[1.5rem] w-[1.5rem]"
                    />
                    <p className="text-[#000000] opacity-70 text-lg Bostonfont">
                      +91 9863125740
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <img
                      src={smsicon}
                      alt="Email Icon"
                      className="h-[1.5rem] w-[1.5rem]"
                    />
                    <p className="text-[#000000] opacity-70 text-lg Bostonfont">
                      Mapplinelectronic@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            <PropertyHomeScreenFeactures />
          </div>
        </>
      )}
    </div>
  );
}

export default PropertiesHomeScreen;
