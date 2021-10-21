import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import authRoute from "./routes/auth/auth.mjs";
import sequilize from "./config/db.mjs";
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);

sequilize.sync().then((req) => {
  app.listen(process.env.PORT, () => {
    console.log("Server Running on port " + process.env.PORT);
  });
});
