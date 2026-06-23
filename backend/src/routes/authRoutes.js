const express = require("express");

const router = express.Router();

// const {
//     registerUser
// } = require("../controllers/authController");
const {

 registerUser,

 loginUser,

 getProfile

} = require("../controllers/authController");


const {
 body
} = require("express-validator");

const validationMiddleware =
require("../middleware/validationMiddleware");

const authMiddleware =
require("../middleware/authMiddleware");


router.post(
    "/register",
     [
   body("name")
     .notEmpty()
     .withMessage("Name Required"),

   body("email")
     .isEmail()
     .withMessage("Valid Email Required"),

   body("password")
     .isLength({ min: 6 })
     .withMessage(
       "Password must be minimum 6 characters"
     )
 ],
    registerUser
);

router.post(
    "/login",
     [
   body("email")
     .isEmail(),

   body("password")
     .notEmpty()
 ],

    loginUser
);

router.get(

 "/profile",

 authMiddleware,

 getProfile

);

module.exports = router;