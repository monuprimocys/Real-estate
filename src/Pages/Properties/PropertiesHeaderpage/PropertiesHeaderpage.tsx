import React from "react";
import Properticesbgheaderimage from "../../../assets/Image/properticesheaderbg.png";
import Header from "../../Header/Header";
import AdvanceSerach from "../../../componets/AdvanceSerach/AdvanceSerach";
import { useLocation } from "react-router-dom";

const PropertiesHeaderpage: React.FC = () => {
  const location = useLocation();


  // Define an array of paths where AdvanceSearch should not be displayed
  const hideAdvanceSearchPaths = ["/about", "/contact"];

  // Define the header text based on the path
  let headerText = "Home";

  if (location.pathname === "/forsale") {
    headerText = "Home/Sale";
  } else if (location.pathname === "/forrent") {
    headerText = "Home/Rent";
  } else if (location.pathname === "/contact") {
    headerText = "Home/Contact Us";
  } else if (location.pathname === "/about") {
    headerText = "Home/About Us";
  } else if (location.pathname === "/properties") {
    headerText = "Home/Properties";
  }

  return (
    <div
      className="flex flex-col w-full pb-[4rem] transition-all duration-300 ease-in-out shadow-lg cursor-pointer"
      style={{
        backgroundImage: `url(${Properticesbgheaderimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />

      {/* Conditionally render AdvanceSerach based on the current path */}
      {!hideAdvanceSearchPaths.includes(location.pathname) && <AdvanceSerach />}

      <div className="w-[90%] xl:w-[90%] mx-auto flex items-center relative mt-10">
        <div className="flex items-start justify-start w-full">
          <h4 className="text-3xl font-bold text-white Bostonfont">
            {headerText}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PropertiesHeaderpage;
