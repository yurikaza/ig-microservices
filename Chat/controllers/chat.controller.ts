import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { verify } from "jsonwebtoken";
import { Web3Storage, File } from "web3.storage";
import { Chat } from "../models/chat.model";

export async function sendMessage(req: Request, res: Response) {
  const token: string = `${process.env.WEB3STORAGE}`;
  const fileData = req?.files?.myFile as any | UploadedFile[];
  let filesArray: string[] = [];

  if (fileData.lenght > 0) {
    for (let index = 0; index < fileData.length; index++) {
      const element = fileData[index];

      const client = new Web3Storage({ token });
      const files = [new File([element], element.name)];

      const cid = await client.put(files);
      console.log(cid);

      const Sendres: any = await client.get(cid);
      const filesInfo = await Sendres.files();

      const fileLink = `https://${cid}.ipfs.dweb.link/${element.name}`;
      filesArray.push(fileLink);
    }
  }

  const secret = `${process.env.SECRET}`;
  const userLoginData: any = verify(req.body.jwt, secret);

  const post = await Chat.create({
    senderUserId: userLoginData.id.toString(),
    reciverUserId: req.params.id,
    text: req.body.text,
    files: filesArray,
  });

  res.status(200).json({
    status: "success",
    data: post,
  });
}
