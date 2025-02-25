"use client";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import SearchOverlay from "./SearchOverlay";
export default function Navbar() {
  const [locale, setLocale] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white p-4 bg-inherit relative bg-[#2F2E35]">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>

        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="hover:text-[#d4af37] mt-2">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#d4af37] mt-2">
            About Us
          </Link>
          <Link href="/services" className="hover:text-[#d4af37] mt-2">
            Our Services
          </Link>
          <Link href="/products" className="hover:text-[#d4af37] mt-2">
            Our Products
          </Link>
          <Link href="/contact" className="hover:text-[#d4af37] mt-2">
            Contact Us
          </Link>
          <button
            onClick={toggleLanguage}
            className={`px-4 py-2 rounded-md ml-5 flex items-center space-x-2 ${
              locale === "en" ? "flex-row-reverse" : "mr-2"
            }`}
          >
            <img
              src={locale === "en" ? "/sa.svg" : "/us.svg"}
              alt="Language Icon"
              className="w-10 h-5 ml-2"
            />
            <span className="hover:text-[#d4af37]">
              {locale === "en" ? "العربية" : "English"}
            </span>
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <FaWhatsapp
            className="text-3xl cursor-pointer text-[#d4af37]"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=966541024824",
                "_blank"
              )
            }
          />

          <FiSearch
            className="text-4xl cursor-pointer text-[#d4af37]"
            onClick={() => setShowSearch(true)}
          />
        </div>
        <SearchOverlay showSearch={showSearch} setShowSearch={setShowSearch} />

        <button className="lg:hidden text-2xl" onClick={toggleSidebar}>
          <HiOutlineBars3 />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-[rgba(30,30,30,0.9)] backdrop-blur-sm transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden z-50 shadow-lg`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={toggleSidebar}
        >
          <IoClose />
        </button>

        <div className="flex flex-col items-center space-y-6 pt-16 px-6">
          <Link
            href="/"
            className="text-3xl font-bold mb-16"
            onClick={toggleSidebar}
          >
            Logo
          </Link>

          <Link
            href="/"
            className="hover:text-[#d4af37] font-bold text-2xl"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#d4af37] font-bold text-2xl"
            onClick={toggleSidebar}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="hover:text-[#d4af37] font-bold text-2xl"
            onClick={toggleSidebar}
          >
            Our Services
          </Link>
          <Link
            href="/products"
            className="hover:text-[#d4af37] font-bold text-2xl"
            onClick={toggleSidebar}
          >
            Our Products
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#d4af37] font-bold text-2xl"
            onClick={toggleSidebar}
          >
            Contact Us
          </Link>

          <div className="flex space-x-6">
            <FaWhatsapp
              className="text-4xl cursor-pointer hover:text-[#d4af37]"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=966541024824",
                  "_blank"
                )
              }
            />
          </div>

          <button
            onClick={toggleLanguage}
            className={`px-4 py-2 rounded-md ml-5 flex items-center space-x-2 ${
              locale === "en" ? "flex-row-reverse" : "mr-2"
            }`}
          >
            <img
              src={locale === "en" ? "/sa.svg" : "/us.svg"}
              alt="Language Icon"
              className="w-10 h-5 ml-2"
            />
            <span className="text-2xl hover:text-[#d4af37]">
              {locale === "en" ? "العربية" : "English"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
