import { GlobalConfig } from "payload";

const SlidersImages: GlobalConfig = {
  slug: "sliders-images",
  label: "Sliders Images",
  admin: {
    group: "Home Page",
  },
  access: {
    read: () => true, // Allow public read access
  },
  fields: [
    {
      name: "partners",
      type: "relationship",
      label: "Partners Images",
      relationTo: "media",
      hasMany: true,
    },
    {
      name: "sliderImages",
      type: "relationship",
      label: "Slider Images",
      relationTo: "media",
      hasMany: true,
    },
  ],
};

export default SlidersImages;
