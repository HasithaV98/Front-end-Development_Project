import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <nav className="bg-[#6B3CC9] pt-[26px] pb-[26px] pl-[80px] pr-[80px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-white text-3xl font-semibold flex items-center space-x-2"
          >
            <img src="/WhiteSecondaryLogo.png" alt="" className="h-10 w-auto" />
            <span>AT DIGITAL</span>
          </Link>
        </div>
        <div className="hidden sm:flex space-x-5 ">
          <Link to="/services" className="text-white capitalize">
            SERVICES
          </Link>
          <Link to="/about" className="text-white capitalize">
            ABOUT US
          </Link>
          <Link to="/contact" className="text-white capitalize">
            CONTACT US
          </Link>
          <Link to="/careers" className="text-white capitalize">
            CAREERS
          </Link>
        </div>
        <div className="sm:hidden">
          <button className="text-white block sm:hidden ml-5">
            <i className="fas fa-bars text-white">
              <MenuIcon/>
            </i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
