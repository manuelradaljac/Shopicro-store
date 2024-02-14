import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "../../providers/modal-provider";
import ToastProvider from "../../providers/toast-provider";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
