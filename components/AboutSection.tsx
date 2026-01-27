'use client'

import Image from 'next/image'
import Link from 'next/link'

const timeline = [
  {
    name: 'Idea & Research',
    description:
      'Identified the gap in parametric crop insurance infrastructure for Africa. Began researching blockchain-based solutions, weather oracle integrations, and mobile money payout rails.',
    date: '2024',
    dateTime: '2024',
  },
  {
    name: 'Platform Development',
    description:
      'Started building the MicroCrop platform — smart contracts on Base, Chainlink oracle integrations, WeatherXM data pipelines, and M-Pesa payout infrastructure via Swypt.',
    date: 'Mid 2024',
    dateTime: '2024-06',
  },
  {
    name: 'MVP Complete',
    description:
      'Completed the core platform: multi-tenant architecture, white-label onboarding, risk pool deployment, automated damage assessments, and analytics dashboards.',
    date: 'Late 2024',
    dateTime: '2024-12',
  },
  {
    name: 'Seeking Partners & Funding',
    description:
      'Actively seeking early partner organizations and seed funding to deploy the platform with insurance companies, cooperatives, and agri-lenders across East Africa.',
    date: '2025',
    dateTime: '2025',
  },
]

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

        {/* Timeline section */}
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-[#1D5B37]"
                >
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
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
            <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="/img/flow.png"
                alt="Flow"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="/img/Base.png"
                alt="Base"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="/img/xm-.png"
                alt="WeatherXM"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="/img/mpesa.png"
                alt="M-Pesa"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="/img/plgenesis.jpg"
                alt="PLGenesis"
                width={158}
                height={48}
              />
            </div>
            <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#1D5B37] opacity-25"
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  We&apos;re a team of builders passionate about using blockchain, data science, and
                  agricultural technology to solve real problems for African farming communities.
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Our team combines expertise in smart contract development, satellite data analysis,
                  insurance product design, and mobile money integrations to build the platform
                  infrastructure that organizations need to serve farmers at scale.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1152&h=823&fit=crop"
                    alt="Team working together"
                    width={1152}
                    height={823}
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=768&h=604&fit=crop"
                      alt="Office collaboration"
                      width={768}
                      height={604}
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1152&h=842&fit=crop"
                      alt="Platform development"
                      width={1152}
                      height={842}
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <Image
                      src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=768&h=604&fit=crop"
                      alt="Data analysis"
                      width={768}
                      height={604}
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
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
