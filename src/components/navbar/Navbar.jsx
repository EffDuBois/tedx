import React from "react";
import NavbarButton from "../buttons/NavbarButton";
import TEDxLogo from "../buttons/TEDxLogo";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header class="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full bg-invert text-lg py-3 lg:py-0 sticky top-0">
      <nav
        class="relative w-full  px-4 lg:flex lg:items-center lg:justify-between"
        aria-label="Global"
      >
        <div class="flex items-center justify-between">
          {/* <a 
              class="flex-none text-xl font-semibold text-white"
              href="#"
              aria-label="Brand"
            >
              Brand
            </a> */}
          {/* <div className="py-5 ">
            <TEDxLogo />
          </div> */}
          <Link className="flex-none" to="/">
            <h1 className="text-5xl text-invert">
              <span className="text-ted">
                TED<sup>x</sup>
              </span>
              BITBangalore
            </h1>
          </Link>
          <div class="lg:hidden">
            <button
              type="button"
              class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 border border-white font-medium text-white shadow-lg align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-lg"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: "white" }}
              />
              <svg
                class="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          class="hs-collapse h-full hidden overflow-hidden transition-all duration-300 basis-full grow lg:block py-2"
        >
          <div class="flex flex-col gap-y-4 h-full gap-x-0 mt-5 lg:flex-row lg:items-stretch lg:justify-end lg:gap-y-0 lg:mt-0 lg:pl-7">
            <NavbarButton to="/">Home</NavbarButton>
            <NavbarButton to="/events">Event</NavbarButton>
            <NavbarButton to="/speakers">Speakers</NavbarButton>
            <NavbarButton to="/about">About Us</NavbarButton>
            <NavbarButton to="/register">Register</NavbarButton>
          </div>
        </div>
      </nav>
      {/* <Link to="/">
        <img
          className="justify-self-start w-1/3 m-5 ml-8"
          src={logo}
          alt="Tedx logo"
        />
      </Link>
      <div className="flex flex-row">
        <button className="">About Us</button>
        <button>Event</button>
        <button>Contact Us</button>
        <button>Register</button>
      </div> */}
    </header>
  );
};

export default Navbar;
