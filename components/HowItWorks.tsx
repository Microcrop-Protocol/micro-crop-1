'use client'

import { useState } from 'react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const steps = [
  {
    id: 0,
    question: "01 Onboard",
    answer:
      "The MicroCrop team sets up your organization, provisions your dedicated coverage infrastructure, and configures your white-label environment. You get an isolated, multi-tenant setup matched to how you operate.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop",
  },
  {
    id: 1,
    question: "02 Configure",
    answer:
      "Add staff accounts. Import farmers and pastoralists in bulk or one at a time, with KYC built in. Set coverage terms, premium structures, and payout triggers for each crop and livestock product.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  },
  {
    id: 2,
    question: "03 Monitor",
    answer:
      "Real-time dashboards track policies, premiums collected, and field conditions across your portfolio. Access org-level analytics with revenue breakdowns, farmer demographics, and risk exposure metrics — all exportable via CSV for compliance and auditing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
  },
  {
    id: 3,
    question: "04 Payout",
    answer:
      "When an index trigger fires, payouts go straight to farmers and pastoralists through mobile money and local banking rails. Settlement runs automatically in the background. No claims to file, no manual processing.",
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
            <p className='text-xl text-emerald-700 font-semibold mb-4'>How MicroCrop Works</p>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-6">Partner Onboarding in Four Steps</h2>
            <p className='text-lg text-gray-600 max-w-3xl'>From organization setup to automated payouts, MicroCrop provides the end-to-end infrastructure your team needs to launch and manage parametric crop and livestock insurance at scale.</p>
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
