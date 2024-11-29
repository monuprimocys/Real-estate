/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { hideModal, showModal } from "../../Features/modals/modalSlice";
import { setResetPassword } from "../../app/Slices/ResetPassword/ResetPasswordSlice";
import { useResetPasswordMutation } from "../../app/api/ResetPasswordApi";
import loginbgimage from "../../assets/Image/loginbgimage.jpg";
import logo from "../../assets/Image/logo.png";
import pwdicon from "../../assets/Image/loginpwdicon.png";
import eyecloseicon from "../../assets/Image/loginpwdeyeiconclose.png";
import eyeopenicon from "../../assets/Image/loginpwdeyeiconopen.png";
import emailicon from "../../assets/Image/loginemailicon.png";
import { Toaster, toast } from "react-hot-toast"; // Import Toaster and toast
import { useNavigate } from "react-router-dom";

const ResetPasswordModal: React.FC = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(
    (state: RootState) => state.modals.resetPasswordModal
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const { email, password, cnf_pass } = useSelector(
    (state: RootState) => state.resetpassword
  );
  const [resetPassword, { isLoading, isError, isSuccess }] =
    useResetPasswordMutation();

  const modalRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setResetPassword({ name, value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password === cnf_pass) {
      try {
        const response = await resetPassword({
          email,
          password,
          cnf_pass,
        }).unwrap();
        if (response.status === "success") {
          toast.success(response.message || "Password reset success!");
          dispatch(hideModal("resetPasswordModal"));
          dispatch(showModal("loginModal"));
        } else {
          toast.error(
            response.message || "Failed to reset password. Please try again."
          );
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    } else {
      toast.error("Passwords do not match");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        dispatch(hideModal("resetPasswordModal"));
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
          <div className="flex flex-col items-center justify-center w-full mb-6">
            <img
              src={logo}
              alt="Logo"
              className="object-contain w-[11rem] h-24"
            />
            <h2 className="text-2xl font-bold text-[#000000] mb-2">
              Enter New password
            </h2>
            <p className="mt-1 text-center text-[#3A3A3A] text-lg">
              Reset your password to regain <br></br> access to your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full px-4 sm:px-6 md:px-8">
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
                  value={email}
                  onChange={handleChange}
                  className="w-full py-3 bg-white border rounded-md pl-14"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

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
                  value={password}
                  onChange={handleChange}
                  className="w-full py-3 bg-white border rounded-md pl-14"
                  placeholder="Enter your password"
                  required
                />
                <span
                  className="absolute right-2 w-[2.5rem] h-[2.5rem] flex justify-center items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img
                    src={showPassword ? eyeopenicon : eyecloseicon}
                    alt="Toggle Password Visibility"
                    className="object-cover w-[1.5rem] h-[1.5rem]"
                  />
                </span>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-5">
              <label
                className="text-sm font-medium text-[#000000]"
                htmlFor="cnf_pass"
              >
                Confirm Password
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
                  type={showConfirmPassword ? "text" : "password"}
                  id="cnf_pass"
                  name="cnf_pass"
                  value={cnf_pass}
                  onChange={handleChange}
                  className="w-full py-3 bg-white border rounded-md pl-14"
                  placeholder="Confirm your password"
                  required
                />
                <span
                  className="absolute right-2 w-[2.5rem] h-[2.5rem] flex justify-center items-center cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <img
                    src={showConfirmPassword ? eyeopenicon : eyecloseicon}
                    alt="Toggle Password Visibility"
                    className="object-cover w-[1.5rem] h-[1.5rem]"
                  />
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 text-white bg-[#B5843F] rounded-xl focus:outline-none hover:bg-[#9b6d32] transition duration-200 w-fit"
              >
                {isLoading ? "Resetting..." : "Reset Password"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toaster component to display the toasts */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default ResetPasswordModal;
