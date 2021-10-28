import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import authRoute from "./routes/auth/auth.mjs";
import fieldRoute from "./routes/fields/fields.mjs";
import sequilize from "./config/db.mjs";
dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use(express.json());
app.use("/api/fields", fieldRoute);

sequilize.sync().then((req) => {
  app.listen(process.env.PORT, () => {
    console.log("Server Running on port " + process.env.PORT);
  });
});
