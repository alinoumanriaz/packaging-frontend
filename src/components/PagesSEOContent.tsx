import React from "react";
import Container from "./Container";
import Markdown from "react-markdown";
import { Poppins } from "next/font/google";
import rehypeSanitize from "rehype-sanitize";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface IContent {
  content: string;
}

const PagesSEOContent = ({ content }: IContent) => {
  return (
    <Container>
      <section
        aria-label="Page Content"
        className="w-full ring-1 ring-gray-200 rounded-xl p-4 md:p-10 bg-white"
      >
        <article
          className={`${poppins.className} prose prose-lg prose-custom max-w-none`}
        >
          <Markdown
            rehypePlugins={[rehypeSanitize]}
            components={{
              a: ({ ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-600 hover:underline"
                  itemProp="url"
                />
              ),
              h1: ({ ...props }) => (
                <h1
                  {...props}
                  className="text-3xl font-bold text-gray-900"
                  itemProp="headline"
                />
              ),
              h2: ({ ...props }) => (
                <h2
                  {...props}
                  className="text-2xl font-semibold text-gray-800 mt-8 mb-4"
                />
              ),
              h3: ({ ...props }) => (
                <h3
                  {...props}
                  className="text-xl font-medium text-gray-800 mt-6 mb-3"
                />
              ),
              img: ({ src, alt, width, height, ...props }) => {
                if (!src || typeof src !== "string") return <></>;
                return (
                  <Image
                    src={src}
                    alt={alt || "Content image"}
                    width={Number(width) || 800}
                    height={Number(height) || 500}
                    className="rounded-lg my-6"
                    loading="lazy"
                    itemProp="image"
                    {...props}
                  />
                );
              },
              p: ({ ...props }) => (
                <p
                  {...props}
                  className="mb-5 leading-relaxed"
                  itemProp="text"
                />
              ),
              ul: ({ ...props }) => (
                <ul {...props} className="list-disc pl-5 mb-5" />
              ),
              ol: ({ ...props }) => (
                <ol {...props} className="list-decimal pl-5 mb-5" />
              ),
              blockquote: ({ ...props }) => (
                <blockquote
                  {...props}
                  className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-700"
                />
              ),
              table: ({ ...props }) => (
                <div className="overflow-x-auto my-6">
                  <table {...props} className="min-w-full border-collapse" />
                </div>
              ),
              th: ({ ...props }) => (
                <th
                  {...props}
                  className="border px-4 py-2 bg-gray-100 font-semibold"
                />
              ),
              td: ({ ...props }) => (
                <td {...props} className="border px-4 py-2" />
              ),
            }}
          >
            {content}
          </Markdown>
        </article>
      </section>
    </Container>
  );
};

export default PagesSEOContent;
