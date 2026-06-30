import Image from 'next/image'

const LogoClouds = () => {
  return (
    <div className="bg-[#1D5B37] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Backed by Protocol Labs — understated credibility lockup */}
        <div className="flex flex-col items-center">
          <p className="text-xs/6 font-semibold uppercase tracking-[0.2em] text-white/60">
            Backed by
          </p>
          <div className="mt-3 flex items-center justify-center">
            <Image
              alt="Protocol Labs"
              src="/logos/protocol-labs.svg"
              width={300}
              height={48}
              className="h-8 w-auto object-contain sm:h-9"
              priority
            />
          </div>
        </div>

        {/* Divider between the credibility signal and the technology stack */}
        <div className="mx-auto mt-12 h-px w-full max-w-xs bg-white/10 sm:mt-16" />

        <h2 className="mt-12 text-center text-lg/8 font-semibold text-white sm:mt-16">
          Our Technology Stack
        </h2>
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 lg:gap-x-20">
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
