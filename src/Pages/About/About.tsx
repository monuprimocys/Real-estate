import Headingcontent from "../../componets/Headingcontent/Headingcontent";
import PropertiesHeaderpage from "../Properties/PropertiesHeaderpage/PropertiesHeaderpage";
import aboutbgimage from "../../assets/Image/aboutsectionimage.png";
import contactbgimage from "../../assets/Image/aboutcontactbg.png";
import properticescallicon from "../../assets/Image/abouticoncall.png";
import aboutlocationicon from "../../assets/Image/asboutlocation.png";
import aboutsms from "../../assets/Image/aboutsms.jpg";
import aboutsection12 from "../../assets/Image/aboutsection12.png";
import aboutsection13 from "../../assets/Image/aboutsection13.png";
import { useLocation } from "react-router-dom";

function About() {

  return (
    <>
      <div className="w-full h-auto overflow-hidden">
        <PropertiesHeaderpage />
        <div className="flex items-center justify-center 2xl:w-[60%] mx-auto py-10 ">
          <Headingcontent
            title="Welcome to"
            highlightedTitle="Lika Real Estate"
          />
        </div>

        <div className="w-[90%]  2xl:w-[80%] mx-auto bg-[#FFFFFF] h-auto rounded-lg flex flex-col items-center relative p-4 xl:py-10  text-white justify-start">
          <div className="flex flex-col items-start justify-between lg:flex-row gap-y-10 lg:gap-x-24">
            <div className="flex-1 text-[#000000]">
              <h3 className="text-3xl font-semibold Bostonfont xl:text-4xl lg:text-5xl 2xl:text-5xl">
                We are your partner in creating a legacy building facade.
              </h3>
            </div>
            <div className="flex-1 text-[#343434] mt-4 lg:mt-0">
              <p className="text-xl xl:text-2xl Bostonfont">
                Discover unparalleled excellence in real estate services at
                Lika, your premier choice in Golem. Nestled in the heart of this
                vibrant community, we proudly stand atop the real estate market,
                offering a blend of expertise, integrity, and dedication that
                sets us apart.
              </p>
            </div>
          </div>
        </div>

        {/* image */}

        <div className="w-[90%] 2xl:w-[80%] xl:w-[90%] mx-auto bg-[#056CB2] h-auto rounded-3xl pr-4 pb-4 mt-10 text-white justify-center cursor-pointer  overflow-hidden">
          <div className="relative overflow-hidden rounded-xl">
            {" "}
            {/* Added a wrapper div */}
            <img
              src={aboutbgimage}
              alt="About Background"
              className="w-full xl:h-[40rem] object-contain xl:object-cover transition-opacity duration-300 ease-in-out "
            />
          </div>
        </div>

        <div className="flex items-center justify-center 2xl:w-[60%] mx-auto xl:w-[90%]   flex-col py-[5rem]">
          <div className="pb-6">
            <Headingcontent title="Contact Us " highlightedTitle="Today" />
          </div>
          <div
            className="flex flex-col flex-wrap items-center justify-between w-full h-auto px-8 md:flex-row xl:flex-row rounded-xl xl:px-14 py-9 "
            style={{
              backgroundImage: `url(${contactbgimage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Call */}
            <div className="flex flex-col items-center space-y-2 min-h-[150px] max-w-[250px] gap-2 pb-6 xl:pb-0">
              <div className="w-12 h-12 bg-[#056CB2] rounded-lg flex items-center justify-center cursor-pointer">
                <img
                  src={properticescallicon}
                  alt="Call Icon"
                  className="object-cover w-6 h-6"
                />
              </div>
              <div className="flex flex-col gap-1 text-center">
                <h3 className="text-2xl font-semibold Bostonfont text-[#000000]">
                  Call Us
                </h3>
                <p className="text-sm font-medium Bostonfont text-[#000000] w-[45%] mx-auto">
                  Call Us Anytime We're Just a Ring Away!
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center space-y-2 min-h-[150px] max-w-[250px] gap-2 pb-6 xl:pb-0">
              <div className="w-12 h-12 bg-[#056CB2] rounded-lg flex items-center justify-center cursor-pointer">
                <img
                  src={aboutlocationicon}
                  alt="Location Icon"
                  className="object-cover w-6 h-6"
                />
              </div>
              <div className="flex flex-col gap-1 text-center">
                <h3 className="text-2xl font-semibold Bostonfont text-[#000000]">
                  Address
                </h3>
                <p className="text-sm font-medium Bostonfont text-[#000000] w-[45%] mx-auto">
                  684 Nitzsche Crossroad, Hansenshire, MT 74685
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center space-y-2 min-h-[150px] max-w-[250px] gap-2">
              <div className="w-12 h-12 bg-[#056CB2] rounded-lg flex items-center justify-center cursor-pointer">
                <img
                  src={aboutsms}
                  alt="Email Icon"
                  className="object-cover w-6 h-6"
                />
              </div>
              <div className="flex flex-col gap-1 text-center">
                <h3 className="text-2xl font-semibold Bostonfont text-[#000000]">
                  Email Us
                </h3>
                <p className="text-sm font-medium Bostonfont text-[#000000] w-[45%] mx-auto">
                  Email Us: We're ready to assist you!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-[90%] 2xl:w-[80%] xl:w-[90%] mx-auto  h-auto rounded-xl xl:pr-4 pb-4 mt-10 justify-center cursor-pointer  overflow-hidden py-10"
          style={{
            boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
            border: "1.78px solid #ECECEC",
          }}
        >
          <div className="flex items-center justify-center w-full">
            <Headingcontent title="Why Choose " highlightedTitle="Lika?" />
          </div>

          {/* content */}
          <div className="xl:w-[85%] xl:mx-auto flex xl:justify-between items-center  mt-10 relative flex-col xl:flex-row gap-y-6">
            {/* text content */}
            <div className="xl:w-[40%]   bg-[#B5843F] rounded-lg p-4 relative z-20 xl:right-[-3rem]">
              <p className="text-xl text-center text-white Bostonfont">
                Discover unparalleled excellence in real estate services at
                Lika, your premier choice in Golem. Nestled in the heart of this
                vibrant community, we proudly stand atop the real estate market,
                offering a blend of expertise, integrity, and dedication that
                sets us apart.
              </p>
            </div>

            {/* image */}

            <div className="xl:w-[80%] w-full   h-[30rem]">
              <img
                src={aboutsection12}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div
          className="w-[90%] 2xl:w-[80%] xl:w-[90%] mx-auto  h-auto rounded-xl xl:pr-4 pb-4 mt-10 justify-center cursor-pointer  overflow-hidden py-10"
          style={{
            boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
            border: "1.78px solid #ECECEC",
          }}
        >
          <div className="flex items-center justify-center w-full">
            <Headingcontent title="Our" highlightedTitle="Commitment to You" />
          </div>

          {/* content */}
          <div className="xl:w-[85%] w-full mx-auto flex justify-between items-center  mt-10 relative flex-col xl:flex-row gap-y-6">
            {/* image */}

            <div className=" xl:w-[80%]   h-[30rem] w-full">
              <img
                src={aboutsection13}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            {/* text content */}
            <div className="xl:w-[40%]  w-full  bg-[#056CB2] rounded-lg p-4 relative z-20  xl:left-[-3rem]">
              <p className="text-xl text-center text-white Bostonfont">
                Excellence is not just a goal but a standard at Lika Real
                Estate. We pride ourselves on delivering personalized service
                that exceeds expectations. From initial consultation to closing
                the deal, our knowledgeable agents provide expert advice and
                support tailored to your unique needs. We understand that buying
                or selling a home is more than just a transaction; it's a
                life-changing experience. That's why we are dedicated to making
                the process seamless and enjoyable for our clients.
              </p>
            </div>
          </div>
        </div>

        <div
          className="w-[90%] 2xl:w-[80%] xl:w-[90%] mx-auto  h-auto rounded-xl xl:pr-4 pb-4 mt-10 justify-center cursor-pointer  overflow-hidden py-10"
          style={{
            boxShadow: "2px 4px 14.4px 0 rgba(0, 0, 0, 0.094)",
            border: "1.78px solid #ECECEC",
          }}
        >
          <div className="flex items-center justify-center w-full">
            <Headingcontent
              title="Explore"
              highlightedTitle="Commitment to You"
            />
          </div>

          {/* content */}
          <div className="xl:w-[85%] w-full mx-auto flex justify-between items-center  mt-10 relative flex-col xl:flex-row gap-y-6">
            {/* text content */}
            <div className="xl:w-[40%]  w-full bg-[#B5843F] rounded-lg p-4 relative z-20 xl:right-[-3rem]">
              <p className="text-xl text-center text-white Bostonfont">
                Situated in the heart of Golem, we have a deep understanding of
                the local market dynamics and trends. Whether you're new to the
                area or a long-time resident, we offer insights into the best
                neighborhoods, schools, and amenities Golem has to offer. Let us
                help you find not just a house, but a place you can truly call
                home.
              </p>
            </div>

            {/* image */}

            <div className="xl:w-[80%] w-full   h-[30rem]">
              <img
                src={aboutsection12}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;
