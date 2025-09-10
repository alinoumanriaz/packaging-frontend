import React from "react";
import Container from "./Container";
import Markdown from "react-markdown";
import { Poppins } from "next/font/google";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkGfm from "remark-gfm"; // 👈 ADD THIS
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface IContent {
  content: string;
}

const PagesSEOContent = ({ content }: IContent) => {
  const schema = {
    ...defaultSchema,
    tagNames: [
      ...(defaultSchema.tagNames || []),
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
    ],
    attributes: {
      ...defaultSchema.attributes,
      table: ["className"],
      th: ["className", "colspan", "rowspan"],
      td: ["className", "colspan", "rowspan"],
    },
  };

  return (
    <Container>
      <section
        aria-label="Page Content"
        className="w-full ring-1 ring-gray-200 rounded-xl py-4 px-6 md:px-10 bg-white"
      >
        <article
          className={`${poppins.className} prose prose-lg prose-custom max-w-none`}
        >
          <Markdown
            remarkPlugins={[remarkGfm]} // 👈 Enables table, strikethrough, task lists
            rehypePlugins={[[rehypeSanitize, schema]]}
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
                <p {...props} className="mb-5 leading-relaxed" itemProp="text" />
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
                <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
                  <table
                    {...props}
                    className="min-w-full border-collapse text-left text-sm"
                  />
                </div>
              ),
              th: ({ ...props }) => (
                <th
                  {...props}
                  className="border border-gray-200 px-4 py-3 bg-gray-50 font-semibold text-gray-900"
                />
              ),
              td: ({ ...props }) => (
                <td
                  {...props}
                  className="border border-gray-200 px-4 py-3 text-gray-700 align-top break-words"
                />
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
