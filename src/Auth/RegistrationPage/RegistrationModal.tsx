import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { hideModal, showModal } from "../../Features/modals/modalSlice";
import { setFormDataRegistration } from "../../app/Slices/Registration/RegistrationSlice";
import { useRegistrationMutation } from "../../app/api/Registration";
import { Toaster, toast } from "react-hot-toast";
import loginbgimage from "../../assets/Image/loginbgimage.jpg";
import logo from "../../assets/Image/logo.png";
import emailicon from "../../assets/Image/loginemailicon.png";
import pwdicon from "../../assets/Image/loginpwdicon.png";
import eyecloseicon from "../../assets/Image/loginpwdeyeiconclose.png";
import eyeopenicon from "../../assets/Image/loginpwdeyeiconopen.png";
import profilicon from "../../assets/Image/registrationprofileicon.png";
import phone from "../../assets/Image/calliconregistration.png";

const RegistrationModal: React.FC = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(
    (state: RootState) => state.modals.registrationModal
  );

  // Access form data from Redux store
  const formData = useSelector((state: RootState) => state.registration);

  const modalRef = useRef<HTMLDivElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [registerUser, { isLoading }] = useRegistrationMutation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        dispatch(hideModal("registrationModal"));
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Dispatch with just the name and value, not the entire object
    dispatch(setFormDataRegistration({ name, value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Dispatch form data to Redux store
    dispatch(
      setFormDataRegistration({
        name: "first_name",
        value: formData.first_name,
      })
    );
    dispatch(
      setFormDataRegistration({ name: "last_name", value: formData.last_name })
    );
    dispatch(setFormDataRegistration({ name: "email", value: formData.email }));
    dispatch(
      setFormDataRegistration({ name: "password", value: formData.password })
    );
    dispatch(
      setFormDataRegistration({
        name: "confirm_password",
        value: formData.confirm_password,
      })
    );
    dispatch(
      setFormDataRegistration({ name: "mobile", value: formData.mobile })
    );

    try {
      const response = await registerUser(formData).unwrap();

      console.log("API Response:", response);

      if (response.status === "success") {
        dispatch(hideModal("registrationModal"));
        dispatch(showModal("loginModal"));
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error("Registration failed", err);
      if (err.data) {
        console.error("Error Response Data:", err.data);
      }
      toast.error("Registration failed, please try again.");
    }
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-black bg-opacity-85">
      <Toaster />
      <div
        className="bg-white w-[95%] max-w-5xl p-6 rounded-2xl relative shadow-lg h-full overflow-y-auto md:h-auto"
        ref={modalRef}
        style={{
          backgroundImage: `url(${loginbgimage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="h-24 w-[12rem] mb-4 object-contain"
          />
          <h2 className="mb-2 text-2xl font-bold text-black">
            Sign Up to Your Account
          </h2>
          <p className="px-4 text-base leading-relaxed text-gray-700">
            Register now to explore properties & make your dreams a reality!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {["first_name", "last_name"].map((field) => (
              <div key={field}>
                <label
                  className="text-sm font-medium text-black"
                  htmlFor={field}
                >
                  {field
                    .replace("_", " ")
                    .replace(/^\w/, (c) => c.toUpperCase())}
                </label>
                <div className="relative mt-2">
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#B5843D36] w-10 h-10 rounded-full flex justify-center items-center">
                    <img
                      src={profilicon}
                      alt="Profile Icon"
                      className="w-6 h-6"
                    />
                  </span>
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleInputChange}
                    className="w-full pl-14 py-3 bg-white border border-[#B5843F66] rounded-md focus:outline-none focus:ring-[#B5843F66] focus:border-[#B5843F66] text-black placeholder-gray-500"
                    placeholder={`Enter your ${field.replace("_", " ")}`}
                  />
                </div>
              </div>
            ))}

            {[
              {
                name: "email",
                type: "email",
                icon: emailicon,
                placeholder: "Enter your email",
              },
              {
                name: "password",
                type: showPassword ? "text" : "password",
                icon: pwdicon,
                placeholder: "Enter your password",
              },
              {
                name: "mobile",
                type: "text",
                icon: phone,
                placeholder: "Enter your Phone Number",
                inputMode: "numeric",
                pattern: "\\d*",
                onInput: (e: React.FormEvent<HTMLInputElement>) => {
                  const target = e.currentTarget;
                  if (target.value && /[^0-9]/.test(target.value)) {
                    toast.error("Only numeric values are allowed .");
                    target.value = target.value.replace(/[^0-9]/g, "");
                  }
                },
              },
              {
                name: "confirm_password",
                type: showConfirmPassword ? "text" : "password",
                icon: pwdicon,
                placeholder: "Confirm your password",
              },
            ].map((input) => (
              <div key={input.name}>
                <label
                  className="text-sm font-medium text-black"
                  htmlFor={input.name}
                >
                  {input.name
                    .replace("_", " ")
                    .replace(/^\w/, (c) => c.toUpperCase())}
                </label>
                <div className="relative mt-2">
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#B5843D36] w-10 h-10 rounded-full flex justify-center items-center">
                    <img
                      src={input.icon}
                      alt={`${input.name} Icon`}
                      className="w-6 h-6"
                    />
                  </span>
                  <input
                    type={input.type}
                    id={input.name}
                    name={input.name}
                    value={formData[input.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    onInput={
                      input.name === "mobile" ? input.onInput : undefined
                    } // Applied to mobile field only
                    className="w-full pl-14 py-3 bg-white border border-[#B5843F66] rounded-md focus:outline-none focus:ring-[#B5843F66] focus:border-[#B5843F66] text-black placeholder-gray-500"
                    placeholder={input.placeholder}
                    inputMode={input.name === "mobile" ? "numeric" : undefined}
                    pattern={input.name === "mobile" ? "\\d*" : undefined}
                  />
                  {["password", "confirm_password"].includes(input.name) && (
                    <span
                      className="absolute transform -translate-y-1/2 cursor-pointer right-2 top-1/2"
                      onClick={
                        input.name === "password"
                          ? togglePasswordVisibility
                          : toggleConfirmPasswordVisibility
                      }
                    >
                      <img
                        src={
                          input.name === "password"
                            ? showPassword
                              ? eyeopenicon
                              : eyecloseicon
                            : showConfirmPassword
                            ? eyeopenicon
                            : eyecloseicon
                        }
                        alt="Toggle Visibility"
                        className="w-6 h-6"
                      />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-[5.5rem] py-3 text-white bg-[#B5843F] rounded-xl hover:bg-[#9b6d32] transition duration-200"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span
                className="text-[#056CB2] font-medium cursor-pointer"
                onClick={() => {
                  dispatch(hideModal("registrationModal"));
                  dispatch(showModal("loginModal"));
                }}
              >
                Sign in
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
