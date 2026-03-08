import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";

import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Image
        src="/img/hero-bg.jpg"
        alt="African farmland landscape"
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom -z-10"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35 -z-10" />
      {/* Dashed grid lines & sparkles overlay */}
      <svg
        className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
        viewBox="0 0 1440 913"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="72.5" y1="-32.5" x2="72.5" y2="945.5" stroke="#CBCBCB" strokeOpacity="0.5" strokeDasharray="8 8" />
        <line x1="507.5" y1="-32.5" x2="507.5" y2="945.5" stroke="#CBCBCB" strokeOpacity="0.5" strokeDasharray="8 8" />
        <line x1="942.5" y1="-32.5" x2="942.5" y2="945.5" stroke="#CBCBCB" strokeOpacity="0.5" strokeDasharray="8 8" />
        <line x1="1377.5" y1="-32.5" x2="1377.5" y2="945.5" stroke="#CBCBCB" strokeOpacity="0.5" strokeDasharray="8 8" />
        <path d="M1027 517L1029.26 529.879L1043 532L1029.26 534.121L1027 547L1024.74 534.121L1011 532L1024.74 529.879L1027 517Z" fill="white" />
        <path d="M377 526L378.556 535.015L388 536.5L378.556 537.985L377 547L375.444 537.985L366 536.5L375.444 535.015L377 526Z" fill="white" />
        <path d="M1175 197L1176.7 206.874L1187 208.5L1176.7 210.126L1175 220L1173.3 210.126L1163 208.5L1173.3 206.874L1175 197Z" fill="white" />
        <path d="M305 112L308.394 132.606L329 136L308.394 139.394L305 160L301.606 139.394L281 136L301.606 132.606L305 112Z" fill="white" />
      </svg>
      <Navbar />
      <div className="flex flex-1 items-center px-5 sm:px-8 md:px-20 py-20 sm:py-28 md:py-32">
        <article className="text-white flex flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-7xl xl:text-8xl font-semibold leading-tight">
            Parametric Crop &amp; Livestock{' '}
            <br className="hidden md:block" />
            Insurance Infrastructure{' '}
            <br className="hidden md:block" />
            for Africa
          </h1>
          <h2 className="max-w-[800px] mt-6 mb-10 sm:mt-8 sm:mb-12 text-lg md:text-xl text-gray-100">
            Enable your organization to offer automated, blockchain-powered crop and livestock insurance to millions of smallholder farmers and pastoralists.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white group w-fit"
            >
              <span>Request a Demo</span>
              <ArrowRightCircleIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#platform"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 border border-white/40 hover:border-white group w-fit"
            >
              <span>Explore Platform</span>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default HeroSection;
