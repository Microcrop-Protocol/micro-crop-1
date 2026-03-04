import Image from 'next/image'
import React from 'react'

const LogoClouds = () => {
  return (
    <div className="bg-[#1D5B37] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-white">Our Technology Stack</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <Image
            alt="Chainlink"
            src="/img/chainlink.png"
            width={158}
            height={48}
            className="max-h-12 w-full object-contain"
          />

          <Image
            alt="Base"
            src="/img/Base.png"
            width={158}
            height={48}
            className="max-h-12 w-full object-contain"
          />

          <Image
            alt="WeatherXM"
            src="/img/xm-.png"
            width={158}
            height={48}
            className="max-h-12 w-full object-contain"
          />

          <Image
            alt="M-Pesa"
            src="/img/mpesa.png"
            width={158}
            height={48}
            className="max-h-12 w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default LogoClouds
