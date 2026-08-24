"use client"

import Image from "next/image";

const differentiators = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=1000&fit=crop",
    title: "A faster start",
    description: "Move from a promising product idea to a partner-ready customer experience with a focused setup process.",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=1000&fit=crop",
    title: "Clearer customer journeys",
    description: "Make cover easier to understand, from the first conversation through the moment help is needed.",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=1000&fit=crop",
    title: "A better service view",
    description: "Give your teams the context they need to answer questions and support customers with confidence.",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=1000&fit=crop",
    title: "Ready for responsible growth",
    description: "Keep the information your team needs for oversight, reporting, and better customer service in one place.",
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=1000&fit=crop",
    title: "Designed for real-world access",
    description: "Meet customers across the channels and devices they already use, including assisted and low-connectivity access.",
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=1000&fit=crop",
    title: "Support through changing conditions",
    description: "Help teams respond consistently as weather and seasonal conditions change across the communities they serve.",
  },
];


const WhyMicroCrop = () => {
  return (
    <section aria-labelledby="why-microcrop-heading" className="bg-white py-24 sm:py-32 font-poppins">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-4">
          <p className="text-lg font-semibold text-emerald-700 mb-2">Why MicroCrop</p>
          <h2 id="why-microcrop-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The details that make protection feel trustworthy.
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Good climate cover is not only about the policy. It is about clarity, access, and the confidence to keep going after a difficult season.
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
                className="hidden lg:flex absolute inset-0 bg-emerald-900/80 items-center justify-center p-8 opacity-0 transition-opacity duration-300 motion-reduce:transition-none group-hover:opacity-100 group-focus-within:opacity-100"
              >
                <p className="text-white text-center">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMicroCrop;
