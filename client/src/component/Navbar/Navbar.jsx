
import React from 'react';
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom'
const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="secondaryColor py-2 px-5 flex justify-between items-center h-12">
      <div className="flex gap-4 items-center">

        {sidebarOpen ? (
          <IoMdClose
            className="text-2xl cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        ) : (
          <FiMenu
            className="text-2xl cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        )}
        <Link
          to={"/"}
        >E-Learning Platform</Link>
      </div>
      <div className="flex gap-2 items-center">
        Shubham
        <CgProfile className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
