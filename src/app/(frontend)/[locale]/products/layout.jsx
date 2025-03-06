"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { IoHome } from "react-icons/io5";
import { useParams } from "next/navigation";
import Link from "next/link";

const layout = ({ children }) => {
  const t = useTranslations("SingleProduct");
  const { locale } = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCategory = localStorage.getItem("category");
      if (storedCategory) {
        setCategory(JSON.parse(storedCategory));
      }
    }
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mx-auto flex w-full justify-center mt-20 items-center gap-2 cursor-pointer text-white text-lg md:text-xl mb-12">
        <Link
          href={`/${locale}`}
          className="hover:text-[#d4af37] flex items-center gap-1 mb-[1px]"
        >
          <IoHome className="text-xl mr-2 mt-[1px]" />
          <span>{t("Home")}</span>
        </Link>
        <span>{">"}</span>
        <Link href={`/${locale}#products`} className="hover:text-[#d4af37]">
          {t("Product")}
        </Link>
        <span>{">"}</span>
        <span className="font-semibold hover:text-[#d4af37]">
          {locale == "ar" ? category.titleAr : category.titleEn}
        </span>
      </div>
      {children}
    </div>
  );
};

export default layout;
