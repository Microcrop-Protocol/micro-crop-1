import Image from "next/image";

export default function TrustedAllies() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-12">
          Trusted by Leading Agricultural Organizations
        </h2>
        <div className="-mx-6 grid grid-cols-2 gap-4 overflow-hidden sm:mx-0 sm:gap-6 md:grid-cols-3">
          <div className="bg-[#1D5B37] rounded-lg p-6 sm:p-8 lg:p-10 flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-[#1D5B37] rounded-lg p-6 sm:p-8 lg:p-10 flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-[#1D5B37] rounded-lg p-6 sm:p-8 lg:p-10 flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-[#1D5B37] rounded-lg p-6 sm:p-8 lg:p-10 flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
              alt="Laravel"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-[#1D5B37] rounded-lg p-6 sm:p-8 lg:p-10 flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-[#1D5B37] rounded-lg p-6 sm:p-8 lg:p-10 flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
