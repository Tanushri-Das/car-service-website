import React from "react";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Details from "./Details";
import Products from "./Products";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Services/>
      <Details/>
      <Products/>
    </div>
  );
};

export default Homepage;
