import Image from "next/image";
import Link from "next/link";
import React from "react";
import userLogo from "@/assets/user.png";
import Navlink from "../../Navlink";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-7 w-[90%] mx-auto">
      <div></div>
      <div>
        <ul className="flex gap-4">
          <li>
            <Navlink href={"/"}>Home</Navlink>
          </li>
          <li>
            <Navlink href={"/about"}>About</Navlink>
          </li>
          <li>
            <Navlink href={"/career"}>Career</Navlink>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <Image src={userLogo} width={'auto'} height={"auto"} alt="User Logo"></Image>
        <Link className=" py-1 px-7 font-thin text-[16px] bg-black/90 text-white flex items-center rounded-none" href={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
