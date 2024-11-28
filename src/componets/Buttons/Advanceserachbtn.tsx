import React from "react";
import serachimage from "../../assets/Image/search-normal.png";

function Advanceserachbtn() {
  return (
    <div className="flex items-center justify-center px-[4.2rem] py-4 text-lg text-white bg-[#B5843F] cursor-pointer rounded-2xl fontpoppins blur-none">
      <div className="flex items-center justify-between gap-x-3">
        <div className="w-5 h-5">
          <img
            src={serachimage}
            alt="serchicon"
            className="object-cover w-full h-full "
          />
        </div>

        <div className="">
          <p>Search</p>
        </div>
      </div>
    </div>
  );
}

export default Advanceserachbtn;
