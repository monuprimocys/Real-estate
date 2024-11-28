import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { hideModal, showModal } from "../../Features/modals/modalSlice";
import loginbgimage from "../../assets/Image/loginbgimage.jpg";
import logo from "../../assets/Image/logo.png";

const VerifyOtpModal: React.FC = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(
    (state: RootState) => state.modals.verifyOtpModal
  );
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      !/^\d$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab"
    ) {
      e.preventDefault();
    }

    if ((e.key === "Backspace" || e.key === "Delete") && index > 0) {
      setOtp((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[index] = "";
        return updatedOtp;
      });
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      setOtp((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[index] = value;
        return updatedOtp;
      });
      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    if (new RegExp(`^\\d{${otp.length}}$`).test(pastedText)) {
      setOtp(pastedText.split("").slice(0, otp.length));
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const modalRef = useRef<HTMLDivElement>(null);

 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        dispatch(hideModal("loginModal"));
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, dispatch]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
      <div
        ref={modalRef}
        className="bg-white w-[90%] sm:w-[400px] md:w-[480px] lg:w-[500px] p-6 rounded-3xl relative shadow-lg"
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
            <p className="mt-1 text-center text-gray-600 px-4 sm:px-6 md:w-[75%] mx-auto text-lg font-semibold">
              abcd12@gmail.com
            </p>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-8">
          <form id="otp-form" className="flex gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={handleFocus}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
                className="shadow-xs flex w-[64px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-700 outline-none sm:text-4xl"
              />
            ))}
          </form>

          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="px-[5.5rem] py-3 text-white bg-[#B5843F] rounded-xl focus:outline-none hover:bg-[#9b6d32] transition duration-200 w-fit"
              onClick={() => {
                // Dispatch action to show the Verify OTP modal
                dispatch(hideModal("verifyOtpModal"));
                dispatch(showModal("resetPasswordModal"));
              }}
            >
              Next
            </button>
          </div>

          <div className="flex items-center justify-center mt-4">
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
        </div>
      </div>

    </div>
  );
};

export default VerifyOtpModal;
