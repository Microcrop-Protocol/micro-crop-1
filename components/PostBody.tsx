import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

type PostBodyProps = {
  markdown: string;
};

export default function PostBody({ markdown }: PostBodyProps) {
  return (
    <div className="text-gray-800 leading-7 [&>*+*]:mt-6">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-10 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-8 text-lg font-semibold text-gray-900">{children}</h4>
          ),
          p: ({ children }) => <p className="text-base sm:text-lg">{children}</p>,
          a: ({ href, children, ...rest }) => {
            const isExternal = !!href && /^https?:\/\//.test(href);
            return (
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-emerald-700 underline underline-offset-4 hover:text-emerald-800"
                {...rest}
              >
                {children}
              </a>
            );
          },
          ul: ({ children }) => <ul className="list-disc pl-6 space-y-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2">{children}</ol>,
          li: ({ children }) => <li className="text-base sm:text-lg">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-700">
              {children}
            </blockquote>
          ),
          code: ({ children, className }) => {
            const isBlock = className?.startsWith("language-");
            if (isBlock) {
              return (
                <code className={`${className} font-mono text-sm`}>{children}</code>
              );
            }
            return (
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.9em] text-gray-800">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-gray-100 text-sm">
              {children}
            </pre>
          ),
          hr: () => <hr className="border-gray-200" />,
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-gray-300 px-3 py-2 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-gray-200 px-3 py-2">{children}</td>
          ),
          // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
          img: ({ src, alt }) =>
            src ? (
              <img
                src={src as string}
                alt={alt ?? ""}
                loading="lazy"
                className="rounded-lg shadow-sm w-full h-auto"
              />
            ) : null,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
