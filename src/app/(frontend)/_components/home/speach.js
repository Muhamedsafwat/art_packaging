"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
const Speach = () => {
  const t = useTranslations("Speach");
  const { locale } = useParams();
  return (
    <div className="h-screen flex flex-col justify-center items-center px-4 ">
      <div className="flex flex-col md:flex-row justify-center items-center mt-auto gap-8">
        {locale === "en" ? (
          <div className=" flex flex-col justify-center px-4">
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
          <p className="text-white text-lg leading-snug text-center">
            {t("Title")}
          </p>
        )}

        <div className="flex justify-center">
          <Image
            src="/Speach/Sec7.png"
            alt="Speech Section"
            width={500}
            height={500}
            quality={100}
            className=" w-full h-auto max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] object-cover transition-transform duration-300 transform scale-110 hover:scale-125"
          />
        </div>
      </div>

      <div className="flex justify-center w-full my-9">
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
