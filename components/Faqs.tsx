"use client"

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "What is MicroCrop and who is it for?",
        answer:
            "MicroCrop is a B2B infrastructure platform that enables insurance companies, agricultural cooperatives, agri-lenders, MFIs, and NGOs worldwide to offer parametric crop and livestock insurance to farmers and pastoralists. We provide the technology stack — you bring the distribution. Our flagship markets are in Africa, with the platform designed to scale to any market exposed to climate risk.",
    },
    {
        question: "How does the partner onboarding process work?",
        answer:
            "Our team sets up your organization on the platform, provisions your dedicated coverage infrastructure, and configures your white-label environment. From there, you can add staff accounts, import farmers (individually or in bulk with KYC), and define your coverage parameters. Most partners are operational within weeks.",
    },
    {
        question: "How are payouts triggered?",
        answer:
            "Payouts are index-triggered, not based on individual claims. For crops, triggers track drought and flood conditions. For livestock, they track forage and vegetation health. When an index crosses a predefined threshold, payouts process automatically — no field visits, no manual claims to file.",
    },
    {
        question: "What does the pricing model look like?",
        answer:
            "MicroCrop charges a simple platform fee on premiums, collected automatically. Partners set their own premium pricing for farmers. There are no hidden fees — the revenue model is fully transparent and independently verifiable. Contact us for details on pricing.",
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
                    <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-white mb-12">Frequently asked questions</h2>
                    <dl className="space-y-4">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="border-b border-white/10 pb-4">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <DisclosureButton className="flex w-full items-start justify-between text-left text-white hover:opacity-80 transition-opacity py-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D5B37]">
                                                <span className="text-lg font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    <span className={`transform transition-transform duration-300 motion-reduce:transition-none ${open ? 'rotate-180' : 'rotate-0'}`}>
                                                        {open ? (
                                                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        ) : (
                                                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </span>
                                            </DisclosureButton>
                                        </dt>
                                        <DisclosurePanel
                                            as="dd"
                                            className="pr-12 pb-4 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out motion-reduce:transition-none"
                                        >
                                            <p className="text-base leading-7 text-gray-100 animate-fade-in motion-reduce:animate-none">{faq.answer}</p>
                                        </DisclosurePanel>
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
