import React from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuClock2 } from "react-icons/lu";
import AllPagesBanner from "@/components/AllPagesBanner";
import Container from "@/components/Container";

const page = () => {
  return (
    <div className="">
      <AllPagesBanner
        title="Contact Us"
        description="Design and personalized packaging for your brand."
      />
      <Container>
        <div className="grid md:grid-cols-2 w-full md:w-[98%] justify-center items-center ">
          <div className="hidden md:flex px-6 flex-col">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Contact Information</h2>

              <div className="space-y-3">
                <div className="flex items-start space-x-4">
                  <GrLocation className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground mt-1">
                      123 Business Avenue
                      <br />
                      Suite 456
                      <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <HiOutlinePhone className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground mt-1">
                      <a href="tel:+14155550123" className="hover:underline">
                        +1 (415) 555-0123
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <IoMailUnreadOutline className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground mt-1">
                      <a
                        href="mailto:contact@company.com"
                        className="hover:underline"
                      >
                        contact@company.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <LuClock2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <div className="text-muted-foreground mt-1 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full justify-center items-center text-center py-10 space-y-4 px-4">
            <div className=" text-3xl font-extrabold leading-tight tracking-tight">
              Ready to get started?
            </div>
            <p>
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days.
            </p>
            <div className="w-full space-y-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full py-2 px-2 placeholder:text-gray-400/80 outline-none focus:ring-1 focus:ring-blue-500 rounded-md ring-1 ring-gray-400/80 "
              />
              <input
                type="text"
                placeholder="Enter your "
                className="w-full py-2 px-2 placeholder:text-gray-400/80 outline-none focus:ring-1 focus:ring-blue-500 rounded-md ring-1 ring-gray-400/80 "
              />
              <input
                type="text"
                placeholder="Enter your "
                className="w-full py-2 px-2 placeholder:text-gray-400/80 outline-none focus:ring-1 focus:ring-blue-500 rounded-md ring-1 ring-gray-400/80 "
              />
              <textarea
                name=""
                id=""
                placeholder="Enter your message"
                className="w-full py-2 px-2 placeholder:text-gray-400/80 outline-none focus:ring-1 focus:ring-blue-500 rounded-md ring-1 ring-gray-400/80 "
              ></textarea>
              <button className="w-full bg-black text-white py-2 rounded-lg text-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="w-full h-96">
          <iframe
            title="Genesis Classical Academy Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.447065649396!2d-94.17807860464521!3d43.76543924324122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f476e9979e8389%3A0xd3787d655fa32dc0!2sGenesis%20Classical%20Academy!5e1!3m2!1sen!2s!4v1747910235382!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            //   allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default page;
