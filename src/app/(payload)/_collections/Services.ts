import { CollectionConfig } from "payload";

const Services: CollectionConfig = {
  slug: "services",
  access: {
    read: () => true, // Allow public read access
  },
  labels: {
    singular: "Service",
    plural: "Services",
  },
  admin: {
    useAsTitle: "titleEn", // Display English title in the admin panel
    group: "Home Page",
  },
  fields: [
    {
      name: "icon",
      type: "upload",
      relationTo: "media", // Assuming you have a media collection for icons
      required: true,
      label: "Service Icon",
    },
    {
      name: "titleAr",
      type: "text",
      label: "Title (Arabic)",
      required: true,
    },
    {
      name: "titleEn",
      type: "text",
      label: "Title (English)",
      required: true,
    },
    {
      name: "descriptionAr",
      type: "textarea",
      label: "Description (Arabic)",
      required: true,
    },
    {
      name: "descriptionEn",
      type: "textarea",
      label: "Description (English)",
      required: true,
    },
  ],
};

export default Services;
