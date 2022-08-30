import { verify } from "jsonwebtoken";
import { Schema, model, connect } from "mongoose";

interface IPost {
  userId: string;
  description: string;
  files: string[];
  date: string;
}

const postSchema = new Schema<IPost>({
  userId: { type: String, required: true },
  description: { type: String, required: true },
  files: { type: [String], required: true },
  date: { type: String },
}).pre("save", function (this: IPost, next) {
  var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  this.date = utc;

  next();
});

export const Post = model<IPost>("Post", postSchema);
