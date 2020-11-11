import { model, Schema } from "mongoose";

export default model(
  "Bookmark",
  new Schema(
    {
      url: String,
    },
    { timestamps: true }
  )
);
