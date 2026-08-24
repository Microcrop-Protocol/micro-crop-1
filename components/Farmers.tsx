import Image from "next/image";

const PlatformFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Branded customer journeys",
      description: "Give customers a clear, familiar path from learning about cover to staying informed throughout the season.",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Simple policy visibility",
      description: "Help teams and customers understand active cover, important dates, and the support available to them.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Clear support when conditions change",
      description: "Make it easier to keep customers informed when weather and seasonal conditions affect their livelihoods.",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop",
    },
    {
      id: 4,
      title: "Local payout options",
      description: "Reach customers through the mobile money and bank accounts they already rely on in daily life.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    },
    {
      id: 5,
      title: "A clearer view of your book",
      description: "Give decision-makers useful context on participation, service demand, and portfolio performance.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
    },
    {
      id: 6,
      title: "Fits your existing operations",
      description: "Connect the customer experience to the tools and workflows your team already uses.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    }
  ];

  return (
    <section id="platform" aria-labelledby="platform-heading" className="bg-white py-24 sm:py-32 font-poppins">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-lg font-semibold text-emerald-700 mb-2">The partner experience</p>
          <h2 id="platform-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Make protection easier to offer and easier to use.
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Give your team the tools to offer practical crop and livestock cover, from the first customer conversation through ongoing support.
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
