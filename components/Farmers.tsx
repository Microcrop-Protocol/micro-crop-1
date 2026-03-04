import Image from "next/image";

const PlatformFeatures = () => {
  const features = [
    {
      id: 1,
      title: "White-Label Onboarding",
      description: "Bulk farmer registration, KYC management, and staff account provisioning. Each partner gets a branded experience with full control over their organization's workflow.",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Risk Pool Management",
      description: "Each partner gets their own on-chain risk pool deployed on Base with real-time liquidity dashboards. Monitor premiums collected, claims paid, and pool health at a glance.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Automated Damage Assessment",
      description: "Chainlink oracles, WeatherXM ground stations, and satellite data from Planet and Sentinel combine to deliver accurate, automated crop damage assessments — no manual claims required.",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop",
    },
    {
      id: 4,
      title: "Instant Payouts",
      description: "Smart contract triggers send payouts directly to farmers via M-Pesa through Swypt integration. Fully automated, transparent, and verifiable on-chain.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    },
    {
      id: 5,
      title: "Analytics Dashboards",
      description: "Platform and org-level dashboards with revenue tracking, policy analytics, farmer demographics, and risk exposure metrics. Full CSV export for compliance and auditing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    },
    {
      id: 6,
      title: "API-First Architecture",
      description: "RESTful API for custom frontend integrations. Build your own interfaces on top of MicroCrop's infrastructure, or use our ready-made dashboard out of the box.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    }
  ];

  return (
    <div id="platform" className="bg-white py-24 sm:py-32 font-poppins">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h5 className="text-lg font-semibold text-[#1D5B37] mb-2">Platform Capabilities</h5>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Give Your Farmers: No Paperwork. No Delays. Fair Payouts.
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Everything your organization needs to launch and manage parametric crop insurance products — from farmer onboarding to automated payouts.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-start justify-between group"
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={800}
                  height={500}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="aspect-video w-full bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="relative">
                  <h3 className="mt-6 text-xl font-semibold leading-6 text-gray-900 group-hover:text-[#1D5B37] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {feature.description}
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

export default PlatformFeatures;
