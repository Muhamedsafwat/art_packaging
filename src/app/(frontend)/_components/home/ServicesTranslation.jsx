// TranslationWrapper.jsx (Client Component)
"use client";
import { useTranslations } from "next-intl";

const ServicesTranslation = () => {
  const t = useTranslations("Service");

  return (
    <>
      <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
        {t("Title")}
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#939396] lg:max-w-xlg">
        {t("Des")}
      </p>
    </>
  );
};

export default ServicesTranslation;
