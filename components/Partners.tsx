import Image from "next/image";

const ForOrganizations = async () => {
  const useCases = [
    {
      id: 1,
      title: "Insurance Companies",
      description: "Launch parametric crop insurance products without building infrastructure from scratch. Leverage our blockchain-powered platform, weather data integrations, and automated claims to go to market in weeks, not years.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Agricultural Cooperatives",
      description: "Protect member farmers with pooled risk management. Offer affordable, automated insurance to your farming communities with transparent on-chain tracking and instant M-Pesa payouts.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Agri-Lenders & MFIs",
      description: "De-risk loan portfolios with embedded crop insurance. Integrate MicroCrop's infrastructure into your lending workflows to protect borrowers and reduce default rates from climate events.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop",
    },
    {
      id: 4,
      title: "NGOs & Development Organizations",
      description: "Deploy climate resilience programs with transparent fund tracking. Every premium, payout, and fee is verifiable on-chain, providing full accountability for donor-funded initiatives.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop",
    }
  ];

  return (
    <div id="partners" className="bg-gray-50 py-24 sm:py-32 font-DM">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h5 className="text-lg font-semibold text-[#1D5B37] mb-2">For Organizations</h5>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Built for the Organizations Serving Farmers
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Whether you are an insurer, cooperative, lender, or NGO — MicroCrop provides the infrastructure to launch and scale parametric crop insurance for your stakeholders.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="flex flex-col items-start justify-between group"
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  width={800}
                  height={500}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="aspect-video w-full bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="relative">
                  <h3 className="mt-6 text-xl font-semibold leading-6 text-gray-900 group-hover:text-[#1D5B37] transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForOrganizations;
