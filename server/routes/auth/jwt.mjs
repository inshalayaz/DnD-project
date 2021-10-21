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

export const verifyToken = (req, res, next) => {
  const token = req.headers.token;

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        res.status(403).json("Invalid Token");
      } else {
        req.user = user;
      }
    });
  } else {
    res.status(401).json("Auth TOken Required");
  }

  next();
};
