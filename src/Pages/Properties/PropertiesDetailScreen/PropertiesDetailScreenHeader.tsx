import React from "react";
import Properticesbgheaderimage from "../../../assets/Image/properticesheaderbg.png";
import { useLocation } from "react-router-dom";
import Header from "../../Header/Header";

function PropertiesDetailScreenHeader() {
  const location = useLocation();
  
  return (
    <>
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
        <div className="w-[90%] xl:w-[90%] mx-auto flex items-center relative mt-10">
          <div className="flex items-start justify-start w-full">
            <h4 className="text-2xl font-bold text-white Bostonfont">
              Home{location.pathname}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertiesDetailScreenHeader;
