// src/components/Navbar.js
/* eslint-disable jsx-a11y/anchor-is-valid */
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
// import { FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Lee Baillie
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>

          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>

          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>

          {/* <a
            href="https:www.linkedin.com/in/lee-baillie-873a1895"
            className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
            target="_blank"
          >
            <BadgeCheckIcon />
          </a> */}

          {/*           <a
            href="https:www.linkedin.com/in/lee-baillie-873a1895"
            //className="text-blue-400 text-xl"
            className="inline-flex text-white bg-blue-600 border-0 py-1 px-1 focus:outline-none hover:bg-green-600 rounded text-lg"
            target="_blank"
          >
            <FaLinkedinIn />
          </a> */}
        </nav>

        {/* <a
          href="https:www.linkedin.com/in/lee-baillie-873a1895"
          //className="text-blue-400 text-xl"
          className="inline-flex text-white bg-blue-500 border-0 py-1 px-1 focus:outline-none hover:bg-green-600 rounded text-lg"
          target="_blank"
        >
          <FaLinkedinIn />
        </a> */}

        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
