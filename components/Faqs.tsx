"use client"

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "What is microcrop and how does it work?",
        answer:
            "Microcrop is a platform that connects smallholder farmers with agricultural experts and resources. We provide tools for crop management, market access, and financial services to help farmers maximize their yields and income.",
    },
    {
        question: "Who can use microcrop services?",
        answer:
            "Microcrop is designed for smallholder farmers, agricultural cooperatives, and farming communities. Whether you're growing vegetables, grains, or cash crops, our platform can help you improve productivity and connect with buyers.",
    },
    {
        question: "How do I get started with microcrop?",
        answer:
            "Getting started is simple! Sign up on our platform, complete your farmer profile, and you'll gain access to our network of agricultural experts, training resources, and marketplace connections. Our support team is available to guide you through the process.",
    },
    {
        question: "What kind of support does microcrop provide?",
        answer:
            "We offer comprehensive support including agronomic advice, weather forecasts, pest and disease management guidance, market price information, and connections to input suppliers. Our team of agricultural experts is always ready to help you succeed.",
    },
    {
        question: "Is there a cost to use microcrop?",
        answer:
            "We offer various subscription tiers to meet different needs. Basic services are available at an affordable rate, with premium features for those who want advanced analytics and personalized consultation. Contact our team to learn more about pricing options.",
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


