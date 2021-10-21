import jwt from "jsonwebtoken";

const createToken = (user) => {
  jwt.sign({ od: user.id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, {
    expiresIn: "5d",
  });
};
