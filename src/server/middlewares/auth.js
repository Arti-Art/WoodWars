const jwt = require("jsonwebtoken");
const config = "secret";

module.exports = async (req, res, next) => {
    //GET TOKEN FROM HEADER
    const token = req.header("x-auth-token");

    // check if not token
    if (!token) {
        return res.status(401).json({msg: "no token, auth denied"});
    }

    // verify token
    try {
        const decoded = jwt.verify(token, config);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({msg: "token is not valid"});
    }
};
