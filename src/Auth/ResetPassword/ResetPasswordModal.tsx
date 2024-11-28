import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { hideModal, showModal } from "../../Features/modals/modalSlice";
import loginbgimage from "../../assets/Image/loginbgimage.jpg";
import logo from "../../assets/Image/logo.png";
import pwdicon from "../../assets/Image/loginpwdicon.png";
import eyecloseicon from "../../assets/Image/loginpwdeyeiconclose.png";
import eyeopenicon from "../../assets/Image/loginpwdeyeiconopen.png";
import RegistrationModal from "../RegistrationPage/RegistrationModal";
import ForgotpasswordModal from "../Forgotpassword/ForgotpasswordModal";

const ResetPasswordModal: React.FC = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(
    (state: RootState) => state.modals.resetPasswordModal
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [showconfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const isRegistrationModalVisible = useSelector(
    (state: RootState) => state.modals.registrationModal
  );

  const isForgotPasswordModalVisible = useSelector(
    (state: RootState) => state.modals.forgotpasswordModal
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showPassword);
  };

  return (
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
              Enter New password
            </h2>
            <p className="mt-1 text-center text-[#3A3A3A] px-4 sm:px-6 md:w-[75%] mx-auto text-lg">
              Reset your password to regain access to your account.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full px-4 sm:px-6 md:px-8">
          <form>
            {/* Password Input */}
            <div className="mb-5">
              <label
                className="text-sm font-medium text-[#000000]"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative flex items-center mt-2">
                <span className="absolute left-2 bg-[#B5843D36] w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center">
                  <img
                    src={pwdicon}
                    alt="Password Icon"
                    className="object-cover w-[1.5rem] h-[1.5rem]"
                  />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full pl-14 py-3 bg-white border border-[#B5843F66] rounded-md focus:outline-none focus:ring-[#B5843F66] focus:border-[#B5843F66] text-[#000000] placeholder-gray-500"
                  placeholder="Enter your password"
                />
                <span
                  className="absolute right-2 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <img
                    src={showPassword ? eyeopenicon : eyecloseicon}
                    alt="Toggle Password Visibility"
                    className="object-cover w-[1.5rem] h-[1.5rem]"
                  />
                </span>
              </div>
              {/* Forgot Password */}
              <div className="flex justify-end mt-4 mb-4 cursor-pointer">
                <p
                  className="text-sm text-[#B5843F] font-medium"
                  onClick={() => {
                    dispatch(hideModal("loginModal"));

                    dispatch(hideModal("registrationModal"));
                    dispatch(showModal("forgotpasswordModal"));
                  }}
                >
                  Forgot Password ?
                </p>
              </div>
            </div>
            <div>
              <label
                className="text-sm font-medium text-black"
                htmlFor="password"
              >
                Conform Password
              </label>
              <div className="relative mt-2">
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#B5843D36] w-10 h-10 rounded-full flex justify-center items-center">
                  <img src={pwdicon} alt="Password Icon" className="w-6 h-6" />
                </span>
                <input
                  type={showconfirmPassword ? "text" : "password"}
                  id="ConformPassword"
                  name="confirm_password"
                  className="w-full pl-14 py-3 bg-white border border-[#B5843F66] rounded-md focus:outline-none focus:ring-[#B5843F66] focus:border-[#B5843F66] text-black placeholder-gray-500"
                  placeholder="Enter Your Conform Password"
                />
                <span
                  className="absolute flex items-center justify-center w-10 h-10 transform -translate-y-1/2 rounded-full cursor-pointer right-2 top-1/2"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  <img
                    src={showconfirmPassword ? eyeopenicon : eyecloseicon}
                    alt="Toggle Password Visibility"
                    className="w-6 h-6"
                  />
                </span>
              </div>
            </div>

            {/* Sign In Button */}
            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="px-[5.5rem] py-3 text-white bg-[#B5843F] rounded-xl focus:outline-none hover:bg-[#9b6d32] transition duration-200 w-fit"
              >
                Sign In
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="flex items-center justify-center mt-4">
              <p className="text-sm text-[#717171]">
                Don't have an account?{" "}
                <span
                  className="text-[#056CB2] font-medium cursor-pointer"
                  onClick={() => {
                    dispatch(hideModal("loginModal"));
                    dispatch(showModal("registrationModal"));
                    dispatch(hideModal("resetPasswordModal"));
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
  );
};

export default ResetPasswordModal;
