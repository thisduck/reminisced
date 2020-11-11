import { model, Schema } from "mongoose";

export default model(
  "ItemData",
  new Schema(
    {
      canonicalUrl: String,
      title: String,
      byline: String,
      dir: String,
      content: String,
      textContent: String,
      length: Number,
      excerpt: String,
      siteName: String,
    },
    { timestamps: true }
  )
);
