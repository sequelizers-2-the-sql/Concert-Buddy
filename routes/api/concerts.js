const router = require("express").Router();
const concertController = require("../../controllers/concertController");

// Matches with "/api/concerts"
router.route("/")
  .post(concertController.addConcert);

// Matches with "/api/concerts/:id"
router
  .route("/:id")
  .get(concertController.findConcert)

module.exports = router;
