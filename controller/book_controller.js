const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Book.find()
         
            .then(dbModel => {
                console.log(dbModel)
                res.json(dbModel)
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    }, 

    findOne: function(req, res) {
        db.Book.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.log(err);
            res.status(422).json(err);
        })
    
    },

    save: function(req, res) {
        db.Book.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.log(err);
            res.status(422).json(err)
        })
    },

    remove: function (req, res) {
        db.Book.findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.log(err);
            res.status(422).json(err)
        })
    }
}