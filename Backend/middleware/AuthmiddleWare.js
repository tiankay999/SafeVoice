const jwt = require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config();

const authmiddleWare = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodedToken.id;
        next();
    } catch (error) {
        res.status(500).json({ message: "Internal Server error" });
    }
}

module.exports = authmiddleWare;