"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
const SingleProduct = () => {
  const { locale } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const t = useTranslations("SingleProduct");
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {!loading ? (
        <>
          <div className="flex mb-10 flex-col md:flex-row items-center justify-between w-full max-w-4xl ml-4 px-5 gap-10 mt-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="max-w-[500px] max-h-[500px] w-auto h-auto cursor-grab rounded-md"
            >
              {product.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img.image.url}
                    alt={`Product Image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="md:w-1/2 text-center md:text-start">
              <h1
                className={`text-xl font-bold text-white mb-3 ${locale === "en" ? "text-left" : "text-right"}`}
              >
                {t("Description")}
              </h1>
              <p
                className={`text-lg text-white mb-4 ${locale === "en" ? "text-left" : "text-right"}`}
              >
                {locale === "ar"
                  ? product.descriptionAr
                  : product.descriptionEn}
              </p>

              <button className="bg-[#d4af37] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#b89530] transition mb-5">
                {t("Button")}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-screen mt-32 flex flex-col items-center justify-center">
          <div className="rounded-full h-24 w-24 border-primary border-4 border-t-transparent animate-spin" />
          <p className="text-white text-xl text-center mt-5 animate-pulse">
            {t("Loading")}
          </p>
        </div>
      )}
    </div>
  );
};
export default SingleProduct;
