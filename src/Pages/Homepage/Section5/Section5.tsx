import section5bgimagemain from "../../../assets/Image/section5bgimahemain.png";
import section5bgimagemain2 from "../../../assets/Image/section5bgrightimage.png";
import phone from "../../../assets/Image/phone.png";
import section5vectorline from "../../../assets/Image/linevector.png";
import circlebg from "../../../assets/Image/section5cicleimage.png";

function Section5() {
  return (
    <div className="h-auto pb-5 bg-[#B5843F] mt-14 bg-opacity-[6%] ">
      <div
        className="flex items-center justify-center  text-white  md:h-[58rem] lg:h-[65rem] xl:h-[35rem]   overflow-hidden"
        style={{
          backgroundImage: `url(${section5bgimagemain})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[90%] md:w-[88%] lg:w-[88%] xl:w-[83%] 2xl:w-[82%] mx-auto h-auto flex flex-col items-center relative justify-center mt-9">
          <div className="grid items-center justify-center w-full grid-cols-1 gap-10 xl:grid-cols-2">
            {/* Left side content */}
            <div className="flex flex-col items-center justify-center gap-5 text-center xl:items-start xl:text-left">
              <h2 className="w-full text-4xl font-bold md:text-5xl Bostonfont">
                Download Our Mobile APP
              </h2>

              <p className="text-lg font-normal md:text-2xl Bostonfont">
                Download the ultimate real estate app for seamless property
                search and deals! Get ready to explore your next home with ease.
              </p>

              {/* Center image line */}
              <div className="md:flex rotate-12 relative md:left-0 md:top-[-1.2rem] flex  justify-center items-center w-[80%] ">
                <img
                  src={section5vectorline}
                  alt="Vector Line"
                  className=" w-[10rem] h-[6rem]"
                />
              </div>

              {/* Center buttons */}
              <div className="flex flex-col items-center justify-center gap-4 md:w-full md:flex-row">
                {/* Google Play Button */}
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-3 mt-4 text-black bg-white rounded-lg md:w-44 h-14 md:mt-0"
                >
                  <div className="mr-3">
                    <svg viewBox="30 336.7 120.9 129.2" width="30">
                      <path
                        fill="#FFD400"
                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                      ></path>
                      <path
                        fill="#FF3333"
                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                      ></path>
                      <path
                        fill="#48FF48"
                        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                      ></path>
                      <path
                        fill="#3BCCFF"
                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <div className="text-xs latofont">Android App On</div>
                    <div className="text-lg font-semibold md:font-[900] Bostonfont latofont">
                      Google Play
                    </div>
                  </div>
                </button>

                {/* phone Store Button */}
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-3 mt-4 text-black bg-white rounded-lg md:w-44 h-14 md:mt-0"
                >
                  <div className=" w-[30%] py-2">
                    <img src={phone} alt="" className="w-full h-[2.5rem] " />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <div className="text-xs latofont">Android App On</div>
                    <div className="text-lg font-semibold md:font-[900] Bostonfont latofont">
                      Google Play
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right side image */}
            <div className="relative flex items-center justify-center h-[40vh] md:h-[48vh] xl:h-[38rem] 2xl:h-[50rem] w-full overflow-hidden  mt-2   ">
              {/* Bottom left image (background image) */}
              <div
                className="absolute md:left-[-5rem] lg:left-[-7rem] xl:left-[-9rem] w-[130%] md:w-[110%] h-[130%] md:h-[110%] bottom-[-19.5rem] rotate-[20deg] md:rotate-[55deg] xl:rotate-[20deg] hidden md:block "
                style={{
                  backgroundImage: `url(${circlebg})`,
                  backgroundSize: "contain",
                  backgroundPosition: "bottom left",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              {/* Main image */}
              <img
                src={section5bgimagemain2}
                alt="Illustration"
                className="  w-[100%] md:w-full md:h-full object-contain   absolute bottom-0 md:bottom-[-2rem]  xl:bottom-[-5.5rem] 2xl:bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
