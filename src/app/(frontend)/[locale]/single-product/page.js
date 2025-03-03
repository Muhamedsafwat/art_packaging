"use client";
import { useSearchParams } from "next/navigation";
import { IoHome } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
const SingleProduct = () => {
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
    const storedProduct = sessionStorage.getItem("selectedProduct");
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
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
              {product.Title}
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl px-5 gap-10">
            <img
              src={product.image}
              alt="Selected Product"
              className="w-full md:w-1/2 object-contain rounded-lg"
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-xl font-bold text-white mb-3">
                {t("Description")}
              </h1>
              <p className="text-lg text-white mb-4">{product.description}</p>

              {/* Button */}
              <button
                className="bg-[#d4af37] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#b89530] transition"
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
