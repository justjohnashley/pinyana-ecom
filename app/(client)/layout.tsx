import type { Metadata } from "next";

import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ClerkProvider} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Piñana Gourmet",
  description: "Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <body>
          <div className="flex flex-col min-h-screen ">
          <Header />
          <main className="flex-1 bg-shop_lightest_yellow">
          {children}
        </main>
        <Footer />
        </div>
      </body>

    </ClerkProvider>
  );
}
