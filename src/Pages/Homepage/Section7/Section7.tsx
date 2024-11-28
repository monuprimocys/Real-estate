import section7bgimage from "../../../assets/Image/section7bgimage.png";

function Section7() {
  return (
    <div className="flex flex-col xl:flex-row w-full min-h-screen mt-[6rem]">
      {/* First column - Image section */}
      <div className="w-full md:w-[100%] xl:w-[55%] h-[18rem] sm:h-[25rem] md:h-full xl:h-[57.5rem]">
        <img
          src={section7bgimage}
          alt="First Column Background"
          className="object-cover w-full h-full "
        />
      </div>

      {/* Second column - Form section (Aligned to bottom) */}
      <div className="flex items-end justify-center w-full h-full overflow-hidden xl:w-[45%]  md:mt-0  2xl:pt-[7.5rem] pt-6">
        <div className="bg-[#056CB2] w-[90%] sm:w-[80%] md:w-full h-[90%] md:h-[87%] py-8 md:py-5 rounded-lg">
          {/* Text and form */}
          <div className="w-[95%] sm:w-[85%] md:w-[78%] mx-auto h-auto flex flex-col justify-end ">
            <div className="flex flex-col w-full h-full text-center gap-y-6 md:gap-y-8 md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-6xl text-white Bostonfont font-[700]">
                Are you looking for a{" "}
                <span className="text-[#B5843F]">dream home?</span>
              </h2>
              <p className="text-lg text-white sm:text-xl md:text-2xl Bostonfont">
                We can help you realize your dream of a new Home
              </p>
            </div>

            <form className="w-full pt-10 md:pt-12">
              <div className="grid grid-cols-1 gap-6">
                {/* First Row: Name and Phone Number */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-white Bostonfont">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full p-4 text-white placeholder-white bg-[#FFFFFF] bg-opacity-[17%] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 backdrop-blur-[21%] Bostonfont"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-white Bostonfont">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="w-full p-4 text-white placeholder-white bg-[#FFFFFF] bg-opacity-[17%] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 backdrop-blur-[21%] Bostonfont"
                      required
                    />
                  </div>
                </div>

                {/* Second Row: Full Name and Requirements */}
                <div>
                  <label className="block mb-2 text-white Bostonfont">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full p-4 text-white placeholder-white bg-[#FFFFFF] bg-opacity-[17%] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 backdrop-blur-[21%] Bostonfont"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-white Bostonfont">
                    Requirements
                  </label>
                  <textarea
                    name="requirements"
                    placeholder="What are you looking for..."
                    className="w-full     min-h-[6rem] max-h-[6rem] p-4 text-white placeholder-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 backdrop-blur-[21%] bg-[#FFFFFF] bg-opacity-[17%] Bostonfont"
                    required
                  />
                </div>

                {/* Third Row: GDPR Agreement */}
                <div className="flex flex-col items-start ">
                  <p className="text-[#DBDBDB] text-[16px] Bostonfont">
                    GDPR Agreement*
                  </p>
                  <div>
                    <input
                      type="checkbox"
                      name="gdprAgreement"
                      className="mt-1 mr-2"
                      required
                    />
                    <label className="text-white Bostonfont">
                      I agree that this website will store my submitted
                      information so that they can respond to my request.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-[3rem] py-3 font-semibold text-blue-600 bg-white shadow-md rounded-xl hover:bg-gray-200 focus:outline-none"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
