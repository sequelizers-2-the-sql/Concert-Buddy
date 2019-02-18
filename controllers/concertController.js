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
        .then(musical => {
            return db.Concert.findOneAndUpdate({
                "_id": musical._id
            }, {
                $push: {attendees: req.body.userId}
            }, {
                new: true
            })
        }).then(show => {
            return db.User.findOneAndUpdate(
                {
                    "_id": req.body.userId
                }, {
                    $push: {concerts: show._id}
                }, {
                    new: true
                }
            ).then(res.json(show))
        })
            }
        else {
            return db.User.findOneAndUpdate(
                {
                "_id": req.body.userId
            }, {
                $push: {concerts: concert._id}
            }, {
                new: true
            })
            .then(res.json(concert))
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