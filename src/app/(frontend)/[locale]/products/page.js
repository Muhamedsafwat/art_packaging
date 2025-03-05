"use client";
import { useParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const SepProducts = () => {
  const t = useTranslations();
  const { locale } = useParams();
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get(
      "category"
    );

    if (category) {
      setCategory(category);
      async function fetchAllProducts() {
        let allProducts = [];
        let currentPage = 1;
        let hasNextPage = true;

        try {
          while (hasNextPage) {
            const response = await fetch(`/api/products?page=${currentPage}`);
            const data = await response.json();
            // console.log(data.docs[0].category.titleEn);
            allProducts = [...allProducts, ...data.docs];
            hasNextPage = data.hasNextPage;
            currentPage++;
          }

          const filtered = allProducts.filter((product) =>
            locale == "en"
              ? product.category.titleEn
              : product.category.titleAr === category
          );
          console.log(filtered);
          setFilteredProducts(filtered);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }

      fetchAllProducts();
    } else {
      console.error("No category found in sessionStorage.");
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-screen mt-32 flex flex-col items-center justify-center">
          <div className="rounded-full h-24 w-24 border-primary border-4 border-t-transparent animate-spin" />
          <p className="text-white text-xl text-center mt-5 animate-pulse">
            {t("Loading")}
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-10 my-10 w-full max-w-[1200px] mx-auto px-2 sm:px-5">
          {filteredProducts.map((product, index) => (
            <Link key={index} href={`products${"/" + product.id}`}>
              <img
                src={product.images?.[0]?.image?.url}
                className="w-full object-contain rounded-lg hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SepProducts;
