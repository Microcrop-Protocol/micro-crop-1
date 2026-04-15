import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    href: '/blog/why-parametric-insurance-is-the-future',
    title: 'Why Parametric Insurance Is the Future for Farmers Worldwide',
    description:
      'Traditional crop insurance relies on slow, manual claims processes that fail farmers in every market. Parametric insurance, powered by weather data and smart contracts, offers a faster, more transparent alternative — and MicroCrop is building the infrastructure to make it globally scalable.',
    imageUrl:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=500&fit=crop',
    datetime: '2025-02-12',
    category: 'Insurance',
    author: {
      name: 'Mary Gathoni',
      role: 'Co-Founder',
      imageUrl: '/img/mary.jpeg',
    },
  },
]

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

export default function BlogSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights on parametric insurance, climate resilience, and agricultural technology from markets around the world.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="relative flex flex-col items-start justify-between min-w-0">
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt=""
                  width={800}
                  height={500}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl min-w-0">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {dateFormatter.format(new Date(post.datetime))}
                  </time>
                  <span className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {post.category}
                  </span>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    <Link
                      href={post.href}
                      className="rounded-sm transition-colors hover:text-[#1D5B37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D5B37] focus-visible:ring-offset-2"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-x-4">
                  <Image src={post.author.imageUrl} alt="" width={40} height={40} className="h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6 min-w-0">
                    <p className="font-semibold text-gray-900 truncate">{post.author.name}</p>
                    <p className="text-gray-600 truncate">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
