"use client"

import Image from "next/image";

const differentiators = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=1000&fit=crop",
    title: "Transparent Platform Fee",
    description: "Simple, transparent revenue model with fees collected automatically. No hidden costs — partners keep the majority of premiums collected.",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=1000&fit=crop",
    title: "Multi-Tenant Architecture",
    description: "Each partner gets an isolated organization, dedicated coverage infrastructure, and separated data. Full white-label support with independent configurations.",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=1000&fit=crop",
    title: "Full Transparency",
    description: "All premiums, payouts, and platform fees are independently verifiable. Provide your stakeholders and regulators with full auditability of every transaction.",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=1000&fit=crop",
    title: "Regulatory-Ready",
    description: "Built-in KYC tracking, comprehensive audit trails, and CSV data exports. Meet compliance requirements out of the box with exportable records for regulators.",
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=1000&fit=crop",
    title: "USSD Support",
    description: "Every farmer can check policy status, receive notifications, and confirm payouts — via web, mobile app, or USSD for offline access. Built to meet farmers wherever they are, on whatever device they use.",
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=1000&fit=crop",
    title: "Data-Driven Triggers",
    description: "Automated assessments draw on weather, rainfall, and satellite vegetation data to fire accurate, tamper-resistant payout triggers for crops and livestock. Every decision is rule-based, not discretionary.",
  },
];


const WhyMicroCrop = () => {
  return (
    <div className="bg-white py-24 sm:py-32 font-poppins">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-4">
          <p className="text-lg font-semibold text-[#1D5B37] mb-2">Why MicroCrop</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Platform Differentiators
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Purpose-built infrastructure for parametric crop and livestock insurance worldwide, with transparency, compliance, and scale at its core.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {differentiators.map((item) => (
            <article
              key={item.id}
              className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={item.imageUrl}
                alt=""
                width={800}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-200 lg:hidden">
                {item.description}
              </p>

              <div
                aria-hidden="true"
                className="hidden lg:flex absolute inset-0 bg-[#1D5B37]/75 items-center justify-center p-8 opacity-0 transition-opacity duration-300 motion-reduce:transition-none group-hover:opacity-100 group-focus-within:opacity-100"
              >
                <p className="text-white text-center">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyMicroCrop;
