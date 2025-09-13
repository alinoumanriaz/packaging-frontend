// app/blog/page.tsx
import AllPagesBanner from "@/components/AllPagesBanner";
import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import Pagination from "@/components/Pagination";

function getApiUrl(): string {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl)
    throw new Error("NEXT_PUBLIC_API_URL environment variable is not defined");
  return apiUrl;
}

const ITEMS_PER_PAGE = 12;

async function getPaginatedBlogs(page: number) {
  const apiUrl = getApiUrl();
  const res = await fetch(`${apiUrl}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-secret-key": process.env.API_SECRET_KEY!,
    },
    body: JSON.stringify({
      query: `
        query GetPaginatedBlogs($page: Int!, $limit: Int!) {
          getPaginatedBlogs(page: $page, limit: $limit) {
            blogs {
              _id
              title
              imageUrl
              slug
              excerpt
            }
            totalBlogs
          }
        }
      `,
      variables: { page, limit: ITEMS_PER_PAGE },
    }),
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("Failed to fetch blogs");
  const { data } = await res.json();
  return data?.getPaginatedBlogs;
}

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  const data = await getPaginatedBlogs(currentPage);
  const blogs = data?.blogs || [];
  const totalBlogs = data?.totalBlogs || 0;
  const totalPages = Math.ceil(totalBlogs / ITEMS_PER_PAGE);

  return (
    <div>
      <AllPagesBanner
        title="View our all Blogs"
        description="Design and personalized packaging for your brand."
      />
      <Container>
        <div className="border-t border-gray-200 flex">
          <div className="w-full p-4 flex flex-col space-y-8">
            {/* Blogs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12">
              {blogs.map((blog: any) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>

            {/* ✅ Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={totalBlogs}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
