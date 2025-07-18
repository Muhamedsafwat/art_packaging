"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const ContactUsForm = () => {
  const t = useTranslations("contact");
  const { locale } = useParams();
  const isArabic = locale === "ar";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "", type: "" });

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus({ message: t("SuccessMessage"), type: "success" });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus({
          message: result.error || "Failed to send message.",
          type: "error",
        });
      }
    } catch (error) {
      setStatus({ message: t("ErrorMessage"), type: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status.message) {
      const timeout = setTimeout(
        () => setStatus({ message: "", type: "" }),
        5000
      );
      return () => clearTimeout(timeout);
    }
  }, [status]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 rounded-lg w-full max-w-2xl md:max-w-lg lg:max-w-xl text-white ${
        isArabic ? "text-right" : "text-left"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="flex flex-col gap-6">
        {["Name", "Phone", "Email", "Message"].map((field, index) => (
          <div key={index} className="relative w-full">
            <label
              className={`${
                isArabic ? "right-3" : "left-3"
              }  px-2 font-semibold text`}
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
                name={field.toLowerCase()}
                value={formData[field.toLowerCase()]}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-md outline-none 
                focus:ring-2 focus:ring-[#B9A14C] focus:mt-3 hover:shadow-md transition-all"
              />
            ) : (
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
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
        hover:bg-opacity-90 hover:shadow-lg transition-all w-full disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "Sending..." : t("Submit")}
      </button>

      {status.message && (
        <p
          className={`mt-4 text-center text-sm font-semibold ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactUsForm;
