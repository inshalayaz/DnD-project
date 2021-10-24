import { Router } from "express";
import User from "../../models/User.mjs";
import CryptoJs from "crypto-js";
import { createToken } from "./jwt.mjs";

const router = Router();

const { AES } = CryptoJs;

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const emailExists = await User.findOne({ where: { email: email } });
  const usernameExists = await User.findOne({ where: { username: username } });

  if (emailExists) {
    res.status(410).json({ message: "Email already Registered" });
  } else if (usernameExists) {
    res.status(410).json({ message: "Username already Taken" });
  } else {
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
