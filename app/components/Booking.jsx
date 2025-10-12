"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { setHours, setMinutes } from "date-fns";
import { FaLocationArrow } from "react-icons/fa";
import { useToast } from "../hooks/use-toast";
import emailjs from "emailjs-com";

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    email: "",
    houseSize: [1000, 5000],
    selectedDate: null,
    selectedTime: null,
    package: "",
    cleaningType: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
    },
  };

  const minTime = setHours(setMinutes(new Date(), 0), 7);
  const maxTime = setHours(setMinutes(new Date(), 0), 20);
  const minSelectableDate = new Date();
  minSelectableDate.setDate(minSelectableDate.getDate() + 2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phoneNumber") {
      const phoneError = validatePhoneNumber(value);
      setErrors({ ...errors, phoneNumber: phoneError });
    }
  };

  const validatePhoneNumber = (phone) => {
    const phoneTrimmed = phone.replace(/\D/g, "");
    return phoneTrimmed.length < 7
      ? "Phone number must be at least 7 digits long."
      : "";
  };

  const handleTimeChange = (newTime) => {
    if (newTime && formData.selectedDate) {
      const updatedTime = new Date(formData.selectedDate);
      updatedTime.setHours(newTime.getHours(), 0);
      setFormData({ ...formData, selectedTime: updatedTime });
    }
  };

  const handleSubmit = () => {
    let isValid = true;
    let newErrors = {};

    const phoneError = validatePhoneNumber(formData.phoneNumber);
    if (phoneError) {
      isValid = false;
      newErrors.phoneNumber = phoneError;
    }

    if (!formData.fullName.trim()) {
      isValid = false;
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.address.trim()) {
      isValid = false;
      newErrors.address = "Address is required.";
    }
    if (!formData.selectedDate) {
      isValid = false;
      newErrors.date = "Please select a date.";
    }
    if (!formData.selectedTime) {
      isValid = false;
      newErrors.time = "Please select a time.";
    }
    if (!formData.package) {
      isValid = false;
      newErrors.package = "Please select a package.";
    }
    if (!formData.cleaningType) {
      isValid = false;
      newErrors.cleaningType = "Please select a cleaning type.";
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);

      const date = formData.selectedDate
        ? formData.selectedDate.toLocaleDateString()
        : "Not specified";

      const time = formData.selectedTime
        ? formData.selectedTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "Not specified";

      const emailData = {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        email: formData.email,
        houseSize: `${formData.houseSize[0]} sq.ft - ${formData.houseSize[1]} sq.ft`,
        date: date,
        time: time,
        package: formData.package,
        cleaningType: formData.cleaningType,
      };

      emailjs
        .send(
          "service_ppa6p2v",
          "template_nak7pks",
          emailData,
          "YUfYkQIlu3D674JQr"
        )
        .then((response) => {
          console.log("Form submitted successfully:", response);
          toast({
            title: "Thank you!",
            description: `${formData.fullName}, Your appointment has been scheduled for ${date} at ${time}. We will be in touch with you shortly.`,
          });

          setFormData({
            fullName: "",
            phoneNumber: "",
            address: "",
            email: "",
            houseSize: [1000, 5000],
            selectedDate: null,
            selectedTime: null,
            package: "",
            cleaningType: "",
          });
          setIsSubmitting(false);
        })
        .catch((err) => {
          console.error("Error sending form:", err);
          toast({
            title: "Error",
            description:
              "There was an issue submitting your form. Please try again.",
          });
          setIsSubmitting(false);
        });
    }
  };

  const openTalkToChat = () => {
    if (window && window.Tawk_API) {
      try {
        window.Tawk_API.maximize();
      } catch (err) {
        toast({
          title: "Please Check your Internet connection and try again",
        });
      }
    }
  };

  return (
    <div
      ref={sectionRef}
      id="booknow"
      className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28"
    >
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        {/* Left Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariant}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Request a Free Cleaning Quote
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Simply provide us with your contact information along with your
              requirements, and we will get back to you within 24 hours with a
              personalized quote.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Not convinced yet?
            </h3>
            <button
              onClick={() =>
                (window.location.href =
                  "mailto:mapleleafcleanersplus@gmail.com")
              }
              className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-200"
            >
              <span>Contact</span>
              <FaLocationArrow />
            </button>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={formVariant}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Get Your Quote
              </h2>
              <p className="text-gray-600 mt-2">
                Fill in the details below to get started
              </p>
            </div>

            <div className="space-y-6">
              {/* Name and Phone */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-sm">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-600 text-sm">{errors.phoneNumber}</p>
                  )}
                </div>
              </div>

              {/* Address and Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-colors"
                    placeholder="Enter your address"
                  />
                  {errors.address && (
                    <p className="text-red-600 text-sm">{errors.address}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Email{" "}
                    <span className="text-gray-400 font-normal text-xs">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Day of Service *
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={formData.selectedDate}
                      onChange={(newValue) =>
                        setFormData({ ...formData, selectedDate: newValue })
                      }
                      minDate={minSelectableDate}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                        },
                      }}
                    />
                  </LocalizationProvider>
                  {errors.date && (
                    <p className="text-red-600 text-sm">{errors.date}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Time of Service *
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      value={formData.selectedTime}
                      onChange={handleTimeChange}
                      minTime={minTime}
                      maxTime={maxTime}
                      views={["hours"]}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                        },
                      }}
                    />
                  </LocalizationProvider>
                  {errors.time && (
                    <p className="text-red-600 text-sm">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* House Size */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  House Size (sq.ft)
                </label>
                <input
                  type="range"
                  min="1000"
                  max="5000"
                  step="100"
                  value={formData.houseSize[0]}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    setFormData({ ...formData, houseSize: [value, 5000] });
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-medium">
                    {formData.houseSize[0]} sq.ft
                  </span>
                  <span>to 5000 sq.ft</span>
                </div>
              </div>

              {/* Package and Cleaning Type */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Select Package *
                  </label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-colors bg-white cursor-pointer"
                    required
                  >
                    <option value="">Choose a package</option>
                    <option value="standard">Package 1: Standard</option>
                    <option value="premium">Package 2: Premium</option>
                  </select>
                  {errors.package && (
                    <p className="text-red-600 text-sm">{errors.package}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Type of Cleaning *
                  </label>
                  <select
                    name="cleaningType"
                    value={formData.cleaningType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-colors bg-white cursor-pointer"
                    required
                  >
                    <option value="">Select cleaning type</option>
                    <option value="move-in">Move In</option>
                    <option value="move-out">Move Out</option>
                    <option value="regular">Regular</option>
                    <option value="deep-clean">Deep Clean</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.cleaningType && (
                    <p className="text-red-600 text-sm">
                      {errors.cleaningType}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-white py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
              >
                {isSubmitting ? "Submitting..." : "Book Now"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
