const db = require("../models");

module.exports = {
    addConcert: function(req, res) {
        db.Concert
        .findOneAndUpdate({
            "concertId": req.body.concertId
        }, {
            $push: {attendees: req.body.userId}
        }, {
            new: true
        })
        .then(concert => {
        if (!concert) {
        return db.Concert.create(req.body)
        .then(res => {
            return db.Concert.findOneAndUpdate({
                "_id": res._id
            }, {
                $push: {attendees: req.body.userId}
            }, {
                new: true
            })
        }).then(show => res.json(show))
            }
        else {
            res.json(concert);
        }
        })
    },
    findConcert: function(req, res) {
        db.Concert
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};