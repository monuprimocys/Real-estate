import React, { useState, useEffect, useCallback } from "react";
import searchicon from "../../assets/Image/search-icon.png";
import dropdown from "../../assets/Image/dropdwon-icon.png";
import Advanceserachbtn from "../Buttons/Advanceserachbtn";
import AdvanceSearchiconminus from "../../assets/Image/add.png";
import AdvanceSearchiconplus from "../../assets/Image/add1.png";
import dollar from "../../assets/Image/dollaricon.png";
import Advanceserachheading from "../Headingcontent/Advanceserachheading";
import areicon from "../../assets/Image/areadropdwonico.png";
import { useGet_all_main_locationMutation } from "../../app/api/PropertyScreenFiltterApi/get_all_main_location_api";
import { useGet_bedroomMutation } from "../../app/api/PropertyScreenFiltterApi/get_bedroom_api";
import { useGet_bathroomMutation } from "../../app/api/PropertyScreenFiltterApi/get_bathroom_api";
import { useGet_property_typeMutation } from "../../app/api/PropertyScreenFiltterApi/get_prperty_type_api";
import { useGet_sortby_optionsMutation } from "../../app/api/PropertyScreenFiltterApi/sortby_api";
import { useGet_all_garagesMutation } from "../../app/api/PropertyScreenFiltterApi/get_all_garages_api";
import { useGet_all_property_featureMutation } from "../../app/api/PropertyScreenFiltterApi/get_all_property_feature_api";
import { useGet_all_filtterMutation } from "../../app/api/PropertyScreenFiltterApi/filtter_api";
import { useGet_all_statusMutation } from "../../app/api/PropertyScreenFiltterApi/get_all_status_api";
import { useDispatch } from "react-redux";
import {
  reset_filters,
  update_multiple_filters,
} from "../../app/Slices/PropertyScreenFiltter/main_filtter/filtter_Slice";
import { Toaster, toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import AdvanceSelectedvalues from "../../Pages/Selectedvalues";

function AdvanceSerach() {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [locations, setLocations] = useState<any[]>([]);
  const [bedrooms, setBedrooms] = useState<any[]>([]);
  const [bathrooms, setBathrooms] = useState<any[]>([]);
  const [propertyTypes, setPropertyTypes] = useState<any[]>([]);
  const [sortOptions, setSortOptions] = useState<any[]>([]);
  const [garages, setGarages] = useState<any[]>([]);
  const [features, setFeatures] = useState<any[]>([]);
  const [status, setStatus] = useState<any[]>([]);
  const [selectedLocationId, setSelectedLocationId] = useState(
    sessionStorage.getItem("selectedLocationId") || ""
  );
  const [selectbedroomsId, setSelectbedroomsId] = useState(() => {
    return sessionStorage.getItem("selectbedroomsId") || "";
  });
  const [selectbathroomsId, setSelectbathroomsId] = useState(() => {
    return sessionStorage.getItem("selectbathroomsId") || "";
  });
  const [selectPropertyType, setSelectPropertyType] = useState(() => {
    return sessionStorage.getItem("selectPropertyType") || "";
  });
  const [selectSortby, setSelectSortby] = useState(() => {
    return sessionStorage.getItem("selectSortby") || "";
  });
  const [selectGarageId, setSelectGarageId] = useState(
    sessionStorage.getItem("selectGarageId") || ""
  );
  const [minimumPrice, setMinimumPrice] = useState("");
  const [maximumPrice, setMaximumPrice] = useState("");
  const [minimumArea, setMinimumArea] = useState("");
  const [maximumArea, setMaximumArea] = useState("");
  const [selectedFeatureIds, setSelectedFeatureIds] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const [active, setActive] = useState(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();
    if (location.pathname === "/forrent") {
      return "3";
    }
    if (location.pathname === "/forsale") {
      return "2";
    }
    return "2"; // Default value
  });

  // all dropdwon values

  const [selectedLocationMain, setSelectedLocationMain] = useState(
    sessionStorage.getItem("selectedLocationMain") || ""
  );
  const [selectedBedroom, setSelectedBedroom] = useState(() => {
    return sessionStorage.getItem("selectedBedroom") || "";
  });
  const [selectedbathrooms, setSelectedbathrooms] = useState(() => {
    return sessionStorage.getItem("selectedbathrooms") || "";
  });
  const [selectedPropertyType, setSelectedPropertyType] = useState(() => {
    return sessionStorage.getItem("selectedPropertyType") || "";
  });
  const [selectedSortby, setSelectedSortby] = useState(() => {
    return sessionStorage.getItem("selectedSortby") || "";
  });
  const [selectedGarage, setSelectedGarage] = useState(
    sessionStorage.getItem("selectedGarage") || ""
  );

  const location = useLocation();

  const isSaleOrRentPage =
    location.pathname === "/forsale" || location.pathname === "/forrent";

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (location.pathname === "/forsale") {
  //     setActive("2");

  //   } else if (location.pathname === "/forrent") {
  //     setActive("3");

  //   }
  // }, [location.pathname]);

  // All type of api
  const [getAllLocations] = useGet_all_main_locationMutation();
  const [getBedrooms] = useGet_bedroomMutation();
  const [getBathrooms] = useGet_bathroomMutation();
  const [getPropertyTypes] = useGet_property_typeMutation();
  const [getSortbyOptions] = useGet_sortby_optionsMutation();
  const [getAllGarages] = useGet_all_garagesMutation();
  const [getAllFeature] = useGet_all_property_featureMutation();
  const [getAllStatus] = useGet_all_statusMutation();
  const [filterAllDropDown] = useGet_all_filtterMutation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          locationResponse,
          bedroomResponse,
          bathroomResponse,
          propertyTypeResponse,
          sortbyResponse,
          garageResponse,
          featureResponse,
          statusResponse,
        ] = await Promise.all([
          getAllLocations().unwrap(),
          getBedrooms().unwrap(),
          getBathrooms().unwrap(),
          getPropertyTypes().unwrap(),
          getSortbyOptions().unwrap(),
          getAllGarages().unwrap(),
          getAllFeature().unwrap(),
          getAllStatus().unwrap(),
        ]);

        if (locationResponse.response_code === "1")
          setLocations(locationResponse.all_main_location || []);
        if (bedroomResponse.response_code === "1")
          setBedrooms(bedroomResponse.all_bedroom || []);
        if (bathroomResponse.response_code === "1")
          setBathrooms(bathroomResponse.all_bathroom || []);
        if (propertyTypeResponse.response_code === "1")
          setPropertyTypes(propertyTypeResponse.all_property_type || []);
        if (sortbyResponse.response_code === "1")
          setSortOptions(sortbyResponse.all_sortby || []);
        if (garageResponse.response_code === "1")
          setGarages(garageResponse.all_garages || []);
        if (featureResponse.response_code === "1")
          setFeatures(featureResponse.all_parent_feature || []);

        if (statusResponse.response_code === "1") {
          // Filter out the item with id "1" from the status array
          const filteredStatus = statusResponse.all_parent_status.filter(
            (status) => status.id !== "1"
          );
          setStatus(filteredStatus);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [
    getAllLocations,
    getBedrooms,
    getBathrooms,
    getPropertyTypes,
    getSortbyOptions,
    getAllGarages,
    getAllFeature,
    getAllStatus,
  ]);

  // location dropdown value

  const handleChangeLocationDropDwon = (event) => {
    const selectedId = event.target.value;
    const selectedOption = event.target.options[event.target.selectedIndex];
    const mainLocation = selectedOption.text;

    setSelectedLocationId(selectedId);
    setSelectedLocationMain(mainLocation);

    // Persist selected location in sessionStorage
    sessionStorage.setItem("selectedLocationId", selectedId);
    sessionStorage.setItem("selectedLocationMain", mainLocation);
    // on change location then call the handleFilterClick funtion '
    // handleFilterClick();

  };

  // bedrooms dropdown values
  const handleChangebedroomsDropDwon = (event) => {
    const selectedId = event.target.value;
    setSelectbedroomsId(selectedId);

    // Find the corresponding bedroom name from options
    const selectedOption = event.target.options[event.target.selectedIndex];
    const ValuesBedroom = selectedOption.text;
    setSelectedBedroom(ValuesBedroom);

    // Store selected values in sessionStorage
    sessionStorage.setItem("selectbedroomsId", selectedId);
    sessionStorage.setItem("selectedBedroom", ValuesBedroom);
  };

  // bathrooms dropdown values

  const handleChangebathroomsDropDwon = (event) => {
    const selectedId = event.target.value;
    setSelectbathroomsId(selectedId);
    const selectedOption = event.target.options[event.target.selectedIndex];
    const ValuesBedroom = selectedOption.text;
    setSelectedbathrooms(ValuesBedroom);

    sessionStorage.setItem("selectbathroomsId", selectedId);
    sessionStorage.setItem("selectedbathrooms", ValuesBedroom);
  };

  // property type dropdown values

  const handleChangePropertyTypeDropDwon = (event) => {
    const selectedId = event.target.value;
    setSelectPropertyType(selectedId);
    const selectedOption = event.target.options[event.target.selectedIndex];
    const valuesproperty = selectedOption.text;
    setSelectedPropertyType(valuesproperty);

    sessionStorage.setItem("selectPropertyType", selectedId);
    sessionStorage.setItem("selectedPropertyType", valuesproperty);
  };

  // sortby dropdown values
  const handleChangeSortbyDropDwon = (event) => {
    const selectedId = event.target.value;
    setSelectSortby(selectedId);
    const selectedOption = event.target.options[event.target.selectedIndex];
    const valuessort = selectedOption.text;
    setSelectedSortby(valuessort);
    sessionStorage.setItem("selectSortby", selectedId);
    sessionStorage.setItem("selectedSortby", valuessort);
  };

  // garages dropdown values

  const handleChangeGarageDropDwon = (event) => {
    const selectedId = event.target.value;
    setSelectGarageId(selectedId);
    const selectedOption = event.target.options[event.target.selectedIndex];
    const valuesgarage = selectedOption.text;
    setSelectedGarage(valuesgarage);
    sessionStorage.setItem("selectGarageId", selectedId);
    sessionStorage.setItem("selectedGarage", valuesgarage);
  };

  // handal features input
  const toggleFilter = useCallback((id) => {
    setActiveFilters((prevFilters) => {
      const updatedFilters = prevFilters.includes(id)
        ? prevFilters.filter((filterId) => filterId !== id)
        : [...prevFilters, id];

      // Convert activeFilters to a comma-separated string of IDs
      const selectedFeatureIds = updatedFilters.join(",");
      setSelectedFeatureIds(selectedFeatureIds);

      return updatedFilters;
    });
  }, []);

  const dispatch = useDispatch();

  type FilterDropDownResponse = {
    response_code: string;
    filter_property?: any[];
    message?: string;
  };

  const handleFilterClick = useCallback(async () => {
    // Ensure at least one filter is selected
    if (location.pathname === "/") {
      navigate("/properties");
    } else {
      if (
        !(
          selectedLocationId ||
          selectbedroomsId ||
          selectbathroomsId ||
          selectPropertyType ||
          selectSortby ||
          selectGarageId ||
          minimumPrice ||
          maximumPrice ||
          minimumArea ||
          maximumArea ||
          selectedFeatureIds ||
          active
        )
      ) {
        toast.error("Please select or enter at least one value.");
        return;
      }

      try {
        // Simulating API call to get filtered data
        const filterAllDropDownResponse: FilterDropDownResponse =
          await filterAllDropDown({
            location: selectedLocationId,
            bedroom: selectbedroomsId,
            bathroom: selectbathroomsId,
            type: selectPropertyType,
            sortby: selectSortby,
            garages: selectGarageId,
            min_price: minimumPrice,
            max_price: maximumPrice,
            min_area: minimumArea,
            max_area: maximumArea,
            features: selectedFeatureIds,
            status: active,
          }).unwrap();

        const { response_code, filter_property, message } =
          filterAllDropDownResponse;

        console.log(
          " the response code and response property valus",
          filterAllDropDownResponse.filter_property
        );

        if (response_code === "1") {
          if (filter_property?.length) {
            // Update Redux with the entire response
            dispatch(
              update_multiple_filters({
                filterAllDropDownResponse,
              })
            );

            toast.success(message);
          } else {
            console.warn("Response code is 1, but no properties found.");

            // Reset store if no properties found
            dispatch(reset_filters());
          }
        } else if (response_code === "0") {
          console.warn("No properties found:", message);
          toast.error(message);

          // Reset store for response_code 0
          dispatch(reset_filters());
        } else {
          console.warn("Unexpected response code:", response_code);
        }
      } catch (error) {
        console.error("Unexpected error in handleFilterClick:", error);
        toast.error("An error occurred while fetching the properties.");
      }
    }
  }, [
    dispatch,
    selectedLocationId,
    selectbedroomsId,
    selectbathroomsId,
    selectPropertyType,
    selectSortby,
    selectGarageId,
    minimumPrice,
    maximumPrice,
    minimumArea,
    maximumArea,
    selectedFeatureIds,
    active,
    filterAllDropDown,
    reset_filters,
    toast,
  ]);

  const toggleAdvancedSearch = useCallback(() => {
    setShowAdvancedSearch((prev) => !prev);
  }, []);



  return (
    <>
      <div
        className={`w-[90%] 2xl:w-[80%] xl:w-[80%] mx-auto rounded-lg flex flex-col items-center relative bg-[#FFFFFF] px-8 mt-10 ${showAdvancedSearch ? "pb-4" : "pb-1"
          }`}
      >
        <Toaster />

        {/* status buttons */}
        <div
          className={`absolute top-[-1.5rem] md:left-8 2xl:w-[18%] h-[2.8rem] bg-[#FFFFFF] rounded-3xl flex justify-between items-center ${isSaleOrRentPage ? "hidden" : "block"
            }`}
        >
          <button
            type="button"
            className={`px-10 h-full transition-colors duration-300 rounded-3xl font-medium ${active === "2"
              ? "bg-[#B5843F] text-white"
              : "bg-white text-black opacity-65"
              }`}
            onClick={() => setActive("2")}
          >
            Sale
          </button>
          <button
            type="button"
            className={`px-10 h-full transition-colors duration-300 rounded-3xl font-medium ${active === "3"
              ? "bg-[#B5843F] text-white"
              : "bg-white text-black opacity-65"
              }`}
            onClick={() => setActive("3")}
          >
            Rent
          </button>
        </div>

        {/* Input fields */}
        <div
          className={`grid items-center gap-4 pt-10 pb-12 mx-auto md:mt-4 md:py-16 xl:justify-between xl:flex md:grid-rows-2 md:grid-cols-2 ${showAdvancedSearch ? "xl:w-[103%] w-full" : "w-full"
            }`}
        >
          {/* Location Dropdown */}
          <div className="xl:w-[22%] 2xl:w-[23.2%]">
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-semibold text-black capitalize"
            >
              Location
            </label>
            <div className="relative">
              <select
                id="location"
                className="w-full px-4 py-3 pr-10 text-gray-700 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-[#B5843F] cursor-pointer"
                onChange={handleChangeLocationDropDwon}
                value={selectedLocationId}
              >
                <option value="">Select Location</option>
                {locations.length > 0 ? (
                  locations.map((location) => (
                    <option key={location.id} value={location.id} data-id={location.id}>
                      {location.main_location}
                    </option>
                  ))
                ) : (
                  <option disabled>No locations available</option>
                )}
              </select>


              <span className="absolute transform -translate-y-1/2 right-4 top-1/2">
                <img src={dropdown} alt="Dropdown Icon" className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Bedroom Dropdown */}
          <div className="xl:w-[22%] 2xl:w-[23.2%]">
            <label
              htmlFor="bedroom"
              className="block mb-2 text-sm font-semibold text-black capitalize"
            >
              Bedroom
            </label>
            <div className="relative">
              <select
                id="bedroom"
                className="w-full px-4 py-3 pr-10 text-gray-700 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-[#B5843F] cursor-pointer"
                value={selectbedroomsId}
                onChange={handleChangebedroomsDropDwon}
              >
                {/* lable */}
                <option value="">Select bedrooms</option>
                {bedrooms.length > 0 ? (
                  bedrooms.map((bedroom) => (
                    <option
                      key={bedroom.id}
                      value={bedroom.id}
                      data-id={bedroom.id}
                    >
                      {bedroom.number_of_room} Bedroom
                    </option>
                  ))
                ) : (
                  <option disabled>No bedrooms available</option>
                )}
              </select>

              <span className="absolute transform -translate-y-1/2 right-4 top-1/2">
                <img src={dropdown} alt="Dropdown Icon" className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Bathroom Dropdown */}
          <div className="xl:w-[22%] 2xl:w-[23.2%]">
            <label
              htmlFor="bathroom"
              className="block mb-2 text-sm font-semibold text-black capitalize"
            >
              Bathroom
            </label>
            <div className="relative">
              <select
                id="bathroom"
                className="w-full px-4 py-3 pr-10 text-gray-700 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-[#B5843F] cursor-pointer"
                value={selectbathroomsId}
                onChange={handleChangebathroomsDropDwon}
              >
                {/* lable */}
                <option value="">Select bathroom</option>
                {bathrooms.length > 0 ? (
                  bathrooms.map((bathroom) => (
                    <option
                      key={bathroom.id}
                      value={bathroom.id}
                      data-id={bathroom.id}
                    >
                      {bathroom.number_of_bathroom} Bathroom
                    </option>
                  ))
                ) : (
                  <option disabled>No bathrooms available</option>
                )}
              </select>

              <span className="absolute transform -translate-y-1/2 right-4 top-1/2">
                <img src={dropdown} alt="Dropdown Icon" className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Property Type Dropdown */}
          <div className="xl:w-[22%] 2xl:w-[23.2%]">
            <label
              htmlFor="propertyType"
              className="block mb-2 text-sm font-semibold text-black capitalize"
            >
              Property Type
            </label>
            <div className="relative">
              <select
                id="propertyType"
                className="w-full px-4 py-3 pr-10 text-gray-700 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-[#B5843F] cursor-pointer"
                value={selectPropertyType}
                onChange={handleChangePropertyTypeDropDwon}
              >
                {/* lable */}
                <option value="">Select property type</option>
                {propertyTypes.length > 0 ? (
                  propertyTypes.map((type) => (
                    <option key={type.id} value={type.id} data-id>
                      {type.property_type_name}
                    </option>
                  ))
                ) : (
                  <option disabled>No property types available</option>
                )}
              </select>

              <span className="absolute transform -translate-y-1/2 right-4 top-1/2">
                <img src={dropdown} alt="Dropdown Icon" className="w-4 h-4" />
              </span>
            </div>
          </div>

          <div
            className={`flex items-center justify-center  ${showAdvancedSearch
              ? "w-0 h-0 opacity-0"
              : "w-[43px] h-[43px] opacity-100"
              } bg-[#B5843F] rounded-lg mt-7 cursor-pointer`}
            onClick={handleFilterClick}
          >
            <div className="h-[20px] w-[20px] flex justify-center items-center">
              <img src={searchicon} alt="Search" />
            </div>
          </div>
        </div>

        <div
          className={`flex items-center justify-center  w-[100%] mx-auto  mt-[-2rem]  ${showAdvancedSearch ? "opacity-100  " : "opacity-0 h-[0.2rem] "
            } `}
        >
          <Advanceserachheading title="Advance " highlightedTitle="Search" />
        </div>
        <div
          className={`w-full transition-all duration-500 ease-in-out overflow-hidden     ${showAdvancedSearch
            ? "xl:max-h-[500px] opacity-100 overflow-hidden xl:w-[100%] 2xl:w-[101%] mx-auto w-full"
            : "max-h-0 opacity-0 transition-all overflow-hidden  w-full"
            }`}
          style={{ zIndex: 10 }}
        >
          <div className="grid w-full md:gap-x-[1rem] xl:gap-x-[1.5rem]  2xl:gap-x-[1.5rem] gap-y-[1rem]  md:gap-y-[2rem] pt-5 mx-auto xl:grid-cols-4 xl:grid-rows-1 md:grid-rows-auto md:grid-cols-2">
            <div className="xl:w-full">
              <label
                htmlFor="Garages"
                className="block mb-2 text-sm font-semibold text-black capitalize Bostonfont"
              >
                Sort by{" "}
              </label>
              <div className="relative Bostonfont">
                <select
                  id="sortby"
                  className="w-full px-4 py-3 pr-10 text-gray-700 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-[#B5843F] cursor-pointer "
                  value={selectSortby}
                  onChange={handleChangeSortbyDropDwon}
                >
                  {/* lable */}

                  <option value="">Select Sort by</option>
                  {sortOptions.length > 0 ? (
                    sortOptions.map((sortOptions) => (
                      <option
                        key={sortOptions.id}
                        value={sortOptions.id}
                        data-id={sortOptions.id}
                      >
                        {sortOptions.text}
                      </option>
                    ))
                  ) : (
                    <option disabled>No sortOptions available</option>
                  )}
                </select>
                <span className="absolute transform -translate-y-1/2 right-4 top-1/2">
                  <img src={dropdown} alt="Dropdown Icon" className="w-4 h-4" />
                </span>
              </div>
            </div>

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
                  id="MinPrice"
                  className="w-full pl-16 pr-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                  placeholder="Enter Min Price"
                  value={minimumPrice}
                  onChange={(e) => setMinimumPrice(e.target.value)}
                />
              </div>
            </div>

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
                  id="MaxPrice"
                  className="w-full pl-16 pr-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                  placeholder="Enter Max Price"
                  value={maximumPrice}
                  onChange={(e) => setMaximumPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="xl:w-full">
              <label
                htmlFor="Garages"
                className="block mb-2 text-sm font-semibold text-black capitalize Bostonfont"
              >
                Garages
              </label>
              <div className="relative Bostonfont">
                <select
                  id="garages"
                  className="w-full px-4 py-3 pr-10 text-gray-700 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-[#B5843F] cursor-pointer"
                  value={selectGarageId}
                  onChange={handleChangeGarageDropDwon}
                >
                  {/* lable */}
                  <option value="">Select Garages</option>
                  {garages.length > 0 ? (
                    garages.map((garages) => (
                      <option
                        key={garages.id}
                        value={garages.id}
                        data-id={garages.id}
                      >
                        {garages.number_of_garages}
                      </option>
                    ))
                  ) : (
                    <option disabled>No garages available</option>
                  )}
                </select>
                <span className="absolute transform -translate-y-1/2 right-4 top-1/2">
                  <img src={dropdown} alt="Dropdown Icon" className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="MinArea"
                className="block mb-2 text-sm font-semibold capitalize text-[#000000]"
              >
                Minimum Area
              </label>
              <div className="relative flex items-center mt-2">
                <input
                  type="text"
                  id="MinArea"
                  className="w-full pl-3 pr-16 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                  placeholder="Enter Min Area"
                  value={minimumArea}
                  onChange={(e) => setMinimumArea(e.target.value)}
                />
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
                <input
                  type="text"
                  id="MinArea"
                  className="w-full pl-3 pr-16 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                  placeholder="Enter Max Area"
                  value={maximumArea}
                  onChange={(e) => setMaximumArea(e.target.value)}
                />
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
          <div className="flex flex-col flex-wrap justify-between w-full mt-10 gap-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#B5843F] capitalize Bostonfont Bostonfont">
                Looking for certain features
              </h3>
            </div>
            <div className="flex flex-wrap items-center w-full gap-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`flex items-center justify-center px-6 py-2 w-fit rounded-lg fontpoppins ${activeFilters.includes(feature.id)
                    ? "bg-[#056CB2] text-white"
                    : "bg-[#EBF4F9] text-[#000000]"
                    }`}
                  onClick={() => toggleFilter(feature.id)}
                >
                  {feature.property_fetaures}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`relative flex flex-col items-center justify-center w-full  mt-3 ${showAdvancedSearch ? "" : "h-[1rem] md:mt-[1rem] mt-[1.8rem]"
            }`}
        >
          <div
            className={`flex items-center justify-center   ${showAdvancedSearch ? "opacity-100 mt-9 " : "  opacity-0"
              } `}
            onClick={handleFilterClick}
          >
            <Advanceserachbtn />
          </div>
          <div
            className={`relative flex items-center justify-center px-7 py-4 text-lg text-white bg-black cursor-pointer rounded-2xl fontpoppins blur-none ${showAdvancedSearch
              ? "opacity-100 bottom-[-2.5rem]"
              : "md:bottom-8 bottom-10 "
              }`}
            onClick={toggleAdvancedSearch}
          >
            <div className="flex items-center justify-between">
              <div>Advance Search </div>
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

      <div className="w-[100%]   mx-auto overflow-hidden ">
        <AdvanceSelectedvalues
          selectedLocationMain={selectedLocationMain}
          setSelectedLocationId={setSelectedLocationId}
          selectedBedroom={selectedBedroom}
          setSelectbedroomsId={setSelectbedroomsId}
          selectedBathrooms={selectedbathrooms}
          setSelectbathroomsId={setSelectbathroomsId}
          selectedPropertyType={selectedPropertyType}
          setSelectPropertyType={setSelectPropertyType}
          selectedSortby={selectedSortby}
          setSelectSortby={setSelectSortby}
          selectedGarage={selectedGarage}
          setSelectGarageId={setSelectGarageId}
          setSelectedLocationMain={setSelectedLocationMain}
          setSelectedBedroom={setSelectedBedroom}
          setSelectedBathrooms={setSelectedbathrooms}
          setSelectedPropertyType={setSelectedPropertyType}
          setSelectedSortby={setSelectedSortby}
          setSelectedGarage={setSelectedGarage}
          setMinimumPrice={setMinimumPrice}
          minimumPrice={minimumPrice}
          setMaximumPrice={setMaximumPrice}
          maximumPrice={maximumPrice}
          setMinimumArea={setMinimumArea}
          minimumArea={minimumArea}
          setMaximumArea={setMaximumArea}
          maximumArea={maximumArea}
        />
      </div>
    </>
  );
}

export default AdvanceSerach;
