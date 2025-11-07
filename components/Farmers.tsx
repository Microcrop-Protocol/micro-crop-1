import { MicroCropImage } from "@/constants/img";
import Image from "next/image";
import Link from "next/link";

const ForFarmers = async () => {
  const farmerResources = [
    {
      id: 1,
      title: "Automated Crop Insurance Claims",
      description: "Experience hassle-free insurance with our blockchain-powered smart contracts. When weather conditions trigger a claim, payouts are automatically processed without paperwork or delays.",
      image: MicroCropImage
    },
    {
      id: 2,
      title: "Real-Time Weather Data & Alerts",
      description: "Stay ahead of climate risks with our advanced weather monitoring system. Receive instant alerts about potential threats to your crops and make informed decisions to protect your harvest.",
      image: MicroCropImage
    },
    {
      id: 3,
      title: "Financial Protection You Can Trust",
      description: "Protect your livelihood with affordable crop insurance designed for smallholder farmers. Our transparent, data-driven approach ensures fair coverage and reliable payouts when you need them most.",
      image: MicroCropImage
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32 font-DM">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h5 className="text-lg font-semibold text-[#1D5B37] mb-2">For Farmers</h5>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            No Paperwork. No Delays. Fair Payouts
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Empowering farmers with blockchain-powered crop insurance that's fast, transparent, and reliable. Protect your harvest and secure your future with MicroCrop.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {farmerResources.map((resource) => (
            <Link
              key={resource.id}
              href={`/farmers/${resource.id}`}
              className="flex flex-col items-start justify-between group"
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  className="aspect-video w-full bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="relative">
                  <h3 className="mt-6 text-xl font-semibold leading-6 text-gray-900 group-hover:text-[#1D5B37] transition-colors">
                    <span>
                      <span className="absolute inset-0" />
                      {resource.title}
                    </span>
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {resource.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForFarmers;
