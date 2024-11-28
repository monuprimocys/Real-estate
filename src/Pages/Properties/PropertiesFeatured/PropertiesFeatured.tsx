import properticeicon from "../../../assets/Image/properticeicon.png";
import Location from "../Location/Location";
import properticescallicon from "../../../assets/Image/properticeiconcall.png";
import properticesiconwhatshop from "../../../assets/Image/properticeiconwhatshp.png";
import smsicon from "../../../assets/Image/sms.jpg";
import BtnwithoutArrow from "../../../componets/Buttons/BtnwithoutArrow";
import FormScheduleTour from "../FormScheduleTour/FormScheduleTour";

function PropertiesFeatured() {
  return (
    <div className="w-full h-auto space-y-8 text-white">
      {/* Features Section */}
      <div
        className="md:w-[90%] xl:w-[76%] 2xl:w-[68.1%] mx-auto p-6 w-[90%] rounded-md h-auto bg-white shadow-md relative xl:left-[6.8%] 2xl:left-[5%] "
        style={{
          boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
          border: "1.78px solid #ECECEC",
        }}
      >
        <div className="w-full h-auto">
          <h3 className="text-[#B5843F] font-bold Bostonfont text-2xl line-clamp-1 py-4">
            Features
          </h3>
          <div className="flex px-3 space-x-8">
            {/* First Column */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <img
                  src={properticeicon}
                  alt="Furnished Icon"
                  className="mr-2 h-[1.5rem] w-[1.5rem]"
                />
                <p className="text-[#000000] opacity-[70%] text-lg Bostonfont">
                  Furnished
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={properticeicon}
                  alt="Ownership Certificate Icon"
                  className="mr-2 h-[1.5rem] w-[1.5rem]"
                />
                <p className="text-[#000000] opacity-[70%] text-lg Bostonfont">
                  With Ownership Certificate
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <img
                  src={properticeicon}
                  alt="Garage Icon"
                  className="mr-2 h-[1.5rem] w-[1.5rem]"
                />
                <p className="text-[#000000] opacity-[70%] text-lg Bostonfont">
                  Garage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div
        className="md:w-[90%] xl:w-[76%] 2xl:w-[68.1%] mx-auto p-6 w-[90%] rounded-md h-auto bg-white shadow-md relative xl:left-[6.8%] 2xl:left-[5%]"
        style={{
          boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
          border: "1.78px solid #ECECEC",
        }}
      >
        <Location />
      </div>

      {/* Content Section */}
      <div
        className="md:w-[90%] xl:w-[76%] 2xl:w-[68.1%] mx-auto p-6 w-[90%] rounded-md h-auto bg-[#FFF7ED] shadow-md relative xl:left-[6.8%] 2xl:left-[5%]"
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
              This is a common note that can be displayed on all properties but
              controlled from one simple option.
            </p>
          </div>
        </div>
      </div>

      <div
        className="md:w-[90%] xl:w-[76%] 2xl:w-[68.1%] mx-auto p-6 w-[90%] rounded-md h-auto bg-white shadow-md relative xl:left-[6.8%] 2xl:left-[5%] "
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
                +91 9863125740
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
                +91 9863125740
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
                Mapplinelectronic@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full pt-8">
          <BtnwithoutArrow label="Know More" />
        </div>
      </div>

      {/* form */}

      <div
        className="md:w-[90%] xl:w-[76%] 2xl:w-[68.1%] mx-auto py-6 px-14 w-[90%] rounded-md h-auto bg-white shadow-md relative xl:left-[6.8%] 2xl:left-[5%] "
        style={{
          boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
          border: "1.78px solid #ECECEC",
        }}
      >
        <div className="w-full h-auto">
          <h3 className="text-[#B5843F] font-bold Bostonfont text-2xl line-clamp-1 py-4">
            Schedule A Tour
          </h3>
          <div className="flex flex-wrap items-center justify-between space-y-4 md:space-y-0 ">
            {/* form  for scheduling*/}
            <div className="w-full ">
              <FormScheduleTour />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full pt-8">
          <BtnwithoutArrow label="Schedule" />
        </div>
      </div>
    </div>
  );
}

export default PropertiesFeatured;
