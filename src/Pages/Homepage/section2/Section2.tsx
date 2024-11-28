import secondbgimage from "../../../assets/Image/bgsecondsection.png";
import secondbgimage2 from "../../../assets/Image/secondsectionimage1.png";
import secondbgimage3 from "../../../assets/Image/secondsection2.png";
import SimpleBtn from "../../../componets/Buttons/SimpleBtn";

function Section2() {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[80vh] bg-center bg-no-repeat bg-cover  ">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${secondbgimage})`,
          opacity: 0.04, // Set the desired opacity for the background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="w-[90%] 2xl:w-[82%] xl:w-[80%] md:w-[94%] h-full -z-50  ">
        <div className="grid items-center justify-center w-full h-full grid-cols-1 gap-8 xl:grid-rows-1 xl:grid-cols-2 pt-[4rem]">
          {/* Left Column: Image */}
          <div className="flex items-center justify-center cursor-pointer">
            <img
              src={secondbgimage2}
              alt="Building facade"
              className="max-w-full md:w-[100%] h-[50vh] md:h-[60vh]  xl:w-[100%] xl:h-[70vh] 2xl:h-[60vh]"
            />
          </div>

          {/* Right Column: Text */}
          <div className="flex flex-col gap-y-5 md:w-[94%] lg:w-[95%] xl:w-[90%] 2xl:w-[100%] w-[95%] mx-auto  justify-end z-50">
            <div className="flex flex-col items-start">
              <h2 className="text-[#000000] Bostonfont text-2xl md:text-4xl font-semibold">
                We are
              </h2>
              <div className="w-[20%] md:w-[18%] md:mt-2">
                <img
                  src={secondbgimage3}
                  alt="vector"
                  className="w-full h-auto filter grayscale-0"
                />
              </div>
            </div>
            <div>
              <h3 className="Bostonfont text-[#000000] font-bold text-[30px] md:text-[40px] leading-[40px] md:leading-[50px] cursor-pointer">
                Your partner in creating a legacy building facade.
              </h3>
            </div>
            <div>
              <p className="Bostonfont text-[#343434] text-base md:text-lg">
                Welcome to Lika Real Estate, the premier destination for real
                estate in Golem. With a legacy of excellence and a commitment to
                client satisfaction, we pride ourselves on being one of the most
                trusted names in the industry. Whether you're buying, selling,
                or investing, our dedicated team of professionals is here to
                guide you every step of the way.
              </p>
            </div>
            <div className="z-40 m-0 opacity-100 cursor-pointer ">
              <SimpleBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
