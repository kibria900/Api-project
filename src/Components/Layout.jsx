import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../pages/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <Outlet />

        <Footer/>
      </div>
    </>
  );
};

export default Layout;
