import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { Dayjs } from "dayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import emailicon from "../../../assets/Image/loginemailicon.png";
import profilicon from "../../../assets/Image/registrationprofileicon.png";
import phone from "../../../assets/Image/calliconregistration.png";
import message from "../../../assets/Image/message.png";
import { useParams } from "react-router-dom";
import { useUser_add_sceduleMutation } from "../../../app/api/user_add_scedule/user_add_sceduleApi";
import { Toaster, toast } from "react-hot-toast";

export default function FormScheduleTour() {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<Dayjs | null>(null);
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [messageText, setMessageText] = React.useState("");

  const { id } = useParams();
  const [sendMessage] = useUser_add_sceduleMutation();

  const property_id = id;

  console.log("The selected property_id", property_id);

  // Form submission handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      property_id: property_id,
      email: email,
      date: selectedDate?.format("MM/DD/YYYY"),
      time: selectedTime?.format("HH:mm"),
      name: name,
      phone: phoneNumber,
      message: messageText,
    };

    // Send the form data to the API
    sendMessage(formData)
      .then((response) => {
        toast.success(response.data?.message);
      })
      .catch((error) => {
        toast.error(response.data?.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center w-full mx-auto space-x-4">
        <div className="grid items-center justify-between w-full grid-cols-1 gap-8 xl:grid-cols-2">
          {/* Date Picker */}
          <div className="flex flex-col w-full gap-2">
            <label
              className="text-sm font-medium text-[#000000] "
              htmlFor="SelectDate"
            >
              Select Date
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)} // Handle state change correctly
                renderInput={(params) => <TextField {...params} fullWidth />}
                className="w-full"
                format="DD/MM/YYYY"
              />
            </LocalizationProvider>
          </div>

          {/* Time Picker */}
          <div className="flex flex-col w-full gap-2">
            <label
              className="text-sm font-medium text-[#000000]"
              htmlFor=" SelectTime"
            >
              Select Time
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Select Time"
                value={selectedTime}
                onChange={(newValue) => setSelectedTime(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
                className="w-full"
              />
            </LocalizationProvider>
          </div>

          {/* Name */}
          <div className="w-full">
            <label
              className="text-sm font-medium text-[#000000]"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative flex items-center mt-2">
              <span className="absolute left-2 bg-[#B5843D36] w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center">
                <img
                  src={profilicon}
                  alt="Profile Icon"
                  className="object-cover w-[1.5rem] h-[1.5rem]"
                />
              </span>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-14 py-4 bg-white border border-[#B5843F66] rounded-md focus:outline-none focus:ring-[#B5843F66] focus:border-[#B5843F66] text-[#000000] placeholder-gray-500"
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="w-full">
            <label
              className="text-sm font-medium text-[#000000]"
              htmlFor="phone"
            >
              Phone
            </label>
            <div className="relative flex items-center mt-2">
              <span className="absolute left-2 bg-[#B5843D36] w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center">
                <img
                  src={phone}
                  alt="Phone Icon"
                  className="object-cover w-[1.5rem] h-[1.5rem]"
                />
              </span>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full pl-14 py-4 bg-white border border-[#B5843F66] rounded-md focus:outline-none focus:ring-[#B5843F66] focus:border-[#B5843F66] text-[#000000] placeholder-gray-500"
                placeholder="Enter your phone"
              />
            </div>
          </div>

          {/* Email */}
          <div className="w-full">
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
                className="w-full pl-14 py-4 bg-white border border-[#B5843F66] rounded-md focus:outline-none focus:ring-[#B5843F66] focus:border-[#B5843F66] text-[#000000] placeholder-gray-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Message */}
          <div className="w-full mt-2">
            <label
              className="text-sm font-medium text-[#000000]"
              htmlFor="message"
            >
              Message
            </label>
            <div className="relative flex items-center mt-2">
              <span className="absolute left-2 bg-[#B5843D36] w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center">
                <img
                  src={message}
                  alt="Message Icon"
                  className="object-cover w-[1.5rem] h-[1.5rem]"
                />
              </span>
              <textarea
                id="message"
                name="message"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="w-full pl-14 py-3 flex justify-center items-center bg-white border border-[#B5843F66] rounded-md focus:outline-none focus:ring-[#B5843F66] focus:border-[#B5843F66] text-[#000000] placeholder-gray-500"
                placeholder="Enter your message"
                rows="2"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      {/* Submit Button */}
      <div className="flex items-center justify-center w-full mt-4">
        <div className="mx-auto w-fit ">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full px-10 py-[10px] text-white transition-colors duration-300 bg-[#B5843F] rounded-lg fontpoppins font-[500] cursor-pointer flex justify-center items-center"
          >
            Schedule
          </button>
        </div>
      </div>

      <Toaster />
    </div>
  );
}
