const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    console.log("hit at middleware");
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message: "Invalid Auth",
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if(decoded.userId){

            req.userId = decoded.userId;
            next();
        }else{
            return res.status(403).json({
                message: "Invalid Auth",
            });
        }

    } catch (err) {
        return res.status(403).json({
            message: "Invalid Auth",
        });
    }
};

module.exports = {
    authMiddleware
}