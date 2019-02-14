const router = require("express").Router();
const userRoutes = require("./user");
const concertRoutes = require("./concerts");

// Concert routes
router.use("/users", userRoutes);
router.use("/concerts", concertRoutes);

module.exports = router;
