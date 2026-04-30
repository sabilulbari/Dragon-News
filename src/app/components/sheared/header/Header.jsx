import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 space-y-5">
      <Image src={logo} alt="logo" width={"400"} height={"50"}></Image>

      <div className="spane-y-2.5 text-center">
        <p className="font-normal text-[18px]text-[#706F6F]">Journalism Without Fear or Favour</p>

        <h1 className="font-medium text-[20px] text-[#706F6F]">
          <strong className="text-black/65">{format(new Date(), "EEE, ")}</strong>
          {format(new Date(), "MMM dd, yyy")}
        </h1>
      </div>
    </div>
  );
};

export default Header;
