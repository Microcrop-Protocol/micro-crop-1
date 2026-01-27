"use client"

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "What is MicroCrop and who is it for?",
        answer:
            "MicroCrop is a B2B infrastructure platform that enables insurance companies, agricultural cooperatives, agri-lenders, MFIs, and NGOs to offer parametric crop insurance to smallholder farmers across Africa. We provide the technology stack — you bring the distribution.",
    },
    {
        question: "How does the partner onboarding process work?",
        answer:
            "Our team sets up your organization on the platform, deploys a dedicated on-chain risk pool on Base, and configures your white-label environment. From there, you can add staff accounts, import farmers (individually or in bulk with KYC), and define your coverage parameters. Most partners are operational within weeks.",
    },
    {
        question: "What data sources power the automated assessments?",
        answer:
            "We combine Chainlink oracles, WeatherXM ground weather stations, and satellite imagery from Planet and Sentinel to deliver accurate, automated crop damage assessments. When predefined triggers are met, smart contracts automatically process payouts — no manual claims required.",
    },
    {
        question: "What does the pricing model look like?",
        answer:
            "MicroCrop charges a simple platform fee on premiums, auto-collected on-chain. Partners set their own premium pricing for farmers. There are no hidden fees — the revenue model is fully transparent and verifiable on the blockchain. Contact us for details on pricing.",
    },
    {
        question: "Can we integrate MicroCrop with our existing systems?",
        answer:
            "Yes. MicroCrop is API-first with a RESTful API for custom frontend integrations. You can build on top of our infrastructure using your own interfaces, or use our ready-made dashboards. We also support CSV exports for compliance and reporting needs.",
    },
]

const FaqsSection = () => {
    return (
        <div className="bg-[#1D5B37]">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-5xl font-bold leading-10 tracking-tight text-white mb-12">Frequently asked questions</h2>
                    <dl className="space-y-4">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="border-b border-white/10 pb-4">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-white hover:opacity-80 transition-opacity py-4">
                                                <span className="text-lg font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    <span className={`transform transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}>
                                                        {open ? (
                                                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        ) : (
                                                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel
                                            as="dd"
                                            className="pr-12 pb-4 overflow-hidden transition-all duration-300 ease-in-out"
                                        >
                                            <p className="text-base leading-7 text-gray-100 animate-fade-in">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default FaqsSection
