import React from "react";
import Image from "next/image";
import DrawzyLogo from "../../../public/images/components/drawzy-logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-[35rem] px-6 py-4">
      <div className="flex items-center">
        <Image src={DrawzyLogo} alt="Drawzy Logo" height={150} width={150} />
      </div>
      <div className="hidden md:flex gap-10 space-x-6 text-sm">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          Modes
        </a>
        <a href="#" className="hover:text-gray-300">
          Download
        </a>
        <a href="#" className="hover:text-gray-300">
          Leaderboard
        </a>
        <a href="#" className="hover:text-gray-300">
           About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
