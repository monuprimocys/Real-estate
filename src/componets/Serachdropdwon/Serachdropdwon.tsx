import React, { useState } from "react";
import dropdown from "../../assets/Image/dropdwon-icon.png";
import searchicon from "../../assets/Image/search-icon.png";
import { SearchDropdownProps } from "../../constants/Serachbtntypes"; // Adjust the path as necessary

const Searchdropdown: React.FC<SearchDropdownProps> = ({ fields }) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // Only one dropdown can be open at a time
  const [searchTerm, setSearchTerm] = useState<{ [key: string]: string }>({});

  const handleSelectChange = (fieldLabel: string, value: string) => {
    // Update selected option for the specific field
    setSelectedOptions((prev) => ({ ...prev, [fieldLabel]: value }));

    // Close the dropdown AFTER selection is properly updated
    setTimeout(() => {
      setDropdownOpen(null);
    }, 100); // Small delay to ensure the state is properly updated
  };

  const toggleDropdown = (fieldLabel: string) => {
    setDropdownOpen((prev) => (prev === fieldLabel ? null : fieldLabel)); // Open clicked dropdown, close others
  };

  const handleSearchChange = (fieldLabel: string, value: string) => {
    setSearchTerm((prev) => ({ ...prev, [fieldLabel]: value }));
  };

  const filteredOptions = (fieldLabel: string) => {
    const field = fields.find((f) => f.label === fieldLabel);
    if (!field || !field.options) return [];

    return field.options.filter((option) =>
      option.label
        .toLowerCase()
        .includes((searchTerm[fieldLabel] || "").toLowerCase())
    );
  };

  // Placeholder logic for specific fields
  const getPlaceholder = (fieldLabel: string) => {
    if (fieldLabel === "Prime Location") return "All Locations";
    if (fieldLabel === "Property Types") return "All Types";
    if (fieldLabel === "Property Status") return "Any"; // Custom placeholder for second dropdown
    return `Select ${fieldLabel}`;
  };

  return (
    <div className="grid items-center w-full gap-4 mx-auto mt-4 xl:justify-between xl:flex md:grid-rows-2 md:grid-cols-2">
      {fields.map((field, index) => (
        <div key={index} className="xl:w-[22%] relative">
          <label
            htmlFor={field.label}
            className="block mb-2 text-sm font-[600] capitalize Bostonfont text-[#000000]"
          >
            {field.label}
          </label>
          <div className="relative Bostonfont">
            {/* For searchable dropdowns */}
            {field.type === "select" && (
              <div className="relative">
                <div
                  className="w-full px-4 py-3 pr-10 text-gray-700 border-2 border-gray-300 rounded-lg cursor-pointer appearance-none focus:outline-none focus:border-[#B5843F]"
                  onClick={() => toggleDropdown(field.label)}
                >
                  {selectedOptions[field.label] || getPlaceholder(field.label)}
                  <span className="absolute transform -translate-y-1/2 right-4 top-1/2">
                    <img
                      src={dropdown}
                      alt="Dropdown Icon"
                      className="w-4 h-4"
                    />
                  </span>
                </div>

                {/* Dropdown options with search box */}
                {dropdownOpen === field.label && (
                  <div className="absolute z-10 w-full mt-1 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg max-h-60">
                    {/* Search input inside dropdown */}
                    <div className="p-2">
                      <input
                        type="text"
                        placeholder={`Search ${field.label}`}
                        value={searchTerm[field.label] || ""}
                        onChange={(e) =>
                          handleSearchChange(field.label, e.target.value)
                        }
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#B5843F]"
                      />
                    </div>

                    {/* Render filtered options */}
                    <ul>
                      {filteredOptions(field.label).map((option, optIndex) => (
                        <li
                          key={optIndex}
                          className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-200"
                          onClick={() =>
                            handleSelectChange(field.label, option.value)
                          }
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Regular input field */}
            {field.type === "text" && (
              <input
                type="text"
                id={field.label}
                placeholder={`Enter ${field.label}`}
                className="w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-[#B5843F]"
              />
            )}
          </div>
        </div>
      ))}

      {/* Search button */}
      <div className="flex items-center justify-center w-[43px] h-[43px] bg-[#B5843F] rounded-lg mt-5 cursor-pointer">
        <div className="h-[20px] w-[20px] flex justify-center items-center">
          <img src={searchicon} alt="Search" />
        </div>
      </div>
    </div>
  );
};

export default Searchdropdown;
