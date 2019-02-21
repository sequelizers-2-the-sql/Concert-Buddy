const db = require("../models");

module.exports = {
    addConcert: function(req, res) {
        db.Concert
        .findOneAndUpdate({
            "concertId": req.body.concertId
        }, {
            $addToSet: {attendees: req.body.userId}
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
                $addToSet: {attendees: req.body.userId}
            }, {
                new: true
            })
        })
        .then(show => {
            res.json(show);
            return db.User.findOneAndUpdate(
                {
                    "_id": req.body.userId
                }, {
                    $addToSet: {concerts: show._id}
                }, {
                    new: true
                }) 
                
        })
            }
        else {
            res.json(concert);
            return db.User.findOneAndUpdate(
                {
                "_id": req.body.userId
            }, {
                $addToSet: {concerts: concert._id}
            }, {
                new: true
            })
        }
        })
        .then(finish => console.log(finish))
        .catch(error => console.log(error))
    },
    findConcert: function(req, res) {
        db.Concert
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};