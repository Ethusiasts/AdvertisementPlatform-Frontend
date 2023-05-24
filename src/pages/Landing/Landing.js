import React from "react";
import Navigation from "../../components/Landing/Navigation";
import Hero from "../../components/Landing/Hero";
import "../../styles/landing.css";
import Clients from "../../components/Landing/Clients";
import Trust from "../../components/Landing/Trust";
import Advertisers from "../../components/Landing/Advertisers";
import Monetise from "../../components/Landing/Monetise";
import Growth from "../../components/Landing/Growth";
import Campaign from "../../components/Landing/Campaign";
import Testimonial from "../../components/Landing/Testimonial";
import Statistics from "../../components/Landing/Statistics";
import Grow from "../../components/Landing/Grow";
import Connect from "../../components/Landing/Connect";
import Footer from "../../components/Landing/Footer";

function Landing() {
  return (
    <>
      <Navigation />
      <Hero />
      <Clients />
      <Trust />
      <Advertisers />
      <Monetise />
      <Growth />
      <Campaign />
      <Testimonial />
      <Statistics />
      <Grow />
      <Connect />
      <Footer />
    </>
  );
}

export default Landing;
