import { MicroCropImage } from "@/constants/img";
import Image from "next/image";
import Link from "next/link";

const ForFarmers = async () => {
  return (
    <div className="bg-white py-24 sm:py-32 font-DM">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h5>For Farmers</h5>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            No Paperwork. No delay. Fair Payouts
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            We offer educational resources, training programs, and support ,
            fostering their growth in blockchain and cryptocurrency.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <Link
                href={`/insight/`}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <Image
                    src={MicroCropImage}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span>
                        <span className="absolute inset-0" />
                        How Precision Farming is Changing Agriculture
                      </span>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                     Precision farming uses technology like GPS, sensors, and AI to revolutionize agricultural practices. Learn how these innovations are increasing productivity, reducing costs, and promoting sustainable farming around the globe.
                    </p>
                  </div>
                </div>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default ForFarmers;
