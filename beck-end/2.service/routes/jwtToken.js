import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

function verifyJWT(req, res, next) {
  const token = req.cookies.access_token;
  if (!token)
    return res
      .status(401)
      .json({ auth: false, message: `Não tem token! ${token}` });

  jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
    if (err)
      return res.status(500).json({
        auth: false,
        message: `Failed to authenticate token. ${token}`,
      });

    next();
  });
}

export default verifyJWT;
