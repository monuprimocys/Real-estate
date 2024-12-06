import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useAdd_contact_formMutation } from "../../app/api/ContactApi";
import PropertiesHeaderpage from "../Properties/PropertiesHeaderpage/PropertiesHeaderpage";
import bgimagecontact from "../../assets/Image/contactpagebgimage.png";
import bgimagecontact2 from "../../assets/Image/contactussecondsection.png";
import callicon from "../../assets/Image/calliconcontact.png";
import location from "../../assets/Image/locationcontact.png";
import sms from "../../assets/Image/smscontact.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Using the mutation hook
  const [addContactForm, { isLoading }] = useAdd_contact_formMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("All fields are mandatory!");
      return;
    }

    try {
      // Call the mutation function
      const response = await addContactForm(formData).unwrap();

      if (response.response_code === "0") {
        toast.error(response.message);
      } else {
        toast.success("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full h-auto overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      <PropertiesHeaderpage />

      <div
        className="flex items-center justify-between mx-auto 2xl:w-[80%] w-[90%] rounded-xl gap-6 p-6 mt-10 flex-col xl:flex-row 2xl:h-[720px]"
        style={{
          backgroundImage: `url(${bgimagecontact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{ width: "100%" }}
          className="2xl:h-[90%] my-auto rounded-lg h-[20rem] xl:h-[35rem]"
        >
          <iframe
            src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyAMZ4GbRFYSevy7tMaiH5s0JmMBBXc0qBA&center=${30.4762},${74.5122}&zoom=13`}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
            className="rounded-lg"
          ></iframe>
        </div>
        <div className="flex flex-col w-full h-full gap-6 my-auto rounded-lg">
          <div className="flex items-start justify-start w-full">
            <h2 className="text-5xl text-white Bostonfont font-[700]">
              Send <span className="text-[#B5843F]">Inquiry</span>
            </h2>
          </div>
          <div className="flex items-center justify-start">
            <p className="Bostonfont text-[#FFFFFF] text-2xl">
              Reach out to us with your questions or requests. We're here to
              assist you!
            </p>
          </div>
          <div className="flex flex-col w-full">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="Bostonfont text-[#FFFFFF] text-xl"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-2 border-[#FFFFFF] rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B5843F] Bostonfont"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="Bostonfont text-[#FFFFFF] text-xl"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-2 border-[#FFFFFF] rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B5843F] Bostonfont"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="Bostonfont text-[#FFFFFF] text-xl"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-2 border-[#FFFFFF] rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B5843F] Bostonfont"
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="Bostonfont text-[#FFFFFF] text-xl"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-2 border-[#FFFFFF] rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B5843F] Bostonfont"
                  placeholder="Write message"
                />
              </div>
              <div className="flex items-center justify-center w-full">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`rounded-lg bg-[#B5843F] text-[#FFFFFF] text-lg Bostonfont w-fit px-6 py-2 ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className="2xl:w-[60%] w-[90%]    mx-auto md:h-[20rem] h-[30rem]  mt-16 flex justify-center items-center overflow-hidden "
        style={{
          backgroundImage: `url(${bgimagecontact2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-wrap items-center justify-between  h-auto xl:w-[60%] w-[90%] gap-6">
          {/* call */}

          <div className="flex flex-col items-center justify-between cursor-pointer gap-y-6">
            <div className="flex justify-center items-center h-[4rem]  w-[4rem] bg-[#056CB2] rounded-xl">
              <img
                src={callicon}
                alt=""
                className="object-cover w-[50%] h-[50%]"
              />
            </div>

            <div>
              <h2 className="text-3xl text-[#000000] Bostonfont font-[700]">
                Call Us
              </h2>
            </div>
          </div>

          {/* location */}
          <div className="flex flex-col items-center justify-between cursor-pointer gap-y-6">
            <div className="flex justify-center items-center h-[4rem]  w-[4rem] bg-[#056CB2] rounded-xl">
              <img
                src={location}
                alt=""
                className="object-cover w-[50%] h-[50%]"
              />
            </div>

            <div>
              <h2 className="text-3xl text-[#000000] Bostonfont font-[700]">
                Address
              </h2>
            </div>
          </div>

          {/* email */}

          <div className="flex flex-col items-center justify-between cursor-pointer gap-y-6">
            <div className="flex justify-center items-center h-[4rem]  w-[4rem] bg-[#056CB2] rounded-xl">
              <img src={sms} alt="" className="object-cover w-[50%] h-[50%]" />
            </div>

            <div>
              <h2 className="text-3xl text-[#000000] Bostonfont font-[700]">
                Email Us
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
