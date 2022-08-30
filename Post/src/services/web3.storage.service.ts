import { Web3Storage, File } from "web3.storage";

export async function web3StorageSerice(file: File) {
  const token: string = `${process.env.WEB3STORAGE}`;
  const client = new Web3Storage({ token });
  const files = [new File([file], file.name)];

  const cid = await client.put(files);
  console.log(cid);

  const Sendres: any = await client.get(cid);
  const filesInfo = await Sendres.files();

  for (const file of filesInfo) {
    const fileSize = file.size / 1000000;

    return `https://${cid}.ipfs.dweb.link/${file.name}`;
  }
}
