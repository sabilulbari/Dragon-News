import React from "react";
import Navbar from "../components/sheared/navbar/Navber";
import { monserat } from "../layout";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${monserat.className}`}>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthLayout;
