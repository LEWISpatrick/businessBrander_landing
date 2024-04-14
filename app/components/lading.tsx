'use client'
import { useEffect } from "react";
import { Hero } from "./hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {GrowSocial} from './GrowSocial'
import Benefits from "./benefits";
import { Pricing } from "./pricing";
import { Footer } from "./footer copy";
import WhatWeDo from "./whatwedo";
import Faq from "./faq";
import { Calendly } from "./calendly";

const Landing = () => {
  useEffect(() => {
    AOS.init({
      disable: 'phone',
      duration: 800,
      easing: 'ease-out-cubic'
    });
  }, []);  // Dependency array added to ensure this runs only once

  return (
    <>    <Hero />

    <WhatWeDo/>
    <Calendly/>
    <GrowSocial />
    
    <Pricing/>
    <Faq/>
    <Footer/>

    </>

    
    );
}

export default Landing;
