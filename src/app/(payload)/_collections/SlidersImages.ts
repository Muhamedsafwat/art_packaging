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
      type: "array",
      label: "Partners Images",
      fields: [
        {
          name: "image",
          type: "relationship",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "sliderImages",
      type: "array",
      label: "Slider Images",
      fields: [
        {
          name: "image",
          type: "relationship",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};

export default SlidersImages;
