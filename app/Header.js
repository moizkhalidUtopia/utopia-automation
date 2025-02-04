import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import headerLogo from "../public/utopia-automation-logo.svg";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const header = () => {
  return (
    <header className={poppins.className}>
      <div className="mx-auto container flex items-center">
        <nav className="main-nav-wrapper px-2 sm:px-0 py-2.5 w-full lg:w-4/5 flex items-center">
          <div className="flex flex-wrap justify-between items-center w-full">
            <Link href="/" className="flex items-center">
              <Image blur="true" src={headerLogo} className="w-auto mr-3 h-16 sm:h-20" alt="Utopia Automation logo" />
            </Link>
            <div className="burger-menu inline-block lg:hidden">
              <div className="bar1 my-2 h-1 w-9 rounded-md bg-[#352c2a] transition-all"></div>
              <div className="bar2 my-2 h-1 w-9 rounded-md bg-[#352c2a] transition-all"></div>
              <div className="bar3 my-2 h-1 w-9 rounded-md bg-[#352c2a] transition-all"></div>
            </div>
            <div className="nav-menu hidden justify-between items-center w-full absolute lg:relative lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0 ml-auto">
                <li>
                  <Link href="#" className="font-medium block py-2 pr-4 pl-3 text-gray-700 border-b hover:text-[#aaa08d] lg:border-0">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-medium block py-2 pr-4 pl-3 text-gray-700 border-b hover:text-[#aaa08d] lg:border-0">
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-medium block py-2 pr-4 pl-3 text-gray-700 border-b hover:text-[#aaa08d] lg:border-0">
                    MISSION & VISION
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-medium block py-2 pr-4 pl-3 text-gray-700 border-b hover:text-[#aaa08d] lg:border-0">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default header;
