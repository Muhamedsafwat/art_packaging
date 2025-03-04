"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import SingleService from "../home/SingleService";
import { useTranslations } from "next-intl";

const ServiceCards = ({ services }) => {
  const params = useParams();
  const locale = params?.locale || "en"; // Ensure locale has a default value
  const t = useTranslations("Service");
  const maxLength = 224;
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-screen-xl ml-4">
      {services.map((s, index) => (
        <div
          key={index}
          className="bg-[#424245] rounded-xl p-4 lg:px-4 lg:py-12 shadow-lg cursor-pointer text-white text-center mx-5 lg:mx-0"
          onClick={() => setSelectedService(s)}
        >
          <Image
            src={s.icon.url}
            alt={s[`title${locale === "en" ? "En" : "Ar"}`]}
            width={150}
            height={150}
            className="mx-auto rounded-md mt-12 object-cover"
          />
          <h3 className="text-2xl mt-4 font-bold text-[#B9A14C]">
            {s[`title${locale === "en" ? "En" : "Ar"}`]}
          </h3>
          <p className="text-sm text-left text-gray-300 mt-2 font-semibold leading-[26px]">
            {s[`description${locale === "en" ? "En" : "Ar"}`].length >
            maxLength ? (
              <>
                {s[`description${locale === "en" ? "En" : "Ar"}`].slice(
                  0,
                  maxLength
                )}
                <span className="">... </span>
                <span className="text-[#B9A14C] cursor-pointer font-semibold">
                  {t("Read")}
                </span>
              </>
            ) : (
              s[`description${locale === "en" ? "En" : "Ar"}`]
            )}
          </p>
        </div>
      ))}
      {selectedService && (
        <SingleService
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default ServiceCards;
