import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./HomeLayout.scss";
import Footer from "../components/Footer/Footer";

const HomeLayout = ({ children }) => {
  return (
    <div className="homelayout_container">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
