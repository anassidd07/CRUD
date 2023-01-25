import User from "../database/model.js";
import generateAccessToken from "./helper.js";
import bcrypt from "bcrypt";

//const jwt = jsonwebtoken();

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  //console.log(req);
  User.findOne({ email: email }, async (err, user) => {
    if (user) {
      if (//await bcrypt.compare(password, user.password)
      password==user.password) {
        //const accessToken = generateAccessToken({ user: email });
        //const refreshToken = generateRefreshToken ({user: email})
        //res.send({ accessToken: accessToken /*, refreshToken: refreshToken*/ });
        res.status(200).send({message: "Login Successfull", user: user})
      } else {
        res.status(201).send({ message: "Password didn't match" });
      }
    } else {
      res.status(201).send({ message: "user not found" });
    }
  });
};

export default loginController;
