const router = require("express").Router();
const concertRoutes = require("./concerts");
const userRoutes = require("./user");

// Concert routes
router.use("/concerts", concertRoutes);
router.use("/users", userRoutes);

module.exports = router;
