import { CollectionConfig } from "payload";
import {
  BlocksFeature,
  LinkFeature,
  UploadFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

const Products: CollectionConfig = {
  access: {
    read: () => true,
  },
  slug: "products",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "category",
      type: "select",
      admin: {
        position: "sidebar",
      },
      required: true,
      options: [
        { label: "Poultry", value: "poultry" },
        { label: "Cattle", value: "cattle" },
        { label: "Bets", value: "bets" },
      ],
    },
    {
      name: "isHighlighted",
      type: "checkbox",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media", // Assuming you have a media collection for uploads
      required: true,
    },
    {
      name: "preview",
      type: "textarea",
      admin: {
        placeholder:
          "A breif description to show on the product card, about 15 - 20 words for the best appearance",
      },
    },
    {
      name: "description",
      type: "richText",
      editor: lexicalEditor({}),
      required: true,
    },
  ],
};

export default Products;
