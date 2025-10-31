import Image from "next/image";

export default function TrustedAllies() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h5>For Farmers</h5>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            No Paperwork. No delay. Fair Payouts
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            We offer educational resources, training programs, and support ,
            fostering their growth in blockchain and cryptocurrency.
          </p>
        </div>
        <div className="-mx-6 grid grid-cols-2 gap-2 overflow-hidden sm:mx-0 md:grid-cols-3">
          <div className="bg-gray-400/5 rounded-lg p-8 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 rounded-lg p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 rounded-lg p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 rounded-lg p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
              alt="Laravel"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 rounded-lg p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 rounded-lg p-6 sm:p-10">
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
