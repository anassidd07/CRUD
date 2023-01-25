import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
function generateAccessToken(user) {
    const acessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" })
    return acessToken
}
export default generateAccessToken;
// let refreshTokens = []
// function generateRefreshToken(user) {
//     const refreshToken =
//         jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "20m" })
//     refreshTokens.push(refreshToken)
//     return refreshToken
// }

