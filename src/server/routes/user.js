// const express = require("express");
// const router = express.Router();
// const {check, validationResult} = require("express-validator/check");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const User = require("../models/users");
// // @route   POST API/users
// // @desc    Test route
// // @access  public
// router.post(
//     "/",
//     [
//         check("name", "Name is required").not().isEmpty(),
//         check("email", "please valid email").isEmail(),
//         check(
//             "password",
//             "please enter a password with 4 or more characters",
//         ).isLength({min: 4}),
//     ],
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({errors: errors.array()});
//         }
//         const {name, email, password} = req.body;
//         try {
//             // SEE if user exists
//             let user = await User.findOne({email});
//             if (user) {
//                 res.status(400).json({errors: [{msg: "User already exists"}]});
//             }

//             user = new User({
//                 name,
//                 email,
//                 password,
//             });
//             // encrypt password
//             const salt = await bcrypt.genSalt(10);
//             user.password = await bcrypt.hash(password, salt);
//             await user.save();
//             //return jsonwebtoken
//             const payload = {
//                 user: {
//                     id: user.id,
//                 },
//             };

//             jwt.sign(payload, "secret", {expiresIn: 360000}, (err, token) => {
//                 if (err) throw err;
//                 res.json({token});
//             });
//             // res.send("User Registered");
//         } catch (err) {
//             console.error(err.message);
//             res.status(500).send("Server error");
//         }
//     },
// );

// module.exports = router;

const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const auth = require("../middlewares/auth");

const userCtrl = require("../controllers/user");

router.get("/", auth, userCtrl.getAllUsers);
router.get("/:id", auth, userCtrl.getOneUser);
router.post(
    "/signup",
    [
        check("username", "Username is required").not().isEmpty(),
        check("email", "Please include a valid email").isEmail(),
        check(
            "password",
            "Please enter a password with 6 or more characters",
        ).isLength({min: 6}),
        check("color", "Color is required").not().isEmpty(),
    ],
    userCtrl.signup,
);
router.post(
    "/login",
    [
        check("email", "Please include a valid email").isEmail(),
        check("password", "Password is required.").exists(),
    ],
    userCtrl.login,
);
router.put("/:id", auth, userCtrl.updateUser);
router.delete("/:id", auth, userCtrl.deleteUser);

module.exports = router;