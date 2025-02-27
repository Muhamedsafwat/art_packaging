"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
const LetsWork = () => {
  const t = useTranslations("LetsWork");
  const { locale } = useParams();
  const handleClick = () => {
    window.open("https://api.whatsapp.com/send?phone=966541024824");
  };
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="lg:text-6xl md:text-4xl  text-3xl flex justify-center items-center gap-2">
        <h1 className=" font-[900] text-white">{t("First")} </h1>
        <span className="text-[#8c8c8f] font-[900]">{t("Second")}</span>
      </div>
      <button
        onClick={() => handleClick()}
        className="text-white text-xl rounded-3xl px-6 py-3 mt-10 bg-[#B9A14C] hover:opacity-90 hover:transition-all mb-20 "
      >
        {t("Button")}
      </button>
    </div>
  );
};

export default LetsWork;
