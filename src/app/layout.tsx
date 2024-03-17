import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "../../providers/modal-provider";
import ToastProvider from "../../providers/toast-provider";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web shop",
  description: "Web shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <script defer src="https://umami-production-e3f9.up.railway.app/script.js" data-website-id="b935325a-3edb-4916-9ebe-9752a5c4fe3c"></script>
      </Head>
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
