import { CollectionConfig } from "payload";

const Products: CollectionConfig = {
  slug: "products",
  labels: {
    singular: "Product",
    plural: "Products",
  },
  admin: {
    useAsTitle: "descriptionEn", // Display English description in the admin panel
    group: "Products",
  },
  fields: [
    {
      name: "images",
      type: "array",
      label: "Product Images",
      fields: [
        {
          name: "image",
          type: "relationship",
          relationTo: "media", // Assuming images are stored in a media collection
          required: true,
        },
      ],
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

export default Products;
