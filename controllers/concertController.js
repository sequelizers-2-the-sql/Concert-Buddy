const db = require("../models");

module.export = {
    addConcert: function(req, res) {
        db.Concert
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findConcert: function(req, res) {
        db.Concert
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};