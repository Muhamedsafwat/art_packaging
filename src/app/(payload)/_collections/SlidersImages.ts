import { GlobalConfig } from "payload";

const SlidersImages: GlobalConfig = {
  slug: "sliders-images",
  label: "صور السلايدر",
  admin: {
    group: "الصفحة الرئيسية",
  },
  access: {
    read: () => true, // Allow public read access
  },
  fields: [
    {
      name: "partners",
      type: "relationship",
      label: "صور السلايدر",
      relationTo: "media",
      hasMany: true,
    },
    {
      name: "sliderImages",
      type: "relationship",
      label: "شركاء النجاح",
      relationTo: "media",
      hasMany: true,
    },
  ],
};

export default SlidersImages;
