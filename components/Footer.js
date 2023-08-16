import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="text-white-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3"></h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white-600 hover:text-white-800">FAQ</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Account</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">
                    Media Center
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white-600 hover:text-white-800">
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Jobs</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">
                    Ways to Watch
                  </a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">
                    Terms of Use
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white-600 hover:text-white-800">Privacy</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">
                    Cookie Preferences
                  </a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">
                    Corporate Information
                  </a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">
                    Contact Us
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-white-600"
                  ></label>
                  <input
                    placeholder="Email Address"
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className=" lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded">
                  Get Stated
                  <BsChevronRight className="items-center justify-center flex mt-1 ml-1" />
                </button>
              </div>
              {/* <p className="text-white-500 text-sm mt-2 md:text-left text-center">
                Bitters chicharrones fanny pack
                <br className="lg:block hidden" />
                waistcoat green juice
              </p> */}
            </div>
          </div>
          <a href="/" className="underline">
            Netflix Pakistan
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
