"use client"

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusSmallIcon } from '@heroicons/react/24/outline'
import { MinusSmallIcon } from '@heroicons/react/24/outline'
import React from 'react'

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]

const FaqsSection = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <div className='flex flex-col justify-around items-center h-[300px] text-center'>
                        <h4>How MicroCrop Works</h4>
                        <h2 className="text-5xl font-bold leading-10 tracking-tight text-gray-900">Transforming Agriculture, One Solution at a Time</h2>
                        <p>MicroCrop uses real-time weather data, automated smart contracts, and transparent financial systems to protect farmers from climate risks.  Each payout is data-verified and automatically processed, ensuring fair, fast, and accountable insurance for African farmers.</p>
                    </div>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </DisclosureButton>
                                        </dt>
                                        <DisclosurePanel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
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