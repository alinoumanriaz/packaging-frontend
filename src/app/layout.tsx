import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import ApolloWrapper from "@/helper/ApolloProvider";
import LoadCurrentUser from "@/components/LoadCurrentUser";
import { Providers } from "@/redux/providers";
import WhatsappButton from "@/components/WhatsappButton";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unique Custom Boxes | Packaging That Speaks Your Brand.",
  description: "Unique Custom Boxes specializes in high-quality, tailor-made packaging solutions designed to elevate your brand. Whether you're a small business or a large enterprise, our custom boxes are crafted to impress, protect, and deliver unforgettable unboxing experiences.",
  icons: {
    icon: '/unique-custom-boxes-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Providers>
        <ApolloWrapper>
          <LoadCurrentUser />
          <NextTopLoader color="White" showSpinner={false} />
          <Header />
          {children}
          <Footer />
        </ApolloWrapper>
        </Providers>
        <WhatsappButton />
      </body>
    </html>
  );
}
