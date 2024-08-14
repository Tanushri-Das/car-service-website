import React from "react";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Details from "./Details";
import Products from "./Products";
import Choose from "./Choose";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Services/>
      <Details/>
      <Products/>
      <Choose/>
    </div>
  );
};

export default Homepage;
