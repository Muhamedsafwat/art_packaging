"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";

const OurProduct = () => {
  const t = useTranslations("OurProducts");
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;
  const swiperRef = useRef(null);
  const [items, setItems] = useState([]);
  const { locale } = useParams();
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchCategories = await fetch("/api/categories");
        const data = await fetchCategories.json();

        setItems(data.docs || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchData();

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
      <p className="text-white font-[900] lg:text-5xl md:text-4xl">
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
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
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
                          src={item.thumbnail.url}
                          alt={`Image ${item.id}`}
                          className="w-full h-full object-cover"
                        />

                        <button
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    bg-[#333] text-white px-6 py-3 rounded-lg shadow-lg 
    opacity-0 rotate-[45deg] group-hover:opacity-100 group-hover:rotate-0 
    transition-all duration-500 ease-out 
    scale-90 hover:scale-100"
                          onClick={() => {
                            router.push(
                              `/${locale}/products?category=${locale == "ar" ? item.titleAr : item.titleEn}`
                            );
                          }}
                        >
                          {locale === "en" ? item.titleEn : item.titleAr}
                        </button>
                      </div>
                    ))}
                </div>

                <div
                  className={`absolute bottom-10 left-1/2 transform z-100 flex space-x-4 ${
                    items.length < 7
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100"
                  } transition-opacity duration-300`}
                >
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
