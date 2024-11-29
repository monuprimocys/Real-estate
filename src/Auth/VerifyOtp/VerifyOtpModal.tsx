import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { hideModal, showModal } from "../../Features/modals/modalSlice";
import loginbgimage from "../../assets/Image/loginbgimage.jpg";
import logo from "../../assets/Image/logo.png";
import emailicon from "../../assets/Image/loginemailicon.png";
import { useVerifyOptMutation } from "../../app/api/VerifyOtpApi";
import { Toaster, toast } from "react-hot-toast"; 

const VerifyOtpModal: React.FC = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(
    (state: RootState) => state.modals.verifyOtpModal
  );

  const [otp, setOtp] = useState(Array(6).fill(""));
  const [email, setEmail] = useState(""); // Add state for email input
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const [verifyOtp, { isLoading, isError, error }] = useVerifyOptMutation(); 

  // Handle keypress and input for OTP
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.indexOf(e.target as HTMLInputElement);
      if (index > 0) {
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index - 1),
          "",
          ...prevOtp.slice(index),
        ]);
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const index = inputRefs.current.indexOf(target);
    if (target.value) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        target.value,
        ...prevOtp.slice(index + 1),
      ]);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      return;
    }
    const digits = text.split("");
    setOtp(digits);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        dispatch(hideModal("verifyOtpModal"));
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, dispatch]);

  const handleSubmit = async () => {
    const otpString = otp.join(""); // Join OTP digits into a string
    if (email && otpString.length === 6) {
      try {
        const response = await verifyOtp({ email, otp: otpString }).unwrap(); // Call API with email and OTP

        if (response.success === "true" && response.response_code === "1") {
          // OTP verification successful, move to the next step
          dispatch(hideModal("verifyOtpModal"));
          dispatch(showModal("resetPasswordModal")); // Show reset password modal
          toast.success("OTP Verified! Proceeding to reset password."); // Success toast
        } else {
          // OTP verification failed, show error
          toast.error("Invalid OTP. Please try again."); // Error toast
        }
      } catch (err) {
        toast.error("An error occurred. Please try again later."); // Error toast in case of API error
        console.error("Error verifying OTP", err);
      }
    } else {
      toast.error("Please enter a valid OTP and email."); // Error toast for invalid input
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
      <div
        ref={modalRef}
        className="bg-white w-[90%] sm:w-[400px] md:w-[480px] lg:w-[500px] md:p-6 rounded-3xl relative shadow-lg"
        style={{
          backgroundImage: `url(${loginbgimage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full mb-6">
          <img
            src={logo}
            alt="Logo"
            className="object-contain w-[11rem] h-24"
          />
          <div className="flex flex-col items-center justify-center w-full pt-6">
            <h2 className="mb-2 text-2xl font-bold text-black">
              OTP Verification
            </h2>
            <p className="mt-1 text-center text-gray-600 px-4 sm:px-6 md:w-[75%] mx-auto text-lg">
              Enter the OTP sent to your email
            </p>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-8">
          <form id="otp-form" className="flex flex-col gap-5 mx-auto ">
            <div className="w-full mb-5">
              <label
                className="text-sm font-medium text-[#000000]"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative flex items-center mt-2">
                <span className="absolute left-2 bg-[#B5843D36] w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center">
                  <img
                    src={emailicon}
                    alt="Email Icon"
                    className="object-cover w-[1.5rem] h-[1.5rem]"
                  />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-14 py-3 bg-white border border-[#B5843F66] rounded-md focus:outline-none focus:ring-[#B5843F66] focus:border-[#B5843F66] text-[#000000] placeholder-gray-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="flex justify-center w-full gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  onFocus={handleFocus}
                  onPaste={handlePaste}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="shadow-xs flex  w-[2.8rem] md:w-[55px] lg:w-[59px] xl:w-[57px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
                />
              ))}
            </div>

            {/* show timing total timing 5 miniute */}
            <div className="flex items-center justify-center mt-4">
              <p className="text-sm text-[#056CB2] Bostonfont">
                Resend Otp in 05:00
              </p>
            </div>

            <div className="flex items-center justify-center mt-4">
              <button
                type="button"
                className="px-[5.5rem] py-3 text-white bg-[#B5843F] rounded-xl focus:outline-none hover:bg-[#9b6d32] transition duration-200 w-fit"
                onClick={handleSubmit}
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? "Verifying..." : "Next"}
              </button>
            </div>

            <div className="flex items-center justify-center pb-4">
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <span
                  className="font-medium text-blue-600 cursor-pointer"
                  onClick={() => {
                    dispatch(showModal("registrationModal"));
                    dispatch(hideModal("verifyOtpModal"));
                  }}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Toaster /> {/* Add Toaster to render toast messages */}
    </div>
  );
};

export default VerifyOtpModal;
