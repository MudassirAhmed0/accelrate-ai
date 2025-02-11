import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Cta from "../common/cta/Cta";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Cta />
      <Footer />
    </>
  );
};

export default Layout;
