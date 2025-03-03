"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
const SepProducts = () => {
  const { locale } = useParams();
  const router = useRouter();

  const handleNavigate = (selectedItem) => {
    sessionStorage.setItem("selectedProduct", JSON.stringify(selectedItem));
    router.push(`/${locale}/single-product`);
  };

  const image = [
    {
      image: "/sep-products/1.png",
      Title: "Test",
      description:
        "First Item First ItemFirst Item First Item First ItemFirst Item First Item First Item First Item First ItemFirst Item",
    },
    {
      image: "/sep-products/2.png",
      Title: "Test",
      description:
        "First Item First ItemFirst Item First Item First ItemFirst Item First Item First Item First Item First ItemFirst Item",
    },
    {
      image: "/sep-products/3.png",
      Title: "Test",
      description:
        "First Item First ItemFirst Item First Item First ItemFirst Item First Item First Item First Item First ItemFirst Item",
    },
    {
      image: "/sep-products/4.png",
      Title: "Test",
      description:
        "First Item First ItemFirst Item First Item First ItemFirst Item First Item First Item First Item First ItemFirst Item",
    },
    {
      image: "/sep-products/5.png",
      Title: "Test",
      description:
        "First Item First ItemFirst Item First Item First ItemFirst Item First Item First Item First Item First ItemFirst Item",
    },
    {
      image: "/sep-products/6.png",
      Title: "Test",
      description:
        "First Item First ItemFirst Item First Item First ItemFirst Item First Item First Item First Item First ItemFirst Item",
    },
    {
      image: "/sep-products/7.png",
      Title: "Test",
      description:
        "First Item First ItemFirst Item First Item First ItemFirst Item First Item First Item First Item First ItemFirst Item",
    },
    {
      image: "/sep-products/8.png",
      Title: "Test",
      description:
        "First Item First ItemFirst Item First Item First ItemFirst Item First Item First Item First Item First ItemFirst Item",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-5 my-10 w-full max-w-[1200px] mx-auto px-2 sm:px-5">
      {image.map((i, index) => (
        <img
          src={i.image}
          key={index}
          className="w-full object-contain rounded-lg hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
          onClick={() => handleNavigate(i)}
        />
      ))}
    </div>
  );
};

export default SepProducts;
