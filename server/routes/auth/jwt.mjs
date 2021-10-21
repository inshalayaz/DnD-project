import jwt from "jsonwebtoken";

export const createToken = (user) => {
  return jwt.sign(
    { od: user.id, isAdmin: user.isAdmin },
    process.env.SECRET_KEY,
    {
      expiresIn: "5d",
    }
  );
};
