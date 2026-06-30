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
      title: "Coverage & Fund Management",
      description: "Each partner gets their own dedicated coverage infrastructure with real-time dashboards. Monitor premiums collected, claims paid, and fund health at a glance.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Automated Damage Assessment",
      description: "Index triggers — drought and flood for crops, forage and vegetation conditions for livestock — drive automated loss assessments. No manual claims, no field visits.",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop",
    },
    {
      id: 4,
      title: "Instant Payouts",
      description: "Automated triggers send payouts directly to farmers through local mobile money and banking rails. Fully automated, transparent, and independently verifiable.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    },
    {
      id: 5,
      title: "Analytics Dashboards",
      description: "Platform and org-level dashboards with revenue tracking, policy analytics, farmer demographics, and risk exposure metrics. Full CSV export for compliance and auditing.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
    },
    {
      id: 6,
      title: "API-First Architecture",
      description: "RESTful API for custom frontend integrations. Build your own interfaces on top of MicroCrop's infrastructure, or use our ready-made dashboard out of the box.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    }
  ];

  return (
    <section id="platform" aria-labelledby="platform-heading" className="bg-white py-24 sm:py-32 font-poppins">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-lg font-semibold text-emerald-700 mb-2">Platform Capabilities</p>
          <h2 id="platform-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Give Your Farmers: No Paperwork. No Delays. Fair Payouts.
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Everything your organization needs to launch and manage parametric crop and livestock insurance products — from farmer onboarding to automated payouts.
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
                  <h3 className="mt-6 text-xl font-semibold leading-6 text-gray-900 group-hover:text-emerald-700 transition-colors">
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
    </section>
  );
};

export default PlatformFeatures;
