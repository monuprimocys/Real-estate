import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { hideModal, showModal } from "../../Features/modals/modalSlice";
import loginbgimage from "../../assets/Image/loginbgimage.jpg";
import logo from "../../assets/Image/logo.png";
import emailicon from "../../assets/Image/loginemailicon.png";
import pwdicon from "../../assets/Image/loginpwdicon.png";
import eyecloseicon from "../../assets/Image/loginpwdeyeiconclose.png";
import eyeopenicon from "../../assets/Image/loginpwdeyeiconopen.png";
import { useLoginMutation } from "../../app/api/Login";
import { setFormDataLogin } from "../../app/Slices/Login/LoginSlice";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginModal: React.FC = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: RootState) => state.modals.loginModal);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const formData = useSelector((state: RootState) => state.login);

  const navigate = useNavigate();

  const [loginuser, { isLoading }] = useLoginMutation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFormDataLogin({ name, value }));
  };

  const validateForm = () => {
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await loginuser(formData).unwrap();

      if (response.status === "success") {
        toast.success(response.message);
        setTimeout(() => {
          navigate("/"); // Redirect to the home page or dashboard
          dispatch(hideModal("loginModal"));
        }, 1000);
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error("Login failed", err);
      if (err.data) {
        console.error("Error Response Data:", err.data);
      }
      toast.error("Login failed, please try again.");
    }
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
      // Disable body scroll when the modal is open
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {

      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      document.body.style.overflow = "auto";
    };
  }, [isVisible, dispatch]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
      <Toaster />
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
              Sign In To Account
            </h2>
            <p className="mt-1 text-center text-[#3A3A3A] px-4 sm:px-6 md:w-[75%] mx-auto text-lg">
              Uncover the full experience of our app by logging in.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full px-4 sm:px-6 md:px-8">
          <form onSubmit={handleSubmit} className="px-4">
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
                  onChange={handleInputChange}
                  value={formData.email || ""}
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
                  className="w-full pl-14 py-3 bg-white border border-[#B5843F66] rounded-md focus:outline-none focus:ring-[#B5843F66] focus:border-[#B5843F66] text-[#000000] placeholder-gray-500"
                  placeholder="Enter your password"
                  onChange={handleInputChange}
                  value={formData.password || ""}
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
                    dispatch(showModal("forgotpasswordModal"));
                  }}
                >
                  Forgot Password ?
                </p>
              </div>
            </div>

            {/* Sign In Button */}
            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="px-[5.5rem] py-3 text-white bg-[#B5843F] rounded-xl focus:outline-none hover:bg-[#9b6d32] transition duration-200 w-fit"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
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

export default LoginModal;
