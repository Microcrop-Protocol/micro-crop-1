import Image from "next/image";
import Link from "next/link";
import type { PostSummary } from "@/lib/blog";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

type BlogSectionProps = {
  posts: PostSummary[];
};

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
            MicroCrop Blog
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600 text-pretty">
            Insights on parametric insurance, climate resilience, and agricultural technology from markets around the world.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-base text-gray-500">
              We&rsquo;re working on the first stories. Check back soon.
            </p>
          </div>
        ) : (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between min-w-0">
                <Link href={`/blog/${post.slug}`} className="w-full">
                  {post.coverImage ? (
                    <div className="relative w-full">
                      <Image
                        src={post.coverImage.url}
                        alt={post.coverImage.alt}
                        width={post.coverImage.width || 800}
                        height={post.coverImage.height || 500}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  ) : (
                    <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2] ring-1 ring-inset ring-gray-900/10" />
                  )}
                </Link>
                <div className="max-w-xl min-w-0">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.publishedAt} className="text-gray-500">
                      {dateFormatter.format(new Date(post.publishedAt))}
                    </time>
                    {post.category ? (
                      <span className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                        {post.category.name}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-3">
                    <h2 className="text-lg font-semibold leading-6 text-gray-900">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-x-4">
                    {post.author.avatarUrl ? (
                      <Image
                        src={post.author.avatarUrl}
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full bg-gray-100 object-cover"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-gray-100" />
                    )}
                    <div className="text-sm leading-6 min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{post.author.name}</p>
                      <p className="text-gray-600 truncate">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
