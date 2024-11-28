import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { Dayjs } from "dayjs"; // Import Dayjs types
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function FormScheduleTour() {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);

  return (
    <div className="flex items-center">
      <div className="flex items-center  w-[70%] space-x-4  mx-auto">
        {/* Localization provider for DatePicker */}
        <div className="w-[100%] ">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)} // Handle state change correctly
              renderInput={(params) => <TextField {...params} fullWidth />} // Render input with fullWidth
              className="w-[28rem]"
            />
          </LocalizationProvider>
        </div>

        {/* Localization provider for TimePicker */}
        <div className="w-[100%] ">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Select Time"
              renderInput={(params) => <TextField {...params} fullWidth />} // Ensure consistent layout
              className="w-[28rem]"
            />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
}
