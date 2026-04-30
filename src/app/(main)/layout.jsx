import React from "react";
import Header from "../components/sheared/header/Header";
import Navbar from "../components/sheared/navbar/Navber";
import HeaderMarque from "../components/sheared/marque/HeaderMarque";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <HeaderMarque></HeaderMarque>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default MainLayout;
