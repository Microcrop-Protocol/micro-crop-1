'use client'

import { useState } from 'react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const steps = [
  {
    id: 0,
    question: "01 Onboard",
    answer:
      "MicroCrop team sets up your organization, deploys your dedicated risk pool on Base, and configures your white-label environment. Get started with a fully isolated multi-tenant setup tailored to your operations.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop",
  },
  {
    id: 1,
    question: "02 Configure",
    answer:
      "Add staff accounts, import farmers in bulk or one-by-one with built-in KYC management, and define coverage parameters for your insurance products. Our platform supports full customization of policy terms, premium structures, and payout triggers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  },
  {
    id: 2,
    question: "03 Monitor",
    answer:
      "Real-time dashboards track policies, premiums collected, weather events, and satellite data across your portfolio. Access org-level analytics with revenue breakdowns, farmer demographics, and risk exposure metrics — all exportable via CSV for compliance and auditing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
  },
  {
    id: 3,
    question: "04 Payout",
    answer:
      "Automated damage assessments powered by Chainlink oracles, WeatherXM stations, and satellite imagery (Planet/Sentinel) trigger smart contract payouts directly to farmers via M-Pesa through Swypt. No manual claims processing required.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
  },
]

export default function HowItWorks() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <div className='flex flex-col justify-around items-center mb-20 text-center'>
            <h2 className='text-xl text-[#1D5B37] font-semibold mb-4'>How MicroCrop Works</h2>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-6">Partner Onboarding in Four Steps</h2>
            <p className='text-lg text-gray-600 max-w-3xl'>From organization setup to automated farmer payouts, MicroCrop provides the end-to-end infrastructure your team needs to launch and manage parametric crop insurance at scale.</p>
          </div>
          <dl className="space-y-6">
            {steps.map((step) => {
              const isOpen = openIndex === step.id
              return (
                <div key={step.id} className="border-b border-gray-200 pb-6">
                  <dt>
                    <button
                      className="flex w-full items-start justify-between text-left text-gray-900 hover:opacity-80 transition-opacity py-4"
                      onClick={() => setOpenIndex(isOpen ? -1 : step.id)}
                    >
                      <span className="font-semibold text-2xl sm:text-3xl text-black">{step.question}</span>
                      <span className="ml-6 flex items-center">
                        {isOpen ? (
                          <MinusSmallIcon className="h-8 w-8" aria-hidden="true" />
                        ) : (
                          <PlusSmallIcon className="h-8 w-8" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </dt>
                  {isOpen && (
                    <dd className="w-full overflow-hidden">
                      <div className="animate-fade-in px-4">
                        <p className="text-lg leading-8 text-gray-600 mb-8">{step.answer}</p>
                        <Image
                          src={step.image}
                          alt={step.question}
                          width={1200}
                          height={600}
                          sizes="(max-width: 1024px) 100vw, 768px"
                          className='rounded-xl shadow-lg w-full'
                        />
                      </div>
                    </dd>
                  )}
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </div>
  )
}
