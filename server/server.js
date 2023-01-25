import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import connection from "./database/mongodb.js";
import router from "./routes/router.js";

const start = async () => {
    const app = express();// step 1

    const PORT = process.env.TOKEN_SERVER_PORT // step 1


    await app.use(cors());// step 2.1
    await app.use(bodyParser.json({ extended: true })); //convert to json step 2.2
    await app.use(bodyParser.urlencoded({ extended: true })); //used for url space step 2.3
    await app.use('/', router); // step 2
    await app.listen(PORT, () => console.log(`Server is running sucessfully on PORT ${PORT}`)); // step 1
    connection(); // step 3
}

export default start;