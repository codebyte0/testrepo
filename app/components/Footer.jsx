import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGlobeAmericas,
  FaMailBulk,
} from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/logo.png";

const Footer = () => {
  const links = [
    { id: 2, name: "About", url: "#about" },
    { id: 3, name: "Services", url: "#services" },
    { id: 4, name: "Testimonials", url: "#testimonials" },
    { id: 5, name: "Get a Quote", url: "#booknow" },
  ];

  return (
    <div className="bg-[#faf8f8fd] text-black mt-14 rounded-t-3xl flex justify-center items-center w-full">
      <div className="container flex flex-col items-center">
        <div className="logo">
          <Image width={150} height={150} src={logo} alt="Maple Leaf Cleaners Plus Logo" />
        </div>
        <h1 className="sm:text-3xl text-xl font-bold sm:text-left -translate-y-8">
          Maple Leaf Cleaners Plus
        </h1>
        <span className="text-sm text-gray-700 -translate-y-6">
          Shine Brighter with Us
        </span>
        <div className="flex flex-wrap justify-center items-center w-full">
          {/* Company details */}
          <div className="py-8 px-4">
            {/* Social handles */}
            <Link
              className="flex items-center gap-1 justify-center"
              href="https://www.facebook.com/profile.php?id=61565494418337"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-black" />
              Facebook page
            </Link>
            <Link 
              className="flex items-center gap-1 mt-3" 
              href="https://mapleleafcleanersplus.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobeAmericas />
              mapleleafcleanersplus.com
            </Link>
            <Link 
              className="flex items-center gap-1 mt-3" 
              href="mailto:mapleleafcleanersplus@gmail.com"
            >
              <FaMailBulk /> 
              mapleleafcleanersplus@gmail.com
            </Link>
          </div>
          {/* Footer Links */}
          <div className="flex">
            <div className="py-8 px-4">
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} className="hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-1">
          &copy; {new Date().getFullYear()} Maple Leaf Cleaners Plus
        </div>
      </div>
    </div>
  );
};

export default Footer;