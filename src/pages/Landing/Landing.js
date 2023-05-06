import React from "react";
import Navigation from "../../components/Landing/Navigation";
import Hero from "../../components/Landing/Hero";
import "../../styles/landing.css";
import Clients from "../../components/Landing/Clients";
import Trust from "../../components/Landing/Trust";
import Advertisers from "../../components/Landing/Advertisers";
import Monetise from "../../components/Landing/Monetise";

function Landing() {
  return (
    <>
      <Navigation />
      <Hero />
      <Clients />
      <Trust />
      <Advertisers />
      <Monetise />
    </>
  );
}

export default Landing;
