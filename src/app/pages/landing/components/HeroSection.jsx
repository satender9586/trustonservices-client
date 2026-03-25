"use client";
import React from "react";
import {
  FaArrowRight,
  FaSnowflake,
  FaTools,
  FaFan,
  FaThermometerHalf,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa6";


const HeroSection = () => {
  const icons= [
    FaSnowflake,
    FaFan,
    FaThermometerHalf,
    FaTools,
  ];

  return (
    <header className="">
       <div className="border container mx-auto px-4 sm:px-10 relative z-10">
        Header seciton
      </div>
     
    </header>
  );
};

export default HeroSection;

