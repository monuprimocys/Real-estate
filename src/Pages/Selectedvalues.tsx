import { useLocation } from "react-router-dom";

const AdvanceSelectedvalues = ({
  selectedLocationMain,
  setSelectedLocationId,
  selectedBedroom,
  setSelectbedroomsId,
  selectedBathrooms,
  setSelectbathroomsId,
  selectedPropertyType,
  setSelectPropertyType,
  selectedSortby,
  setSelectSortby,
  selectedGarage,
  setSelectGarageId,
  setSelectedLocationMain,
  setSelectedBedroom,
  setSelectedBathrooms,
  setSelectedPropertyType,
  setSelectedSortby,
  setSelectedGarage,
  minimumPrice,
  setMinimumPrice,
  maximumPrice,
  setMaximumPrice,
  minimumArea,
  setMinimumArea,
  setMaximumArea,
  maximumArea,
}) => {
  const handleRemoveLocation = () => {
    setSelectedLocationMain("");
    setSelectedLocationId("");
  };

  const handleRemoveBedroom = () => {
    setSelectedBedroom("");
    setSelectbedroomsId("");
  };

  const handleRemoveBathrooms = () => {
    setSelectedBathrooms("");
    setSelectbathroomsId("");
  };

  const handleRemovePropertyType = () => {
    setSelectedPropertyType("");
    setSelectPropertyType("");
  };

  const handleRemoveSortby = () => {
    setSelectedSortby("");
    setSelectSortby("");
  };

  const handleRemoveGarage = () => {
    setSelectedGarage("");
    setSelectGarageId("");
  };

  const handleMinimumPriceChange = () => {
    setMinimumPrice("");
    minimumPrice("");
  };

  const handleMaximumPriceChange = () => {
    setMaximumPrice("");
  };

  const handleMinimumAreaChange = () => {
    setMinimumArea("");
  };

  const handleMaximumAreaChange = () => {
    setMaximumArea("");
  };

  const handleClearAll = () => {
    setSelectedLocationMain("");
    setSelectedLocationId("");
    setSelectedBedroom("");
    setSelectbedroomsId("");
    setSelectedBathrooms("");
    setSelectbathroomsId("");
    setSelectedPropertyType("");
    setSelectPropertyType("");
    setSelectedSortby("");
    setSelectSortby("");
    setSelectedGarage("");
    setSelectGarageId("");
    setMinimumPrice("");
    setMaximumPrice("");
    setMinimumArea("");
    setMaximumArea("");
  };

  const location = useLocation();

  const isSaleOrRentPage = location.pathname === "/";

  const renderTag = (value, onRemove) => {
    if (!value) return null;
    return (
      <div className="flex items-center px-3 py-3 mb-2 mr-2  bg-[#056CB2] rounded-lg  text-white  Bostonfont font-[700] ">
        {value}
        <button className="ml-2 text-white " onClick={onRemove}>
          &#10005; {/* Cross icon */}
        </button>
      </div>
    );
  };

  return (
    <div className="p-4  rounded-lg  md:w-[90%] xl:w-[80%] mx-auto mt-10 flex justify-between  overflow-hidden flex-wrap xl:flex-nowrap">
      {/* Render each selected value with a cross icon */}
      <div
        className={`flex flex-wrap mb-4 w-full ${isSaleOrRentPage ? "hidden" : "block"
          }`}
      >
        {renderTag(selectedLocationMain, handleRemoveLocation)}
        {renderTag(selectedBedroom, handleRemoveBedroom)}
        {renderTag(selectedBathrooms, handleRemoveBathrooms)}
        {renderTag(selectedPropertyType, handleRemovePropertyType)}
        {renderTag(selectedSortby, handleRemoveSortby)}
        {renderTag(selectedGarage, handleRemoveGarage)}
        {renderTag(minimumPrice, handleMinimumPriceChange)}
        {renderTag(maximumPrice, handleMaximumPriceChange)}
        {renderTag(minimumArea, handleMinimumAreaChange)}
        {renderTag(maximumArea, handleMaximumAreaChange)}
      </div>

      {/* Clear All button */}
      <div className="2xl:w-[7%] xl:w-[11%]">
        <button
          className={`px-4 py-2 text-[#B58440] transition duration-200  rounded-lg  font-bold bg-white shadow-sm ${isSaleOrRentPage ? "hidden" : "block"
            }`}
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default AdvanceSelectedvalues;
