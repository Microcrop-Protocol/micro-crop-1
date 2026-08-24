import Image from "next/image";

const ForOrganizations = () => {
  const useCases = [
    {
      id: 1,
      title: "Insurance teams",
      description: "Extend your product range with climate cover that feels like a natural part of the customer relationship.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Farmer organisations",
      description: "Make practical protection easier to explain, access, and support across your member community.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Lenders and financial partners",
      description: "Help customers keep moving through difficult seasons with cover that complements the services you already provide.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop",
    },
    {
      id: 4,
      title: "Development organisations",
      description: "Support climate resilience programmes with a customer experience built for clarity, access, and dependable service.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop",
    }
  ];

  return (
    <section id="partners" aria-labelledby="partners-heading" className="bg-gray-50 py-24 sm:py-32 font-poppins">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-lg font-semibold text-emerald-700 mb-2">For teams close to the customer</p>
          <h2 id="partners-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Protection that fits the way people already live and work.
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            MicroCrop helps partners bring climate protection into the products and relationships they already have.
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
                  <h3 className="mt-6 text-xl font-semibold leading-6 text-gray-900 group-hover:text-emerald-700 transition-colors">
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
    </section>
  );
};

export default ForOrganizations;
