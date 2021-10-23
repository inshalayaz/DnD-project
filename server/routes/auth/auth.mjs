import { Router } from "express";
import User from "../../models/User.mjs";
import CryptoJs from "crypto-js";
import { createToken } from "./jwt.mjs";

const router = Router();

const { AES } = CryptoJs;

router.post("/register", async (req, res) => {
  const { username, email } = req.body;

  try {
    const user = await User.create({
      username: username,
      email: email,
      password: AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });

    res.status(201).json({ message: "Registered Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email: email } });

  if (user) {
    var bytes = CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY);
    var originalText = bytes.toString(CryptoJs.enc.Utf8);

    if (originalText !== req.body.password) {
      res.status(400).json({ message: "Wrong Email Or Password" });
    } else {
      const accessToken = createToken(user);

      const { password, ...info } = user.dataValues;

      res.status(200).json({ ...info, accessToken });
    }
  } else {
    res.status(400).json({ message: "Incorrect Email Or Password" });
  }
});

export default router;
