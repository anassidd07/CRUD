import User from "../database/model.js";
import bcrypt from 'bcrypt';
const controller = async (req, res, next) => {
    const { name, email, password } = req.body
    console.log(req.body);
    //  const name = req.body.name
    //  const email = req.body.email
    //  const password = await bcrypt.hash(req.body.password, 10)
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
}



export default controller;


