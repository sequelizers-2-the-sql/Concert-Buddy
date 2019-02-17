const router = require("express").Router();
const userRoutes = require("./user");
const concertRoutes = require("./concerts");

// Concert routes
// /api/users
router.use("/users", userRoutes);
router.use("/concerts", concertRoutes);

module.exports = router;
