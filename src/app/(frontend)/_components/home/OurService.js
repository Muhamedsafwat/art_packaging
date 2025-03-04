"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Image from "next/image";
import SingleService from "./SingleService";
import { useState, useEffect } from "react";

const OurService = () => {
  const t = useTranslations("Service");
  const { locale } = useParams();
  const maxLength = 224;
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/services");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        setServices(data.docs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id="services"
      className="flex flex-col items-center text-center sm:-mt-28 mr-7"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
        {t("Title")}
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#939396] lg:max-w-xlg">
        {t("Des")}
      </p>

      {Array.isArray(services) && (
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
        </div>
      )}
      {selectedService && (
        <SingleService
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default OurService;
