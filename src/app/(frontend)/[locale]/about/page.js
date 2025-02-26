"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Certificates from "../../components/about/Certificate";
const images = [
  {
    image: "/",
  },
];
export default function About() {
  const t = useTranslations("About");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <div className="relative w-full h-screen ">
      <img
        src="/backgroundAboutUs.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <div
        className={`relative z-10 flex items-center justify-center h-full text-white text-center px-6 transition-opacity duration-1000 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl md:text-5xl font-bold">{t("who")}</h1>
      </div>
      <div className="flex justify-center px-6 mt-12">
        <p className="text-white text-center text-sm md:text-sm max-w-5xl leading-relaxed">
          {t("title")}
        </p>
      </div>
      <div className="flex justify-center items-center mt-6">
        <button className="bg-[#B9A14C] rounded-md px-6 py-3 text-white font-semibold shadow-md hover:opacity-80 transition duration-300 hover:bg-white hover:text-[#ebcd61]">
          {t("button")}
        </button>
      </div>
      <Certificates />
    </div>
  );
}
