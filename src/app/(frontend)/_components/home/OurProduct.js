"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
const OurProduct = () => {
  const t = useTranslations("OurProducts");
  const [page, setPage] = useState(0);

  const { locale } = useParams();
  const items = [
    { id: 1, image: "/OurProducts/1.webp" },
    { id: 2, image: "/OurProducts/2.webp" },
    { id: 3, image: "/OurProducts/3.webp" },
    { id: 4, image: "/OurProducts/6.webp" },
    { id: 5, image: "/OurProducts/5.webp" },
    { id: 6, image: "/OurProducts/4.webp" },
  ];

  return (
    <div
      className="flex flex-col justify-center text-center mt-12"
      id="products"
    >
      <p className="text-white font-[900] lg:text-6xl md:text-5xl">
        {t("Title")}
      </p>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#939396] lg:max-w-xlg mt-5">
        {t("Des")}
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-5 w-max mx-auto mt-7 place-items-start">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-[400px] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105
               h-[400px] even:h-[70%] ${index > 3 && "odd:-translate-y-[30%]"}`}
          >
            <img
              src={item.image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
