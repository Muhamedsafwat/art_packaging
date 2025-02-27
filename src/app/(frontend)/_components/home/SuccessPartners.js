"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const SuccessPartners = () => {
  const images = Array.from({ length: 20 }, (_, i) => `/Partners/${i + 1}.png`);
  const { locale } = useParams();
  const t = useTranslations("SucessPartner");

  // Ref for Swiper
  const swiperRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-white font-extrabold text-center text-4xl sm:text-5xl md:text-6xl tracking-wide">
        {t("Title")}
      </h2>

      <div className="relative w-full flex justify-center mt-20 bg-[#424245]">
        <div className="w-full max-w-6xl px-5">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 3, slidesPerGroup: 3 },
              768: { slidesPerView: 4, slidesPerGroup: 4 },
              1024: { slidesPerView: 5, slidesPerGroup: 5 },
            }}
            className="flex"
          >
            {images.map((src, index) => (
              <SwiperSlide
                key={index}
                className="w-auto flex justify-center items-center"
              >
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-[100px] h-[100px] object-contain rounded-lg transition-transform"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SuccessPartners;
