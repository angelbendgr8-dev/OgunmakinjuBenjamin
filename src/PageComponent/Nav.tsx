import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div>
      <nav className=" w-[100%] bg-[#F5F5F6] md:px-4  py-4  md:flex md:flex-row  md:py-0 md:h-[100px]">
        <div className="md:md:w-[90%] w-[95%]  lg:w-[80%]  mx-auto  flex md:flex-row flex-col md:items-center md:justify-between items-start md:w-full ">
          <div className="hidden md:flex flex-row items-center w-[20%]">
            <p className="text-[26px] font-[900] text-[#575757] leading-normal uppercase">
              <Link href="#">angelBen</Link>
            </p>
          </div>

          <div className="flex flex-row items-center justify-between   w-full sm:mx-auto">
            <div className="md:hidden flex flex-row items-center">
              <p className="text-[16px] font-[900] text-[#575757] leading-normal uppercase">
                <Link href="#">AngelBen</Link>
              </p>
            </div>

            <button
              onClick={() => setShowMenu(!showMenu)}
              className=" text-black md:hidden block"
            >
              <div className="h-8 w-8">
                <Image src="asset/menu.svg" alt="menu" width={30} height={20}/>
              </div>
            </button>
            <div className="md:flex hidden md:flex-row flex-col items-center justify-end md:space-x-6 lg:space-x-20  w-full">
              <ul className="md:flex hidden md:flex-row flex-col items-center justify-end md:space-x-6 lg:space-x-20 md:text-[16px] lg:text-[18px] text-[15px]">
                <li className="capitalize"></li>
                <li className="text-[24px]  hover:underline  hover:text-slate-400 text-black leading-normal font-[600]">
                  <Link href="#about">ABOUT</Link>
                </li>
                <li className="text-[24px]  hover:underline hover:text-slate-600 text-slate-400  leading-normal font-[600]">
                  <a href="#project">PROJECTS</a>
                </li>

                <li className="text-[24px]  hover:underline  hover:text-slate-400 text-black leading-normal font-[600]">
                  <Link href="#contact">CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>
          {showMenu ? (
            <ul className="flex md:hidden md:flex-row flex-col items-start py-8 w-full md:space-x-8 md-space-y-0 font-semibold md:text-[18px] text-[15px]">
              <li className="capitalize py-4 w-full text-black hover:border-b-2">
                <a href="#about">ABOUT</a>
              </li>
              <li className="capitalize py-4 w-full text-black hover:border-b-2">
                <a href="#project">PROJECTS</a>
              </li>
              <li className="capitalize py-4 w-full text-black hover:border-b-2">
                <a href="#contact">CONTACT US</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
