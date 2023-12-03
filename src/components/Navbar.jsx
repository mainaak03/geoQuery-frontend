import React from "react";
import {ellipse} from "../../public/assets";
function Navbar (){
    return (
      <>
        <nav className="p-4 fixed top-0 left-0 w-full z-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:px-8 lg:px-16">
            <div className="flex items-center space-x-6">
              <img src={ellipse} alt="ellipse" className="w-10 h-10" />
              <div className="text-Primary text-3xl md:text-4xl font-outfit font-bold">
                GeoQuerry
              </div>
            </div>
            <ul className="flex flex-col md:flex-row md:space-x-16 space-y-4 md:space-y-0 space-x-16 justify-center items-center mt-2">
              <li>
                <a
                  href="#"
                  className="text-Primary hover:text-gray-300 text-2xl font-outfit"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-Primary hover:text-gray-300 text-xl font-outfit"
                >
                  About Us
                </a>
              </li>
              <li>
                <button className="bg-onPrimary hover:opacity-80 text-Primary text-xl h-11 w-36 rounded-lg font-outfit flex items-center justify-center">
                  <div className="text-center">Get Started</div>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}

export default Navbar;