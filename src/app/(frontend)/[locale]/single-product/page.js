"use client";
import { useSearchParams } from "next/navigation";
import { IoHome } from "react-icons/io5";
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
  const t = useTranslations("SingleProduct");
  const router = useRouter();
  const handlebutton = () => {
    window.open("https://api.whatsapp.com/send?phone=966541024824");
  };
  const sendHome = () => {
    router.push("/");
  };
  const sendMainProduct = () => {
    router.push("/#products");
  };
  useEffect(() => {
    const productFromStorage = sessionStorage.getItem("selectedProduct");
    if (productFromStorage) {
      try {
        const selectedProduct = JSON.parse(productFromStorage);
        setProduct(selectedProduct);
        console.log(selectedProduct);
      } catch (error) {
        console.error("Error parsing product from sessionStorage:", error);
      }
    } else {
      console.error("No product found in sessionStorage.");
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {product ? (
        <>
          <div className="flex items-center gap-2 cursor-pointer text-white text-lg mb-5">
            <div
              className="hover:text-[#d4af37] flex mb-[1px]"
              onClick={sendHome}
            >
              <IoHome className="text-xl mr-2 mt-[1px]" />
              <span>{t("Home")}</span>
            </div>
            <span className="hover:text-[#d4af37]">{">"}</span>
            <span className="hover:text-[#d4af37]" onClick={sendMainProduct}>
              {t("Product")}
            </span>
            <span className="hover:text-[#d4af37]">{">"}</span>
            <span className="font-semibold hover:text-[#d4af37]">
              {locale === "ar"
                ? product.category.titleAr
                : product.category.titleEn}
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl ml-4 px-5 gap-10 mt-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="max-w-[400px] max-h-[400px] w-auto h-auto cursor-grab"
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

            <div className="md:w-1/2 text-center md:text-left">
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

              <button
                className="bg-[#d4af37] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#b89530] transition mb-5"
                onClick={handlebutton}
              >
                {t("Button")}
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
};
export default SingleProduct;
