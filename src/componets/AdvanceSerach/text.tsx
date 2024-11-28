import { useState, useEffect } from "react";
import searchicon from "../../assets/Image/search-icon.png";
import dropdown from "../../assets/Image/dropdwon-icon.png";
import Advanceserachbtn from "../Buttons/Advanceserachbtn";
import AdvanceSearchiconminus from "../../assets/Image/add.png";
import AdvanceSearchiconplus from "../../assets/Image/add1.png";
import dollar from "../../assets/Image/dollaricon.png";
import Advanceserachheading from "../Headingcontent/Advanceserachheading";
import areicon from "../../assets/Image/areadropdwonico.png";
import { useGet_all_main_locationMutation } from "../../app/api/PropertyScreenFiltterApi/get_all_main_location_api";
import {useGet_sortby_optionsMutation} from  "../../app/api/PropertyScreenFiltterApi/sortby_api"
import {useGet_property_typeMutation} from "../../app/api/PropertyScreenFiltterApi/get_prperty_type_api"
import {useGet_bedroomMutation} from "../../app/api/PropertyScreenFiltterApi/get_bedroom_api"
import {useGet_bathroomMutation} from "../../app/api/PropertyScreenFiltterApi/get_bathroom_api"
import {useGet_all_property_featureMutation} from "../../app/api/PropertyScreenFiltterApi/get_all_property_feature_api"
import {useGet_all_garagesMutation} from "../../app/api/PropertyScreenFiltterApi/get_all_garages_api"


type Filter =
  | "centralCooling"
  | "centralHeating"
  | "firePlace"
  | "fireAlarm"
  | "furnished"
  | "laundryRoom"
  | "swimmingPool"
  | "unfurnished"
  | "withOwnershipCertificate"
  | null;


function AdvanceSerach() {
  const [active, setActive] = useState("buy");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Filter>("centralCooling");
  const [locations, setLocations] = useState([]);
  const [bedrooms, setBedrooms] = useState([]);
  const [bathrooms, setBathrooms] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);

  // API hooks
  const [getAllLocations] = useGet_all_main_locationMutation();
  const [getBedrooms] = useGet_bedroomMutation();
  const [getBathrooms] = useGet_bathroomMutation();
  const [getPropertyTypes] = useGet_property_typeMutation();

  // Fetch and set data for all dropdowns
  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationResponse = await getAllLocations().unwrap();
        if (locationResponse.response_code === '1') {
          setLocations(locationResponse.all_main_location);
        }

        const bedroomResponse = await getBedrooms().unwrap();
        if (bedroomResponse.response_code === '1') {
          setBedrooms(bedroomResponse.bedroomOptions); // Assuming 'bedroomOptions' is the correct field
        }

        const bathroomResponse = await getBathrooms().unwrap();
        if (bathroomResponse.response_code === '1') {
          setBathrooms(bathroomResponse.bathroomOptions); // Assuming 'bathroomOptions' is the correct field
        }

        const propertyTypeResponse = await getPropertyTypes().unwrap();
        if (propertyTypeResponse.response_code === '1') {
          setPropertyTypes(propertyTypeResponse.propertyTypeOptions); // Assuming 'propertyTypeOptions' is the correct field
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [getAllLocations, getBedrooms, getBathrooms, getPropertyTypes]);

  

  // Toggle Advanced Search visibility
  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch((prev) => !prev);
  };
  return (
    <>
      <div
        className={`w-[90%] 2xl:w-[80%] xl:w-[80%] mx-auto bg-[#FFFFFF] rounded-lg flex flex-col items-center relative px-8  mt-10    ${
          showAdvancedSearch ? "pb-4 " : "pb-1"
        }`}
      >
        {/ Top buttons /}
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

        {/ Input fields /}

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
        {/ Smoothly revealed advanced search fields /}
        <div
          className={`w-full transition-all duration-500 ease-in-out overflow-hidden     ${
            showAdvancedSearch
              ? "xl:max-h-[500px] opacity-100 overflow-hidden xl:w-[100%] 2xl:w-[101%] mx-auto w-full"
              : "max-h-0 opacity-0 transition-all overflow-hidden  w-full"
          }`}
          style={{ zIndex: 10 }} // Ensuring it is above background
        >
          <div className="grid w-full md:gap-x-[1rem] xl:gap-x-[1.5rem]  2xl:gap-x-[1.5rem] gap-y-[1rem]  md:gap-y-[2rem] pt-5 mx-auto xl:grid-cols-4 xl:grid-rows-1 md:grid-rows-auto md:grid-cols-2">
            {/ Sort by /}
            <div className="xl:w-full">
              <label
                htmlFor="Garages"
                className="block mb-2 text-sm font-semibold text-black capitalize Bostonfont"
              >
                Sort by{" "}
              </label>
              <div className="relative Bostonfont">
                <select
                  id="Garages"
                  className="md:w-full w-full px-4 py-3 pr-10 text-gray-700 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-[#B5843F] Bostonfont cursor-pointer"
                >
                  <option value="">All</option>
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

            {/  Minimum Price /}
            <div className="w-full">
              <label
                htmlFor="MinArea"
                className="block mb-2 text-sm font-semibold capitalize text-[#000000]"
              >
                Minimum Price
              </label>
              <div className="relative flex items-center mt-2 ">
                <span className="absolute left-0 bg-[#B5843D36] h-full flex justify-center items-center w-fit px-4 rounded-lg">
                  <img
                    src={dollar}
                    alt="Dollar Icon"
                    className="object-contain w-[1.5rem] h-[1.5rem]"
                  />
                </span>
                <input
                  type="text"
                  id="MinArea"
                  className="w-full pl-16 pr-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                  placeholder="Enter Min Price"
                />
              </div>
            </div>

            {/  Maximum Price /}
            <div className="w-full">
              <label
                htmlFor="MinArea"
                className="block mb-2 text-sm font-semibold capitalize text-[#000000]"
              >
                Maximum Price{" "}
              </label>
              <div className="relative flex items-center mt-2 ">
                <span className="absolute left-0 bg-[#B5843D36] h-full flex justify-center items-center w-fit px-4 rounded-lg">
                  <img
                    src={dollar}
                    alt="Dollar Icon"
                    className="object-contain w-[1.5rem] h-[1.5rem]"
                  />
                </span>
                <input
                  type="text"
                  id="MinArea"
                  className="w-full pl-16 pr-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                  placeholder="Enter Max Price"
                />
              </div>
            </div>
            {/  Garages dropdown /}
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
                  <option value="">All Garages</option>
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

            {/ minimum area dropwon /}
            <div className="w-full">
              <label
                htmlFor="MinArea"
                className="block mb-2 text-sm font-semibold capitalize text-[#000000]"
              >
                Minimum Area
              </label>
              <div className="relative flex items-center mt-2">
                {/ Minimum Area Input /}
                <input
                  type="text"
                  id="MinArea"
                  className="w-full pl-3 pr-16 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                  placeholder="Enter Min Area"
                />
                {/ Dropdown for Units /}
                <div className="absolute right-0 top-0 bottom-0 flex items-center bg-[#B5843D36] rounded-lg justify-between  py-1 ">
                  <select
                    id="MinAreaUnit"
                    className="text-lg  border-none cursor-pointer focus:outline-none focus:border-[#B5843F] text-[#B5843F] w-full bg-transparent   pr-10 px-2"
                  >
                    <option value="m2" className="w-full">
                      m²
                    </option>
                    <option value="ft2" className="w-full">
                      ft²
                    </option>
                  </select>
                  <span className="absolute transform -translate-y-1/2 right-3 top-1/2">
                    <img
                      src={areicon}
                      alt="Dropdown Icon"
                      className="w-4 h-4"
                    />
                  </span>
                </div>
              </div>
            </div>

            {/*Maximum Area dropdown */}
            <div className="w-full">
              <label
                htmlFor="MinArea"
                className="block mb-2 text-sm font-semibold capitalize text-[#000000]"
              >
                Maximum Area
              </label>
              <div className="relative flex items-center mt-2">
                {/ Minimum Area Input /}
                <input
                  type="text"
                  id="MinArea"
                  className="w-full pl-3 pr-16 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                  placeholder="Enter Max Area"
                />
                {/ Dropdown for Units /}
                <div className="absolute right-0 top-0 bottom-0 flex items-center bg-[#B5843D36] rounded-lg justify-between  py-1 ">
                  <select
                    id="MinAreaUnit"
                    className="text-lg  border-none cursor-pointer focus:outline-none focus:border-[#B5843F] text-[#B5843F] w-full bg-transparent   pr-10 px-2"
                  >
                    <option value="m2" className="w-full">
                      m²
                    </option>
                    <option value="ft2" className="w-full">
                      ft²
                    </option>
                  </select>
                  <span className="absolute transform -translate-y-1/2 right-3 top-1/2">
                    <img
                      src={areicon}
                      alt="Dropdown Icon"
                      className="w-4 h-4"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/ content text fillter  /}
          <div className="flex flex-col flex-wrap justify-between w-full mt-10 gap-y-6">
            {/ heading /}
            <div>
              <h3 className="text-xl font-semibold text-[#B5843F] capitalize Bostonfont Bostonfont">
                Looking for certain features
              </h3>
            </div>

            {/ listing  /}
            <div className="flex flex-wrap items-center w-full gap-8">
              <div
                className={`flex items-center justify-center px-6 py-2 w-fit bg-[#056CB2] rounded-lg fontpoppins ${
                  activeFilter === "centralCooling"
                    ? "bg-[#056CB2] text-white"
                    : "bg-[#EBF4F9] text-[#000000]"
                }`}
                onClick={() => setActiveFilter("centralCooling")}
              >
                Central Cooling (46)
              </div>
              <div
                className={`flex items-center justify-center px-6 py-2 w-fit bg-[#056CB2] rounded-lg fontpoppins ${
                  activeFilter === "centralHeating"
                    ? "bg-[#056CB2] text-white"
                    : "bg-[#EBF4F9] text-[#000000]"
                }`}
                onClick={() => setActiveFilter("centralHeating")}
              >
                Central Heating (51)
              </div>
              <div
                className={`flex items-center justify-center px-6 py-2 w-fit bg-[#056CB2] rounded-lg fontpoppins ${
                  activeFilter === "firePlace"
                    ? "bg-[#056CB2] text-white"
                    : "bg-[#EBF4F9] text-[#000000]"
                }`}
                onClick={() => setActiveFilter("firePlace")}
              >
                Fire Place (21)
              </div>
              <div
                className={`flex items-center justify-center px-6 py-2 w-fit bg-[#056CB2] rounded-lg fontpoppins ${
                  activeFilter === "fireAlarm"
                    ? "bg-[#056CB2] text-white"
                    : "bg-[#EBF4F9] text-[#000000]"
                }`}
                onClick={() => setActiveFilter("fireAlarm")}
              >
                Fire Alarm (30)
              </div>
              <div
                className={`flex items-center justify-center px-6 py-2 w-fit bg-[#056CB2] rounded-lg fontpoppins ${
                  activeFilter === "furnished"
                    ? "bg-[#056CB2] text-white"
                    : "bg-[#EBF4F9] text-[#000000]"
                }`}
                onClick={() => setActiveFilter("furnished")}
              >
                Furnished (144)
              </div>
              <div
                className={`flex items-center justify-center px-6 py-2 w-fit bg-[#056CB2] rounded-lg fontpoppins ${
                  activeFilter === "laundryRoom"
                    ? "bg-[#056CB2] text-white"
                    : "bg-[#EBF4F9] text-[#000000]"
                }`}
                onClick={() => setActiveFilter("laundryRoom")}
              >
                Laundry Room (4)
              </div>
              <div
                className={`flex items-center justify-center px-6 py-2 w-fit bg-[#056CB2] rounded-lg fontpoppins ${
                  activeFilter === "swimmingPool"
                    ? "bg-[#056CB2] text-white"
                    : "bg-[#EBF4F9] text-[#000000]"
                }`}
                onClick={() => setActiveFilter("swimmingPool")}
              >
                Swimming Pool (6)
              </div>
              <div
                className={`flex items-center justify-center px-6 py-2 w-fit bg-[#056CB2] rounded-lg fontpoppins ${
                  activeFilter === "unfurnished"
                    ? "bg-[#056CB2] text-white"
                    : "bg-[#EBF4F9] text-[#000000]"
                }`}
                onClick={() => setActiveFilter("unfurnished")}
              >
                Unfurnished (17)
              </div>
              <div
                className={`flex items-center justify-center px-6 py-2 w-fit bg-[#056CB2] rounded-lg fontpoppins ${
                  activeFilter === "withOwnershipCertificate"
                    ? "bg-[#056CB2] text-white"
                    : "bg-[#EBF4F9] text-[#000000]"
                }`}
                onClick={() => setActiveFilter("withOwnershipCertificate")}
              >
                With Ownership Certificate (223)
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
    </>
  );
}

export default AdvanceSerach;
