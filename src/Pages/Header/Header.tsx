import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Image/logo.png";
import routesConfig from "../../routes/routesConfig";
import LoginModal from "../../Auth/Login/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../Features/modals/modalSlice";
import { RootState } from "../../app/store";
import RegistrationModal from "../../Auth/RegistrationPage/RegistrationModal";
import ForgotpasswordModal from "../../Auth/Forgotpassword/ForgotpasswordModal";
import ResetPasswordModal from "../../Auth/ResetPassword/ResetPasswordModal";
import VerifyOtpModal from "../../Auth/VerifyOtp/VerifyOtpModal";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoginModalVisible = useSelector(
    (state: RootState) => state.modals.loginModal
  );
  const isRegistrationModalVisible = useSelector(
    (state: RootState) => state.modals.registrationModal
  );

  const isforgotpasswordModalVisible = useSelector(
    (state: RootState) => state.modals.forgotpasswordModal
  );

  const isResetpasswordModalVisible = useSelector(
    (state: RootState) => state.modals.resetPasswordModal
  );

  const isVerifyOtpModalVisible = useSelector(
    (state: RootState) => state.modals.verifyOtpModal
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="w-[90%] sm:w-[85%] md:w-[95%] 2xl:w-[90%] xl:w-[90%] mx-auto flex justify-between items-center py-6 lg:h-[11rem]">
        <div className="w-[90px] h-[45px] sm:w-[113px] sm:h-[53px] flex justify-center items-center">
          <img
            src={logo}
            alt="Company Logo"
            className="w-full h-full bg-no-repeat bg-cover"
          />
        </div>

        <div className="items-center justify-between hidden xl:flex">
        <ul className="flex items-center justify-between gap-x-4 sm:gap-x-8 text-white cursor-pointer Bostonfont font-[500] text-sm sm:text-base lg:text-lg">
      {routesConfig
        .filter(({ path }) => path !== "/propertiesDetail/:id")
        .map(({ name, path }) => (
          <li
            key={name}
            className="relative p-2 cursor-pointer sm:p-3 group"
          >
            <NavLink
              to={path}
              className={({ isActive }) =>
                `relative z-10 text-white ${
                  isActive ? "border-b-2 border-white py-2" : ""
                }`
              }
            >
              {name}
            </NavLink>
            <div className="absolute left-0 right-0 bottom-1">
              <div className="h-[2px] transition-all duration-300 scale-x-0 bg-white rounded-full group-hover:scale-x-100"></div>
            </div>
          </li>
        ))}
    </ul>
        </div>

        <div>
          <button
            className="px-4 py-1 sm:px-6 sm:py-2 text-white bg-[#B5843F] rounded-lg Bostonfont hover:bg-[#e4a349] font-[600] hidden xl:block"
            onClick={() => {
              dispatch(showModal("loginModal"));
            }}
          >
            Login
          </button>
        </div>

        <div className="xl:hidden">
          <button className="text-3xl text-white" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>

      <div
        className={`xl:hidden fixed top-0 right-0 w-full h-full bg-black bg-opacity-90 text-white z-50 transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6">
          <div className="w-[90px] h-[45px] sm:w-[113px] sm:h-[53px] flex justify-center items-center">
            <img
              src={logo}
              alt="Company Logo"
              className="w-full h-full bg-no-repeat bg-cover"
            />
          </div>
          <button className="text-3xl text-white" onClick={toggleMenu}>
            ✕
          </button>
        </div>

        <ul className="flex flex-col items-center justify-between gap-y-6 py-6 Bostonfont font-[500] text-xl">
          {routesConfig
            .filter(({ path }) => path !== "/propertiesDetail/:id")
            .map(({ name, path }) => (
              <li
                key={name}
                className="relative p-2 cursor-pointer group"
                onClick={toggleMenu}
              >
                <Link to={path} className="relative z-10 text-white">
                  {name}
                </Link>
                <div className="absolute left-0 right-0 bottom-1">
                  <div className="h-[2px] transition-all duration-300 scale-x-0 bg-white rounded-full group-hover:scale-x-100"></div>
                </div>
              </li>
            ))}
        </ul>

        <div className="flex items-center justify-center w-full">
          <button
            className="px-4 py-1 sm:px-6 sm:py-2 text-white bg-[#B5843F] rounded-lg Bostonfont hover:bg-[#e4a349] font-[600]"
            onClick={() => {
              dispatch(showModal("loginModal"));
            }}
          >
            Login
          </button>
        </div>
      </div>

      {/* Render Modals if visible */}
      {isLoginModalVisible && <LoginModal />}
      {isRegistrationModalVisible && <RegistrationModal />}
      {isforgotpasswordModalVisible && <ForgotpasswordModal />}
      {isResetpasswordModalVisible && <ResetPasswordModal />}
      {isVerifyOtpModalVisible && <VerifyOtpModal />}
    </>
  );
}

export default Header;
