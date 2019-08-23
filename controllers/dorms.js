const models = require('../models')
const Dorms = models.dorm
const User = models.user

exports.index = (req, res) => {
     Dorms.findAll({
        include: [{
            model: User,
            as: "createdBy"
        }]
    }).then(dorm=>res.send(dorm))
}

exports.show = (req, res) => {
    Dorms.findOne({id: req.params.id}).then(dorms=> res.send(dorms))
}

exports.store = (req, res) => {
    Dorms.create(req.body).then(dorms=> {
        res.send({
            message: "success",
            dorms
        })
    })
}

exports.update = (req, res) => {
    Dorms.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(dorms=> {
        res.send({
            message: "success",
            dorms
        })
    })
}

exports.delete = (req, res) => {
    Dorms.destroy({where: {id: req.params.id}}).then(dorms=> {
        res.send({
            message: "success",
            dorms
        })
    })
}