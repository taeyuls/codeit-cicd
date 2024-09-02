import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head></head>
      <body>
        <Navbar />
        <SpeedInsights />
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
