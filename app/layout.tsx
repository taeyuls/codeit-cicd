import { ReactNode } from "react";

import Footer from "@/components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head></head>
      <body>
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
