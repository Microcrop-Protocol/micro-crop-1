import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="microcrop-background bg-cover bg-bottom h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-start p-5 md:py-10 md:px-20">
        <article className="text-white flex flex-col justify-center md:justify-around h-[500px]">
          <div className="my-[20px] md:my-[0px]">
            <h1 className="text-4xl md:text-7xl xl:text-8xl font-semibold md:my-[20px] leading-tight">
              Protect your harvest with <br /> affordable, automated <br />
              Crop Insurance
            </h1>
          </div>
          <h2 className="mb-[20px] md:my-[30px] max-w-[800px] ">
            MicroCrop uses blockchain and weather data to deliver affordable, automated crop insurance — no paperwork, no delays, just fair payouts when farmers need them most.
          </h2>
          <button className=" py-3 px-6 w-[150px] rounded-md bg-[#D9A886] text-white font-semibold hover:bg-white hover:text-black hover:border-aqua hover:cursor-pointer">
            Our Solutions
          </button>
        </article>
      </div>
    </div>
  );
};

export default HeroSection;
