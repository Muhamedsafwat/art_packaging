"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const ContactUsForm = () => {
  const t = useTranslations("contact");
  const { locale } = useParams();
  const isArabic = locale === "ar";

  return (
    <form
      className={`p-6 rounded-lg shadow-lg w-full max-w-2xl md:max-w-lg lg:max-w-xl bg-white ${
        isArabic ? "text-right" : "text-left"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <h2 className="text-gray-800 text-2xl font-semibold mb-4 text-center">
        {t("Contact")}
      </h2>

      <div className="flex flex-col gap-6">
        {["Name", "Phone", "Email", "Message"].map((field, index) => (
          <div key={index} className="relative w-full">
            <label
              className={`absolute -top-3 ${isArabic ? "right-3" : "left-3"} bg-white px-2 text-[#B9A14C] font-semibold text-sm`}
            >
              {t(field)}
            </label>
            {field !== "Message" ? (
              <input
                type={
                  field === "Email"
                    ? "email"
                    : field === "Phone"
                      ? "tel"
                      : "text"
                }
                className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-md outline-none 
                focus:ring-2 focus:ring-[#B9A14C] hover:shadow-md transition-all"
              />
            ) : (
              <textarea
                rows="4"
                className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-md outline-none 
                focus:ring-2 focus:ring-[#B9A14C] hover:shadow-md transition-all resize-none"
              ></textarea>
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="bg-[#B9A14C] mt-5 flex justify-center p-4 text-white font-bold rounded-md shadow-md 
        hover:bg-opacity-90 hover:shadow-lg transition-all w-full"
      >
        {t("Submit")}
      </button>
    </form>
  );
};

export default ContactUsForm;
