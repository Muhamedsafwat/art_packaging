"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const OurProduct = () => {
  const t = useTranslations("OurProducts");
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;
  const swiperRef = useRef(null);

  const { locale } = useParams();
  const items = [
    {
      id: 1,
      image: "/OurProducts/1.webp",
      TitleEn: "Open Boxes",
      Title: "علب مفتوحة",
    },
    {
      id: 2,
      image: "/OurProducts/2.webp",
      TitleEn: "Packages For You",
      Title: "طرود من اجلكم",
    },
    {
      id: 3,
      image: "/OurProducts/3.webp",
      TitleEn: "New Luxury Box",
      Title: "علب جديدة فاخرة",
    },
    {
      id: 6,
      image: "/OurProducts/4.webp",
      TitleEn: "Luxury Boxes Book",
      Title: "علب كتاب هارد كفر فاخرة",
    },
    {
      id: 5,
      image: "/OurProducts/5.webp",
      TitleEn: "Cardboard Boxes",
      Title: "علبة هاردج كفر فاخرة",
    },
    {
      id: 4,
      image: "/OurProducts/6.webp",
      TitleEn: "Soft Carton",
      Title: "علب كرتون انفركوتيد",
    },
    {
      id: 7,
      image: "/OurProducts/4.webp",
      TitleEn: "Cardboard Boxes",
      Title: "علب مفتوحة",
    },
    {
      id: 8,
      image: "/OurProducts/4.webp",
      TitleEn: "Cardboard Boxes",
      Title: "علب مفتوحة",
    },
    {
      id: 9,
      image: "/OurProducts/4.webp",
      TitleEn: "Cardboard Boxes",
      Title: "علب مفتوحة",
    },
    {
      id: 10,
      image: "/OurProducts/4.webp",
      TitleEn: "Cardboard Boxes",
      Title: "علب مفتوحة",
    },
    {
      id: 11,
      image: "/OurProducts/4.webp",
      TitleEn: "Cardboard Boxes",
      Title: "علب مفتوحة",
    },
    {
      id: 12,
      image: "/OurProducts/4.webp",
      TitleEn: "Cardboard Boxes",
      Title: "علب مفتوحة",
    },
  ];

  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

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

      <div className="relative w-full mt-7">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-next",
            nextEl: ".swiper-button-prev",
          }}
          onSlideChange={(swiper) => setPage(swiper.activeIndex)}
          initialSlide={page}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <SwiperSlide key={pageIndex}>
              <div className="relative">
                <div className="grid  lg:grid-cols-3 md:grid-cols-2 md:gap-5 gap-x-5 gap-y-5 w-max mx-auto place-items-start">
                  {items
                    .slice(
                      pageIndex * itemsPerPage,
                      (pageIndex + 1) * itemsPerPage
                    )
                    .map((item, index) => (
                      <div
                        key={item.id}
                        className={`relative cursor-pointer group w-[400px] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105
         lg:h-[400px] lg:even:h-[70%] ${index > 3 && "lg:odd:-translate-y-[30%]"}`}
                      >
                        <img
                          src={item.image}
                          alt={`Image ${item.id}`}
                          className="w-full h-full object-cover"
                        />

                        <button
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    bg-[#333] text-white px-6 py-3 rounded-lg shadow-lg 
    opacity-0 rotate-[45deg] group-hover:opacity-100 group-hover:rotate-0 
    transition-all duration-500 ease-out 
    scale-90 hover:scale-100"
                        >
                          {locale === "en" ? item.TitleEn : item.Title}
                        </button>
                      </div>
                    ))}
                </div>

                <div className="absolute bottom-10 left-1/2 transform  z-100 flex space-x-4">
                  <div className="swiper-button-next !text-white !w-12 !h-12 !rounded-full"></div>
                  <div className="swiper-button-prev !text-white !w-12 !h-12 !rounded-full"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurProduct;
