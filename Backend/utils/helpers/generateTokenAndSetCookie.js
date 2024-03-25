import Jwt from "jsonwebtoken";
const generateTokeAndSetCookie = (userId, res) => {
  const token = Jwt.sign({ userId }, process.env.JWT_SECTET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, //more secure cannot excess by browser
    maxAge: 15 * 24 * 60 * 1000,
    sameSite: "strict", //CSRF ATTACK , Protecting it more
  });

  return token;
};

export default generateTokeAndSetCookie;
