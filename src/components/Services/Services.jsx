import { useState } from "react";
import ServicesList from "./ServicesList";

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="relative py-10 bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Expert services tailored to elevate your digital presence
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ServicesList showAll={showAll} />
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 text-sm font-medium text-purple-600 transition-all duration-300 border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white dark:border-purple-500 dark:text-purple-400 dark:hover:bg-purple-500"
          >
            {showAll ? "Show Less Services" : "Explore All Services"}
          </button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full opacity-10 dark:opacity-5 bg-gradient-to-tr from-purple-600/30 to-pink-600/30" />
      </div>
    </section>
  );
}
