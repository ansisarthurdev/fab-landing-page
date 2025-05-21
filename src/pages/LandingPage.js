import React from "react";

//components
import Hero from "../components/landing-page/Hero";
import MenuHighlights from "../components/landing-page/MenuHighlights";
import About from "../components/landing-page/About";
import Work from "../components/landing-page/Work";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <MenuHighlights />
      <About />
      <Work />
    </>
  );
};

export default LandingPage;
