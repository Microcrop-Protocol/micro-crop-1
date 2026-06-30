"use client"

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { faqs } from '@/lib/faqs'

const FaqsSection = () => {
    return (
        <div className="bg-gradient-to-br from-emerald-700 to-teal-700">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-white mb-12">Frequently asked questions</h2>
                    <dl className="space-y-4">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="border-b border-white/10 pb-4">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <DisclosureButton className="flex w-full items-start justify-between text-left text-white hover:opacity-80 transition-opacity py-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-700">
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
