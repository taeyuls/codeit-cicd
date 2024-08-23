"use client";

import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <div>
      <Section1 />
      <section
        id="features"
        className="h-screen flex items-center justify-center bg-gray-100"
      >
        <h1 className="text-4xl font-bold">Features</h1>
      </section>
      <section className="h-screen flex items-center justify-center bg-gray-300">
        <h1 className="text-4xl font-bold">Portfolio</h1>
      </section>
      <section className="h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-4xl font-bold">Today</h1>
      </section>
      <Section2 />
      <Reviews />

      <section
        id="faq"
        className="h-screen flex items-center justify-center bg-gray-400"
      >
        <h1 className="text-4xl font-bold">FAQ</h1>
        <p className="mt-4 text-lg">Frequently asked questions.</p>
      </section>
    </div>
  );
}
