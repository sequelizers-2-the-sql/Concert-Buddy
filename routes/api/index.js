const router = require("express").Router();
const userRoutes = require("./user");
const concertRoutes = require("./concerts");
//const chatRoutes = require("./chat")

// Concert routes
// /api/users
router.use("/users", userRoutes);
router.use("/concerts", concertRoutes);
//router.use("/chats", chatRoutes);

module.exports = router;
