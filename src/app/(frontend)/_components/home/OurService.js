"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Image from "next/image";
import SingleService from "./SingleService";
import { useState } from "react";
const OurService = () => {
  const t = useTranslations("Service");
  const { locale } = useParams();
  const maxLength = 224;
  const [selectedService, setSelectedService] = useState(null);

  const service = [
    {
      image: "/Service/One.png",
      id: 1,
      title: { en: "OFFSET PRINTING", ar: "طباعة الأوفسيت" },
      description: {
        en: "Package design is a multi-disciplinary field that takes into account functional aspects such as preserving the contents and protecting the product from damage. The graphic design department is also interested in creative solutions and creative ideas, which give the boxes beauty and modern colors that keep pace with the current reality… The design department also takes into account that the boxes are an integral part. They are part of the product and complement each other. It also provides an overview of research into the marketing aspects of packaging (e.g. product positioning, brand values, market segmentation, target audience, competitors’ products).",
        ar: "تصميم العبوات هو مجال متعدد المجالات يأخذ في الاعتبار الجوانب الوظيفية مثل الاحتفاظ بمحتويات وحماية المنتج من التلف كما يهتم قسم التصميم قراءة المزيد. يهتم قسم التصميم الجرافيكي بالحلول الإبداعية والأفكار الخلاقة مما يضفي للعلب جمالاً وألواناً عصرية تواكب الواقع الحالي… كما يأخذ قسم التصميم بعين الاعتبار أن تكون العلب جزء لا يتجزأ من المنتج ويكمل إحداهما الآخر. كما يقدم نظرة عامة على البحث في الجوانب التسويقية للتعبئة والتغليف (مثل وضع المنتج، وقيم العلامة التجارية، وتجزئة السوق، والجمهور المستهدف، ومنتجات المنافسين).",
      },
    },
    {
      image: "/Service/Two.png",
      id: 4,
      title: { en: "CREATIVE SOLUTIONS", ar: "حلول ابداعية" },
      description: {
        en: "The Packaging Art Factory offers creative solutions in manufacturing luxury artistic boxes now more than ever… Just present your product and give the opportunity to our experts in the factory to unleash their creativity in the design and production journey so that your product shines in its best image. Packaging Art solutions start from the marketing team, then the design, then to the lines. Specialized manufacturing using innovative and sustainable packaging strategies. The work begins through our daily fleet, which is represented by a skilled technical human cadre, in addition to a huge fleet of luxury box manufacturing machines, which provides limitless quality and precise execution of orders to maintain low costs and effectiveness of boxes.",
        ar: "قدم مصنع فن التغليف حلول إبداعية في تصنيع العلب الفنية الفاخرة الآن أكثر من أي وقت مضى… فقط قدم منتجك وأعط المجال لخبرائنا في المصنع لتفريغ إبداعاتهم في رحلة التصميم والإنتاج ليزهو منتجكم بأبهى صورة، تبدأ حلول فن التغليف من فريق التسويق فالتصميم ثم إلى خطوط التصنيع المختص باستخدام استراتيجيات تغليف مبتكرة ومستدامة. ينطلق العمل من خلال أسطولنا اليومي الذي يتمثل بكادر بشري فني متمكن، إضافة إلى أسطول ضخم من آلات تصنيع العلب الفاخرة، مما يوفر جودة لا حدود لها وتنفيذاً دقيقاً للطلبات للحفاظ على انخفاض تكاليف وفعالية العلب.",
      },
    },
    {
      image: "/Service/Three.png",
      id: 3,
      title: { en: "GRAPHIC DESIGN", ar: "التصميم الجرافيكى" },
      description: {
        en: "Package design is a multi-disciplinary field that takes into account functional aspects such as preserving the contents and protecting the product from damage. The graphic design department is also interested in creative solutions and creative ideas, which give the boxes beauty and modern colors that keep pace with the current reality… The design department also takes into account that the boxes are an integral part. They are part of the product and complement each other. It also provides an overview of research into the marketing aspects of packaging (e.g. product positioning, brand values, market segmentation, target audience, competitors’ products).",
        ar: "تصميم العبوات هو مجال متعدد المجالات يأخذ في الاعتبار الجوانب الوظيفية مثل الاحتفاظ بمحتويات وحماية المنتج من التلف كما يهتم قسم التصميم قراءة المزيد. يهتم قسم التصميم الجرافيكي بالحلول الإبداعية والأفكار الخلاقة مما يضفي للعلب جمالاً وألواناً عصرية تواكب الواقع الحالي… كما يأخذ قسم التصميم بعين الاعتبار أن تكون العلب جزء لا يتجزأ من المنتج ويكمل إحداهما الآخر. كما يقدم نظرة عامة على البحث في الجوانب التسويقية للتعبئة والتغليف (مثل وضع المنتج، وقيم العلامة التجارية، وتجزئة السوق، والجمهور المستهدف، ومنتجات المنافسين).عزز تواجدك على الإنترنت مع خدمات التسويق الرقمي الخاصة بنا.",
      },
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col items-center text-center px-12 py-24"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
        {t("Title")}
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#939396] lg:max-w-xlg">
        {t("Des")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-screen-xl mx-auto">
        {service.map((s, index) => (
          <div
            key={index}
            className="bg-[#424245] rounded-xl p-4 shadow-lg cursor-pointer text-white text-center"
            onClick={() => setSelectedService(s)}
          >
            <Image
              src={s.image}
              alt={s.title[locale]}
              width={150}
              height={150}
              className="mx-auto rounded-md mt-12 object-cover"
            />
            <h3 className="text-2xl mt-4 font-bold text-[#B9A14C]">
              {s.title[locale]}
            </h3>
            <p className="text-sm text-left text-gray-300 mt-2 font-semibold leading-[26px]">
              {s.description[locale].length > maxLength ? (
                <>
                  {s.description[locale].slice(0, maxLength)}
                  <span className="">... </span>
                  <span className="text-[#B9A14C] cursor-pointer font-semibold">
                    {t("Read")}
                  </span>
                </>
              ) : (
                s.description[locale]
              )}
            </p>
          </div>
        ))}
      </div>
      {selectedService && (
        <SingleService
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default OurService;
