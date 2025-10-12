"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24" id="pricing">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-light text-gray-900 mb-3">
          Pricing
        </h2>
        <p className="text-gray-500">Simple, transparent pricing</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Standard Package */}
        <div className="bg-white rounded-lg border border-gray-200 p-10 hover:border-gray-300 transition-colors">
          <div className="mb-8">
            <h3 className="text-2xl font-light text-gray-900 mb-2">
              Standard
            </h3>
            <p className="text-gray-500 text-sm">
              Perfect for regular cleaning needs
            </p>
          </div>

          <div className="mb-10">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-gray-400 line-through text-lg">$40</span>
              <span className="text-xs text-gray-500">Save $10</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-6xl font-light text-gray-900">$30</span>
              <span className="text-gray-500">/hour</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              3 hour minimum
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-3">
              <FaCheck className="text-yellow-500 text-sm mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm">Flexible booking & service</span>
            </div>

            <div className="flex items-start gap-3">
              <FaCheck className="text-yellow-500 text-sm mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm">Regular & Deep Clean</span>
            </div>

            <div className="flex items-start gap-3">
              <FaCheck className="text-yellow-500 text-sm mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm">No hidden charges</span>
            </div>

            <div className="flex items-start gap-3">
              <FaCheck className="text-yellow-500 text-sm mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm">Professional staff</span>
            </div>

            <div className="flex items-start gap-3 opacity-40">
              <span className="text-gray-300 text-sm mt-1 flex-shrink-0">×</span>
              <span className="text-gray-400 text-sm">Same-day availability</span>
            </div>

            <div className="flex items-start gap-3 opacity-40">
              <span className="text-gray-300 text-sm mt-1 flex-shrink-0">×</span>
              <span className="text-gray-400 text-sm">Products included</span>
            </div>
          </div>

          <a href="#booknow">
            <button className="w-full text-white py-3 rounded font-medium text-sm bg-yellow-400 hover:border-none transition-all hover:shadow-md">
              Get Started
            </button>
          </a>
        </div>

        {/* Premium Package */}
        <div className="bg-white rounded-lg border-2 border-gray-600 p-10 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 px-4 py-1 text-xs font-medium text-black">
            RECOMMENDED
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-light text-gray-900 mb-2">
              Premium
            </h3>
            <p className="text-gray-500 text-sm">
              Everything included for ultimate convenience
            </p>
          </div>

          <div className="mb-10">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-gray-400 line-through text-lg">$45</span>
              <span className="text-xs text-gray-500">Save $10</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-6xl font-light text-gray-900">$40</span>
              <span className="text-gray-500">/hour</span>
            </div>
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-3">
              <FaCheck className="text-yellow-500 text-sm mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm">Flexible booking & service</span>
            </div>

            <div className="flex items-start gap-3">
              <FaCheck className="text-yellow-500 text-sm mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm">Move In & Move Out</span>
            </div>

            <div className="flex items-start gap-3">
              <FaCheck className="text-yellow-500 text-sm mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm">No hidden charges</span>
            </div>

            <div className="flex items-start gap-3">
              <FaCheck className="text-yellow-500 text-sm mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm">Professional staff</span>
            </div>

            <div className="flex items-start gap-3">
              <FaCheck className="text-yellow-500 text-sm mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm">Same-day availability</span>
            </div>

            <div className="flex items-start gap-3">
              <FaCheck className="text-yellow-500 text-sm mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm font-medium">Products included</span>
            </div>
          </div>

          <a href="#booknow">
            <button className="w-full bg-yellow-500 text-white py-3 rounded font-medium text-sm transition-colors hover:shadow-md">
              Get Started Now
            </button>
          </a>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-16 max-w-2xl mx-auto">
        All prices are transparent with no hidden fees. Local residents receive a 15% discount at the time of service.
      </p>
    </div>
  );
};

export default Pricing;