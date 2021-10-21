import { Router } from "express";
import User from "../../models/User.mjs";
import CryptoJs from "crypto-js";

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

router.post("/login");

export default router;
