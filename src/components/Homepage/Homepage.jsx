import React from "react";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Details from "./Details";
import Products from "./Products";
import Choose from "./Choose";
import Team from "./Team/Team";
import Testimonials from "./Testimonial/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Details />
      <Products />
      <Team />
      <Choose />
      <Testimonials/>
    </div>
  );
};

export default Homepage;
