import Image from "next/image";

export default function PartnerCTA() {
  return (
    <div id="contact" className="relative bg-gray-900 overflow-hidden">
      <Image
        src="/img/newsletter-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Diagonal gradient overlay matching original SVG */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black" />
      <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 py-24 sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Launch Parametric Crop Insurance?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-100">
            Schedule a demo to see how MicroCrop can power your crop insurance products. Our team will walk you through the platform, pricing, and integration options.
          </p>
          <div className="mx-auto mt-10 flex max-w-md flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&to=support@microcrop.app&su=Schedule%20a%20Demo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 text-center"
            >
              Schedule a Demo
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=support@microcrop.app&su=Partner%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 text-center"
            >
              Partner Inquiry
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
