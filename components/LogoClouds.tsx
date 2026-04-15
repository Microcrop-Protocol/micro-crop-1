import Image from 'next/image'

const LogoClouds = () => {
  return (
    <div className="bg-[#1D5B37] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-white">Our Technology Stack</h2>
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 lg:gap-x-20">
          <Image
            alt="Chainlink"
            src="/img/chainlink.png"
            width={158}
            height={48}
            className="h-10 w-auto object-contain sm:h-12"
          />

          <Image
            alt="Base"
            src="/img/Base.png"
            width={158}
            height={48}
            className="h-10 w-auto object-contain sm:h-12"
          />

          <Image
            alt="WeatherXM"
            src="/img/xm-.png"
            width={158}
            height={48}
            className="h-10 w-auto object-contain sm:h-12"
          />
        </div>
      </div>
    </div>
  )
}

export default LogoClouds
