import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validateEmail, validateName } from "../../utils/validation";
import toast from "react-hot-toast";
import { postService } from "../../utils/services";

const CustomInput = React.forwardRef(({ value, onClick, label, placeholder = '' }, ref) => {
  return (
    <div className="relative w-full">
      {/* Icon Container */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-6 h-6 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>

      {/* Input Field */}
      <div className="relative">
        <input
          ref={ref}
          value={value}
          onClick={onClick}
          className="datepicker-input rounded-lg border-[1px] border-[#424448] h-[50px] w-full pl-10 p-4 bg-transparent text-white"
          placeholder={placeholder}
          readOnly
        />
        <label
          htmlFor="floating_outlined"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {label}
        </label>
      </div>
    </div>
  );
});

const FormSection = ({ data = {} }) => {
  const [type, setType] = useState("Joyride");

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);


  const [rentalDate, setRentalDate] = useState(today);
  const [returnDate, setReturnDate] = useState(tomorrow);

  const [loading, setLoading] = useState(false);


  const [insurance, setInsurance] = useState('basic');
  const [fullName, setFullName] = useState('');
  const [birthDay, setBirthDate] = useState();
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const onChanges = (key, value) => {
    switch (key) {
      case "insurance":
        setInsurance(value);
        break;
      case "Full Name":
        setFullName(value);
        break;
      case "Date of Birth":
        setBirthDate(value);
        break;
      case "Contact Number":
        setNumber(value);
        break;
      case "Email Address":
        setEmail(value);
        break;
      default:
    }
  };


  const handleRentalChange = (date) => {
    setRentalDate(date);
  };

  const handleReturnChange = (date) => {
    setReturnDate(date);
  };

  const handleSubmit = async () => {
    const postdata = ({
      type,
      fullName,
      birthDay,
      number,
      email,
      rentalDate,
      returnDate,
      insurance,
      carId: data.category_id,
      carName: data.car_name,
      price: data.daily_rate,
      rentType: "day"
    });


    if (!validateName(fullName)) {
      toast.error('Please input your name correctly');
      return;
    }
    if (!birthDay) {
      toast.error('Please select your birthday');
      return;
    }
    if (!(number)) {
      toast.error('Please input your phone number correctly');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Please enter your email address correctly');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    const res = await postService('/request', postdata);
    if (res) {
      toast.success('Your request has been successfully submitted');
      setLoading(false);
    }

  };

  return (
    <>
      <div className="w-full flex justify-center items-center md:mt-[58.47px] mt-[37.41px]">
        <div className="w-full flex flex-col border-[1px] md:p-6 p-[14px] gap-6 border-[#3A3B3F] md:max-w-[496px] max-w-[348px]">
          <div className="flex flex-row gap-[10px]">
            <div className="bg-[#424448] rounded-lg gap-2 flex justify-between items-center h-[34px] w-full p-2">
              <div className="flex md:gap-1 gap-0">
                <span className="font-syne font-normal text-[10px] leading-[18px] text-white">
                  Price :
                </span>
                <span className="font-syne font-normal text-[13px] leading-[18.2px] text-[#A5FF2B]">
                  {data.daily_rate}$/day
                </span>
              </div>
              <span className="font-syne font-normal text-[10px] leading-[18px] text-white">
                Daily
              </span>
            </div>
            <div className="bg-[#424448] rounded-lg gap-2 flex justify-between items-center  h-[34px] w-full p-2">
              <div className="flex md:gap-1 gap-0">
                <span className="font-syne font-normal text-[10px] leading-[18px] text-white">
                  Price :
                </span>
                <span className="font-syne font-normal text-[13px] leading-[18.2px] text-[#A5FF2B]">
                  {data.weekly_rate}$/week
                </span>
              </div>
              <span className="font-syne font-normal text-[10px] leading-[18px] text-white">
                Week
              </span>
            </div>
          </div>
          <div className="flex justify-between w-full gap-2">
            {["Joyride", "Wedding", "Corporate"].map((item, ind) => (
              <button
                key={ind}
                onClick={() => setType(item)}
                className={`border-[1px] border-[#424448] px-3 gap-[10px] md:w-[144px] w-[94.67px] h-8 ${item === type ? "bg-[#A5FF2B] text-black" : "text-white"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {[
              "Full Name",
              "Date of Birth",
              "Contact Number",
              "Email Address",
            ].map((item, id) => (
              id === 1 ? <div key={id}><DatePicker
                dateFormat="d MMMM, yyyy" // Format the date display
                placeholderText="Date of Birth"
                selected={birthDay}
                showYearDropdown
                customInput={<CustomInput />}
                onChange={v => onChanges(item, v)}
                label="Date of Birth"
                className="w-full" /></div> :
                <input
                  key={item}
                  onChange={(e) => onChanges(item, e.target.value)}
                  className="p-4 gap-3 rounded-lg border-[1px] border-[#424448] h-[50px] w-full bg-transparent text-white"
                  placeholder={item}
                />
            ))}
            {/* Date Picker */}
            <div className="relative">
              <DatePicker
                selected={rentalDate}
                onChange={handleRentalChange}
                dateFormat="d MMMM, yyyy" // Format the date display
                placeholderText="Select a date"
                customInput={<CustomInput />}
                label="Date of Rental"
                className="w-full"
              />
            </div>
            {/* Time Picker */}
            <div className="relative">
              <DatePicker
                selected={rentalDate}
                onChange={handleRentalChange}
                showTimeSelect
                showTimeSelectOnly
                timeFormat="HH:mm"
                timeIntervals={15}
                placeholderText="Select a time"
                dateFormat="HH:mm"
                customInput={<CustomInput />}
                label="Delivery Time"
                className="w-full"
              />
            </div>
            {/* Date Picker */}
            <div className="relative">
              <DatePicker
                selected={returnDate}
                onChange={handleReturnChange}
                dateFormat="d MMMM, yyyy" // Format the date display
                placeholderText="Select a date"
                customInput={<CustomInput />}
                label="Return Date"
                className="w-full"
              />
            </div>
            {/* Time Picker */}
            <div className="relative">
              <DatePicker
                selected={returnDate}
                onChange={handleReturnChange}
                showTimeSelect
                showTimeSelectOnly
                timeFormat="HH:mm"
                timeIntervals={15}
                placeholderText="Select a time"
                dateFormat="HH:mm"
                customInput={<CustomInput />}
                label="Date of Rental"
                className="w-full"
              />
            </div>

            {/* Option */}
            <div className="flex md:flex-row flex-col md:gap-1 gap-0 mt-6 justify-between items-center">
              <div className="w-full flex md:justify-center justify-start items-center">
                <span className="font-syne font-normal text-sm leading-[25.2px] text-white">
                  Type of Insurance:
                </span>
              </div>
              <div className="flex justify-between items-center md:gap-2 gap-4">
                <div className="flex items-center gap-1">
                  <label
                    htmlFor="disabled-radio-1"
                    className="font-syne font-normal text-sm leading-[16.94px] text-white"
                  >
                    Basic Insurance
                  </label>
                  <input
                    id="disabled-radio-1"
                    type="radio"
                    onChange={e => { if (e.target.checked) onChanges('insurance', 'basic'); }}
                    defaultChecked
                    name="disabled-radio"
                    className="w-4 h-4 text-[#A5FF2B] bg-gray-100 border-gray-300 focus:ring-[#A5FF2B] focus:ring-2 checked:bg-[#A5FF2B] checked:border-[#A5FF2B]  "
                  />
                </div>
                <div className="flex items-center  gap-1">
                  <label
                    htmlFor="disabled-radio-1"
                    className="font-syne font-normal text-sm leading-[16.94px] text-white"
                  >
                    Full Insurance
                  </label>
                  <input
                    id="disabled-radio-1"
                    type="radio"
                    value=""
                    onChange={e => { if (e.target.checked) onChanges('insurance', 'full'); }}
                    name="disabled-radio"
                    className="w-4 h-4 text-[#A5FF2B] bg-gray-100 border-gray-300 focus:ring-[#A5FF2B] dark:focus:ring-[#A5FF2B] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="bg-[#424448] rounded-lg gap-2 flex justify-end items-center h-[34px] w-full p-2">
                <div className="flex gap-1">
                  <span className="font-syne font-normal text-[10px] leading-[18px] text-white">
                    1-6 Days:
                  </span>
                  <span className="font-syne font-normal text-[13px] leading-[18.2px] text-[#A5FF2B]">
                    {data.daily_rate}$/day
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button disabled={loading} onClick={handleSubmit} className="bg-[#A5FF2B] disabled:bg-[#6b9b28] md:w-[448px] w-[320px] h-[49px] text-white p-[var(--OtherGap9)] px-[var(--OtherGap11)] gap-[10px]">
                Submit a Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSection;
