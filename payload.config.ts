import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { ar } from "@payloadcms/translations/languages/ar";

import Media from "@/app/(payload)/_collections/Media.ts";
import SlidersImages from "@/app/(payload)/_collections/SlidersImages.ts";
import Services from "@/app/(payload)/_collections/Services.ts";
import Categories from "@/app/(payload)/_collections/Categories.ts";
import Products from "@/app/(payload)/_collections/Products.ts";
import Users from "@/app/(payload)/_collections/Users.ts";

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [Media, Users, Services, Categories, Products],
  globals: [SlidersImages],
  i18n: {
    supportedLanguages: { ar },
  },
  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "joisdjf98wwe09",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "mongodb://127.0.0.1:27017/test",
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});
