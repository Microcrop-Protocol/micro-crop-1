import React from "react";
import Navbar from "./Navbar";

import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";

const HeroSection = () => {
  return (
    <div className="microcrop-background bg-cover bg-bottom h-full sm:h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-start p-5  md:px-20 h-full">
        <article className="text-white flex flex-col justify-around md:justify-center h-full">
          <div className="">
            <h1 className="text-4xl md:text-7xl xl:text-8xl font-semibold leading-tight">
              Protect your harvest with <br /> affordable, automated <br />
              Crop Insurance
            </h1>
          </div>
          <h2 className="max-w-[800px] my-10">
            MicroCrop uses blockchain and weather data to deliver affordable, automated crop insurance no paperwork, no delays, just fair payouts when farmers need them most.
          </h2>
          <button className="inline-flex items-center gap-2 py-3 px-6 rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white group w-[190px]">
            <span>Our Solutions</span>
            <ArrowRightCircleIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </article>
      </div>
    </div>
  );
};

export default HeroSection;
