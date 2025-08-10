import AllPagesBanner from "@/components/AllPagesBanner";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="">
      <AllPagesBanner
        title="View our all Products"
        description="Design and personalized packaging for your brand."
      />
      <Container>
        <div className="border-t-[1px] border-gray-200 flex">
          <Sidebar />
          <div className="w-[80%] p-4 h-full flex flex-col space-y-8">
            <div className="grid grid-cols-4 gap-x-4 gap-y-6">
              <div className="h-full rounded-xl bg-green-950">
                <div className="p-2">
                  <h3 className="text-white font-bold text-md">
                    ADD your customer quotation
                  </h3>
                  <div className="text-gray-600">categornae</div>
                </div>
              </div>
              {[...Array(19)].map((_, idx) => (
                <div key={idx}>
                  <ProductCard />
                </div>
              ))}
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="text-gray-600">Showing 1 to 10 of 97 results</div>
              <div>
                <nav
                  aria-label="Pagination"
                  className="isolate inline-flex -space-x-px rounded-md shadow-xs"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path
                        d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-green-950 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    10
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
