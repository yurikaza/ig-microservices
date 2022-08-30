import { Schema, model, connect } from "mongoose";

interface IChat {
  senderUserId: string;
  reciverUserId: string;
  text: string;
  files: string[];
  date: string;
}

const chatSchema = new Schema<IChat>({
  senderUserId: { type: String, required: true },
  reciverUserId: { type: String, required: true },
  text: { type: String, required: true },
  files: { type: [String], required: true },
  date: { type: String },
}).pre("save", function (this: IChat, next) {
  var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  this.date = utc;

  next();
});

export const Chat = model<IChat>("Chat", chatSchema);
