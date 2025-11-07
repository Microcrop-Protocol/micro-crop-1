'use client'

import { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { MicroCropImage } from '@/constants/img'

const steps = [
  {
    id: 0,
    question: "01 Seamless Onboarding",
    answer:
      "Getting started with MicroCrop is simple and straightforward. Farmers can register through our mobile app or web platform by providing basic information about their farm. Our intuitive onboarding process guides you through setting up your profile, adding your crops, and connecting with our network of agricultural experts.",
    image: MicroCropImage
  },
  {
    id: 1,
    question: "02 Real-Time Monitoring",
    answer:
      "Once registered, farmers gain access to real-time weather data, soil conditions, and crop health monitoring. Our platform uses satellite imagery and IoT sensors to provide accurate, up-to-date information about your farm. You'll receive alerts about potential risks, optimal planting times, and irrigation schedules tailored to your specific crops and location.",
    image: MicroCropImage
  },
  {
    id: 2,
    question: "03 Smart Contracts & Insurance",
    answer:
      "MicroCrop's automated smart contracts ensure fair and transparent insurance coverage. When weather conditions trigger a claim, our system automatically verifies the data and processes payouts without lengthy paperwork. This blockchain-based approach eliminates intermediaries, reduces processing time, and ensures farmers receive compensation quickly when they need it most.",
    image: MicroCropImage
  },
  {
    id: 3,
    question: "04 Market Access & Growth",
    answer:
      "Connect directly with buyers and access premium markets for your crops. Our platform provides market price information, helps you negotiate better deals, and facilitates transparent transactions. You'll also gain access to training resources, expert consultation, and a community of fellow farmers sharing best practices for sustainable agriculture and business growth.",
    image: MicroCropImage
  },
]

export default function HowItWorks() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <div className='flex flex-col justify-around items-center mb-20 text-center'>
            <h2 className='text-xl text-[#1D5B37] font-semibold mb-4'>How MicroCrop Works</h2>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-6">Transforming Agriculture, One Solution at a Time</h2>
            <p className='text-lg text-gray-600 max-w-3xl'>MicroCrop uses real-time weather data, automated smart contracts, and transparent financial systems to protect farmers from climate risks. Each payout is data-verified and automatically processed, ensuring fair, fast, and accountable insurance for African farmers.</p>
          </div>
          <dl className="space-y-6">
            {steps.map((step, index) => (
              <Disclosure
                as="div"
                key={step.id}
                className="border-b border-gray-200 pb-6"
                defaultOpen={index === 0}
              >
                {({ open }) => {
                  if (open && openIndex !== index) {
                    setOpenIndex(index)
                  }
                  return (
                    <>
                      <dt>
                        <DisclosureButton
                          className="flex w-full items-start justify-between text-left text-gray-900 hover:opacity-80 transition-opacity py-4"
                          onClick={() => setOpenIndex(index)}
                        >
                          <span className="font-semibold text-2xl sm:text-3xl text-black">{step.question}</span>
                          <span className="ml-6 flex items-center">
                            <span className={`transform transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}>
                              {open ? (
                                <MinusSmallIcon className="h-8 w-8" aria-hidden="true" />
                              ) : (
                                <PlusSmallIcon className="h-8 w-8" aria-hidden="true" />
                              )}
                            </span>
                          </span>
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel
                        as="dd"
                        className="w-full overflow-hidden transition-all duration-500 ease-in-out"
                      >
                        <div className="animate-fade-in px-4">
                          <p className="text-lg leading-8 text-gray-600 mb-8">{step.answer}</p>
                          <Image src={step.image} alt={step.question} className='rounded-xl shadow-lg w-full' />
                        </div>
                      </DisclosurePanel>
                    </>
                  )
                }}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
