import { CollectionConfig } from "payload";

const Categories: CollectionConfig = {
  slug: "categories",
  labels: {
    singular: "Category",
    plural: "Categories",
  },
  admin: {
    useAsTitle: "titleEn", // Display English title in the admin panel
    group: "Products",
  },
  fields: [
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media", // Assuming you have a media collection for storing images
      required: true,
      label: "Category Thumbnail",
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
  ],
};

export default Categories;
