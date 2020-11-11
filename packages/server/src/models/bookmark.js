import { model, Schema } from "mongoose";

export default model(
  "Bookmark",
  new Schema(
    {
      url: String,
      canonicalUrl: String,
    },
    { timestamps: true }
  )
);
