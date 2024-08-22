"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="text-lg m-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-20">
            <div className="flex">
              <Link
                className="flex items-center space-x-2 font-bold text-gray-800"
                href="/"
              >
                <svg
                  className="fill-cyan-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                  />
                </svg>
                <span>Pocket</span>
              </Link>
            </div>
            <div className="items-center font-extralight max-w-1022:hidden sm:flex sm:space-x-8">
              <Link
                href="/features"
                className="text-gray-900 hover:text-gray-700"
              >
                Features
              </Link>
              <Link
                href="/reviews"
                className="text-gray-900 hover:text-gray-700"
              >
                Reviews
              </Link>
              <Link
                href="/pricing"
                className="text-gray-900 hover:text-gray-700"
              >
                Pricing
              </Link>
              <Link href="/faq" className="text-gray-900 hover:text-gray-700">
                FAQs
              </Link>
            </div>
          </div>
          <div className="max-w-1022:hidden sm:flex sm:space-x-6">
            <Link
              href="/login"
              className="h-10 w-18 text-sm rounded-xl px-4 py-2 bg-transparent border border-gray-300 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Log in
            </Link>

            <Link
              className="h-10 w-28 text-sm bg-black text-white px-6 py-2 rounded-xl"
              href="/download"
            >
              Download
            </Link>
          </div>
          <div className="flex w-1022:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M17 14l-5-5-5 5" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="w-1022:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              FAQs
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <Link
              href="/login"
              className="block w-full text-center text-gray-900 bg-transparent border border-gray-300 px-4 py-2 rounded-md hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Log in
            </Link>

            <Link
              href="/download"
              className="block w-full text-center bg-black text-white px-4 py-2 mt-2 rounded-md"
            >
              Download the app
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
