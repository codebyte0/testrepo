"use client";
import Image from "next/image";
import React from "react";
import floorcleaning from "../../assets/floorcleaning.jpg"
import vaccuming from "../../assets/vacumming.jpg"
import carpetcleaning from "../../assets/carpetcleaning.jpg"
import bed from "../../assets/imgbed.jpg"
import condoroom from "../../assets/condoroom.jpg"
import officeroom from "../../assets/office.jpg"

const ServiceCards = () => {
  const services = [
    {
      title: "Deep Cleaning",
      image: carpetcleaning,
    },
    {
      title: "Regular Cleaning",
      image: bed,
    },
    {
      title: "Office Cleaning",
      image: officeroom,
    },
    {
      title: "Move In Cleaning",
      image: floorcleaning,
    },
    {
      title: "Move Out Cleaning",
      image: condoroom,
    },
    {
      title: "Airbnb Cleaning",
      image: vaccuming,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <div className="relative h-96 w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;