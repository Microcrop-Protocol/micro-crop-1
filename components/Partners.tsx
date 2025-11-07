import { MicroCropImage } from "@/constants/img";
import Image from "next/image";
import Link from "next/link";

const Partners = async () => {
  const partnerSolutions = [
    {
      id: 1,
      title: "Partner with Africa's Leading AgTech Platform",
      description: "Join our network of agricultural organizations, cooperatives, and financial institutions bringing innovative crop insurance to African farmers. Together, we're building a more resilient agricultural sector.",
      image: MicroCropImage
    },
    {
      id: 2,
      title: "Blockchain Infrastructure for Agriculture",
      description: "Leverage our proven blockchain technology and smart contract infrastructure to deliver transparent, automated insurance solutions. Our platform ensures data integrity and instant, verifiable payouts.",
      image: MicroCropImage
    },
    {
      id: 3,
      title: "Scale Your Impact with MicroCrop",
      description: "Expand your reach to underserved farming communities with our comprehensive platform. Access satellite data, weather monitoring, and automated claims processing to deliver efficient, farmer-centric insurance products.",
      image: MicroCropImage
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32 font-DM">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h5 className="text-lg font-semibold text-[#1D5B37] mb-2">For Partners</h5>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Build the Future of Agricultural Insurance
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Partner with MicroCrop to deliver next-generation crop insurance powered by blockchain, satellite data, and smart contracts. Together, we can protect millions of farmers across Africa.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {partnerSolutions.map((solution) => (
            <Link
              key={solution.id}
              href={`/partners/${solution.id}`}
              className="flex flex-col items-start justify-between group"
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  className="aspect-video w-full bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="relative">
                  <h3 className="mt-6 text-xl font-semibold leading-6 text-gray-900 group-hover:text-[#1D5B37] transition-colors">
                    <span>
                      <span className="absolute inset-0" />
                      {solution.title}
                    </span>
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {solution.description}
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

export default Partners;
