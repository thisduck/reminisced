import mongoose from "mongoose";

export default mongoose.model("Bookmark", {
  url: String,
});
