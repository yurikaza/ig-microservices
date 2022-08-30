import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import postRouter from "./routes/post.router";
import { connect } from "mongoose";
import fileUpload from "express-fileupload";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import compression from "compression";

const app = express();
const PORT = process.env.PORT;

dotenv.config();

app.use(bodyParser.json());
app.use(fileUpload());
app.use(helmet());
app.use(compression());
app.use(hpp());
app.use(cors());

(async () => {
  await connect(`${process.env.MONGOURL}`);
})();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/post/", postRouter);

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});
