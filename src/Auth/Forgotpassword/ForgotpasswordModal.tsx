import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { hideModal, showModal } from "../../Features/modals/modalSlice";
import loginbgimage from "../../assets/Image/loginbgimage.jpg";
import logo from "../../assets/Image/logo.png";
import emailicon from "../../assets/Image/loginemailicon.png";


const ForgotpasswordModal: React.FC = () => {
  const dispatch = useDispatch();

  // State from Redux store to check visibility of the modals
  const isVisible = useSelector(
    (state: RootState) => state.modals.forgotpasswordModal
  );

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        dispatch(hideModal("forgotpasswordModal"));
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
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
        <div
          ref={modalRef}
          className="bg-white w-[90%] sm:w-[400px] md:w-[480px] lg:w-[500px] p-6 rounded-3xl relative bg-opacity-100 shadow-lg"
          style={{
            backgroundImage: `url(${loginbgimage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Modal content */}
          <div className="flex flex-col items-center justify-center w-full mb-6">
            <img
              src={logo}
              alt="Logo"
              className="object-contain w-[11rem] h-24"
            />
            <div className="flex flex-col items-center justify-center w-full pt-6">
              <h2 className="text-2xl font-bold text-[#000000] mb-2">
                Forgot Password
              </h2>
              <p className="mt-1 text-center text-[#3A3A3A] px-4 sm:px-6 md:w-[75%] mx-auto text-lg">
                Reset your password to regain access to your account.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full px-4 sm:px-6 md:px-8">
            <form>
              {/* Email Input */}
              <div className="mb-5">
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
                    className="w-full pl-14 py-3 bg-white border border-[#B5843F66] rounded-md focus:outline-none focus:ring-[#B5843F66] focus:border-[#B5843F66] text-[#000000] placeholder-gray-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Next Button */}
              <div className="flex items-center justify-center mt-6">
                <button
                  type="button"
                  className="px-[5.5rem] py-3 text-white bg-[#B5843F] rounded-xl focus:outline-none hover:bg-[#9b6d32] transition duration-200 w-fit"
                  onClick={() => {
                    // Dispatch action to show the Verify OTP modal
                    dispatch(showModal("verifyOtpModal"));
                    dispatch(hideModal("forgotpasswordModal"));
                  }}
                >
                  Next
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="flex items-center justify-center mt-4">
                <p className="text-sm text-[#717171]">
                  Don't have an account?{" "}
                  <span
                    className="text-[#056CB2] font-medium cursor-pointer"
                    onClick={() => {
                      dispatch(showModal("registrationModal"));
                      dispatch(hideModal("forgotpasswordModal"));
                    }}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotpasswordModal;
