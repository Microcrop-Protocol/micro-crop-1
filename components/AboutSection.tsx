'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Building the infrastructure layer for parametric crop insurance in Africa.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  MicroCrop is building the technology platform that will enable insurance companies, cooperatives,
                  lenders, and NGOs to launch parametric crop insurance products — powered by blockchain, satellite
                  data, and automated smart contracts. We believe protecting smallholder farmers from climate risk
                  shouldn&apos;t require years of infrastructure development.
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
          <div className="relative isolate overflow-hidden bg-[#1D5B37] px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built on technology you can trust
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-100">
              Our platform is built on proven infrastructure — Base for on-chain transparency,
              Chainlink and WeatherXM for reliable data oracles, and M-Pesa for last-mile farmer payouts.
            </p>
            <div className="mx-auto mt-20 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-4">
              <Image
                className="max-h-12 w-full object-contain"
                src="/img/chainlink.png"
                alt="Chainlink"
                width={158}
                height={48}
              />
              <Image
                className="max-h-12 w-full object-contain"
                src="/img/Base.png"
                alt="Base"
                width={158}
                height={48}
              />
              <Image
                className="max-h-12 w-full object-contain"
                src="/img/xm-.png"
                alt="WeatherXM"
                width={158}
                height={48}
              />
              <Image
                className="max-h-12 w-full object-contain"
                src="/img/mpesa.png"
                alt="M-Pesa"
                width={158}
                height={48}
              />
            </div>
            <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#a8d5ba] to-[#1D5B37] opacity-25"
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
                We&apos;re a team of builders passionate about using blockchain, data science, and
                agricultural technology to solve real problems for African farming communities.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {/* Mary */}
              <div className="flex flex-col">
                <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src="/img/mary.jpg"
                    alt="Mary Gathoni — Co-Founder & CEO"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">Mary Gathoni</h3>
                <p className="text-base font-semibold text-[#1D5B37]">Co-Founder &amp; CEO</p>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Mary leads strategy, partnerships, and product direction at MicroCrop. She holds a
                  Bachelor&apos;s degree in International Relations, is a Google-certified Data Analyst,
                  and a blockchain developer through Web3Bridge. Mary has built award-winning products
                  including Strimz (Lisk Hackathon &amp; Celo Incubator winner) and Antikorrupt (UNODC
                  Code for Integrity AI Track winner, 2024). She brings strong experience in stakeholder
                  coordination, data-driven product design, and building technology solutions tailored
                  for African markets.
                </p>
              </div>
              {/* Moses */}
              <div className="flex flex-col">
                <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src="/img/moses.jpg"
                    alt="Moses Timbwa — Co-Founder & CTO"
                    fill
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">Moses Timbwa</h3>
                <p className="text-base font-semibold text-[#1D5B37]">Co-Founder &amp; CTO</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our vision: Making parametric crop insurance accessible across Africa.
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We&apos;re building toward a future where any organization — insurer, cooperative, lender, or
              NGO — can launch crop insurance products for their farmers in weeks, not years. Here&apos;s what
              we&apos;re working toward.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-[#1D5B37]">5 Countries</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-gray-900">Initial target markets</p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Kenya, Nigeria, Ghana, Tanzania, and Uganda — where smallholder farmers face the greatest climate risk.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">Transparent</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  Simple platform fee, auto-collected on-chain.
                </p>
                <p className="mt-2 text-base leading-7 text-gray-400">
                  Partners set their own pricing for farmers. No hidden costs in our revenue model.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-[#1D5B37] p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">Millions</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">Farmers we aim to reach</p>
                <p className="mt-2 text-base leading-7 text-green-200">
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
              agri-lenders, and NGOs — who want to bring parametric crop insurance to their farmers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/#contact"
                className="rounded-full bg-[#1D5B37] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#164a2c] transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/#platform"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#1D5B37] transition-colors"
              >
                Learn about the platform <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
