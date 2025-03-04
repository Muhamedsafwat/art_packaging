"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SepProducts = () => {
  const { locale } = useParams();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const category = JSON.parse(sessionStorage.getItem("selectedCategory"));

    if (category) {
      setSelectedCategory(category);

      async function fetchAllProducts() {
        let allProducts = [];
        let currentPage = 1;
        let hasNextPage = true;

        try {
          while (hasNextPage) {
            const response = await fetch(`/api/products?page=${currentPage}`);
            const data = await response.json();
            allProducts = [...allProducts, ...data.docs];
            hasNextPage = data.hasNextPage;
            currentPage++;
          }
          const filtered = allProducts.filter(
            (product) => product.category?.id === category.id
          );
          setFilteredProducts(filtered);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }

      fetchAllProducts();
    } else {
      console.error("No category found in sessionStorage.");
    }
  }, []);

  const handleNavigate = (product) => {
    console.log("Storing product:", product); // Debugging
    sessionStorage.setItem("selectedProduct", JSON.stringify(product)); // Store as JSON string
    console.log(
      "Product stored in sessionStorage:",
      sessionStorage.getItem("selectedProduct")
    ); // Debugging
    router.push(`/${locale}/single-product`);
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-5 my-10 w-full max-w-[1200px] mx-auto px-2 sm:px-5">
      {filteredProducts.map((product, index) => (
        <img
          src={product.images?.[0]?.image?.url}
          key={index}
          className="w-full object-contain rounded-lg hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
          onClick={() => handleNavigate(product)}
        />
      ))}
    </div>
  );
};

export default SepProducts;
