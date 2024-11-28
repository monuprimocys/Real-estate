import logo from "../../assets/Image/logo.png";
import bgimage from "../../assets/Image/fotterbgimage.png";
import call from "../../assets/Image/callfotter.png";
import sms from "../../assets/Image/sms.jpg";
import location from "../../assets/Image/location.jpg";
import fb from "../../assets/Image/fb.png";
import insta from "../../assets/Image/insta.png";
import line from "../../assets/Image/lineinall.png";

function Fotter() {
  return (
    <div className="relative w-full pt-10 pb-4 -z-50 ">
      <h3 className="py-4 text-4xl text-center text-[#000000] tracking-widest Bostonfont font-medium">
        Trusted by <span className="font-[900]">2000+</span> businesses
      </h3>

      <div
        className="w-full h-auto py-20 mt-10 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bgimage})`,
        }}
      >
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] md:w-[70%] mx-auto">
          {/* First Column */}
          <div className="flex flex-col items-center w-full space-y-6 text-center md:items-start md:text-left">
            <div className="h-[4rem] w-[9rem]">
              <img
                src={logo}
                alt="Logo"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex items-center space-x-3">
              <img src={call} alt="Call" className="w-6 h-6" />
              <p className="text-sm font-semibold">+355 69 550 9143</p>
            </div>

            <div className="flex items-center space-x-3">
              <img src={sms} alt="Email" className="w-6 h-6" />
              <p className="text-sm font-medium">info@likarealestate.al</p>
            </div>

            <div className="flex items-center space-x-3">
              <img src={location} alt="Location" className="w-6 h-6" />
              <p className="text-sm font-medium">Rruga e Detit, Golem</p>
            </div>

            <div className="flex mt-4 space-x-4">
              <img src={insta} alt="Instagram" className="w-8 h-8" />
              <img src={fb} alt="Facebook" className="w-8 h-8" />
            </div>
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-center w-full space-y-6 md:items-start">
            <div className="flex flex-col items-center md:items-start gap-y-3">
              <h3 className="text-2xl font-bold">Quick Links</h3>
              <img src={line} alt="Line" className="w-16" />
            </div>

            <div className="flex flex-col space-y-4 text-sm font-medium">
              <p>Help & FAQs</p>
              <p>Who We Are?</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-center w-full space-y-6 md:items-start">
            <div className="flex flex-col items-center md:items-start gap-y-3">
              <h3 className="text-2xl font-bold">Talk To An Expert</h3>
              <img src={line} alt="Line" className="w-12" />
            </div>

            <p className="text-[16px] font-medium text-center md:text-left w-[80%] text-[#6B6B6B]">
              Get expert consultation regarding your Real Estate needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
