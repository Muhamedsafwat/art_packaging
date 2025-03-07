"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
const Speach = () => {
  const t = useTranslations("Speach");
  const { locale } = useParams();
  return (
    <div className="md:h-screen flex flex-col justify-center max-w-5xl mx-auto items-center mt-16">
      <div className="flex flex-col md:flex-row justify-center items-center  gap-8">
        {locale === "en" ? (
          <div className=" flex flex-col justify-center">
            <p className="text-white text-lg leading-snug text-center">
              <span className="block">Fashion also has a special world</span>
              <span className="block">
                The product also has a special world of fashion. Let us choose
                fashion from
              </span>
              <span className="block">The paper suits your product.</span>
            </p>
          </div>
        ) : (
          <p className="text-white text-xl leading-snug text-center">
            {t("Title")}
          </p>
        )}

        <div className="flex justify-center">
          <Image
            src="/Speach/Sec7.png"
            alt="Speech Section"
            width={600}
            height={600}
            quality={100}
            className="object-cover transition-transform duration-300 transform scale-110 max-w-[80vw] mx-auto  md:hover:scale-125"
          />
        </div>
      </div>

      <div className="flex justify-center w-full ml-12 my-9">
        <Image
          src="/Speach/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Speach;
