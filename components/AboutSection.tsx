'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <div className="bg-white">
      <div className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto text-balance">
                Building the global infrastructure layer for parametric crop &amp; livestock insurance.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  MicroCrop is building the technology platform that will enable insurance companies, cooperatives,
                  lenders, and NGOs worldwide to launch parametric crop and livestock insurance products — powered by automated,
                  index-based settlement and reliable weather and vegetation data. Protecting farmers and pastoralists from climate risk
                  shouldn&apos;t require years of infrastructure development — anywhere in the world.
                </p>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1280&h=1067&fit=crop"
                alt="Team collaborating on platform infrastructure"
                width={1280}
                height={1067}
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Technology stack */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-700 to-teal-700 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built on technology you can trust
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-emerald-50">
              Our platform is built on proven infrastructure for transparency,
              verifiability, and reliable data.
            </p>
            <div className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:mt-20 sm:gap-x-16 lg:gap-x-20">
              <Image
                className="h-10 w-auto object-contain sm:h-12"
                src="/img/Base.png"
                alt="Base"
                width={158}
                height={48}
              />
              <Image
                className="h-10 w-auto object-contain sm:h-12"
                src="/img/xm-.png"
                alt="WeatherXM"
                width={158}
                height={48}
              />
            </div>
            <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-emerald-300 to-teal-700 opacity-25"
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Founders section */}
        <div className="mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Founders</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We&apos;re a team of builders using blockchain, data science, and
                agricultural technology to solve real problems for farming communities — starting in the markets we know best, and scaling globally.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {/* Mary */}
              <div className="flex flex-col">
                <div className="overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src="/img/mary.jpeg"
                    alt="Mary Gathoni — Co-Founder"
                    width={853}
                    height={1280}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">Mary Gathoni</h3>
                <p className="text-base font-semibold text-emerald-700">Co-Founder</p>
                <a
                  href="mailto:gathoni@microcrop.app"
                  className="mt-1 w-fit text-sm text-gray-600 hover:text-emerald-700 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  gathoni@microcrop.app
                </a>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Mary leads strategy, partnerships, and product direction at MicroCrop. She holds a
                  Bachelor&apos;s degree in International Relations, is a Google-certified Data Analyst,
                  and a blockchain developer through Web3Bridge. Mary has built award-winning products
                  including Strimz (Lisk Hackathon &amp; Celo Incubator winner) and Antikorrupt (UNODC
                  Code for Integrity AI Track winner, 2024). She brings strong experience in stakeholder
                  coordination, data-driven product design, and building technology solutions tailored
                  for emerging markets and global scale.
                </p>
              </div>
              {/* Moses */}
              <div className="flex flex-col">
                <div className="overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src="/img/moses.jpg"
                    alt="Moses Timbwa — Co-Founder"
                    width={853}
                    height={1280}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">Moses Timbwa</h3>
                <p className="text-base font-semibold text-emerald-700">Co-Founder</p>
                <a
                  href="mailto:moses@microcrop.app"
                  className="mt-1 w-fit text-sm text-gray-600 hover:text-emerald-700 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  moses@microcrop.app
                </a>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Moses leads engineering, infrastructure, and smart contract architecture at MicroCrop.
                  He is a full-stack and blockchain developer with experience building scalable systems
                  optimized for low-connectivity environments. Moses has contributed to open-source
                  ecosystems such as StarkNet and Bitcoin and has built multiple blockchain applications
                  across fintech and Web3. He focuses on designing secure, automated systems that abstract
                  technical complexity while delivering reliable performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision section (replaces stats) */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
              Our vision: Making parametric crop &amp; livestock insurance accessible worldwide.
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We&apos;re building toward a future where any organization — insurer, cooperative, lender, or
              NGO — can launch crop and livestock insurance products for their farmers and pastoralists in weeks, not years. Here&apos;s what
              we&apos;re working toward.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-emerald-700">Africa First</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-gray-900">Flagship launch markets</p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Launching in Kenya, Nigeria, Ghana, Tanzania, and Uganda — regions with the highest climate exposure and the clearest demand — then expanding globally to Latin America, South &amp; Southeast Asia, and beyond.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">Transparent</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  Simple platform fee, collected automatically.
                </p>
                <p className="mt-2 text-base leading-7 text-gray-400">
                  Partners set their own pricing for farmers. No hidden costs in our revenue model.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-emerald-800 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">Millions</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">Farmers we aim to reach</p>
                <p className="mt-2 text-base leading-7 text-emerald-100">
                  Through partner organizations — insurers, cooperatives, lenders, and NGOs — serving farming communities at scale.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Interested in partnering with us?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;re looking for early partner organizations — insurance companies, cooperatives,
              agri-lenders, and NGOs — who want to bring parametric crop and livestock insurance to their farmers and pastoralists.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/#contact"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                Get in Touch
              </Link>
              <Link
                href="/#platform"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-emerald-700 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                Learn about the platform <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
