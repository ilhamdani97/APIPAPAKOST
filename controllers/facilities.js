const models = require('../models')
const Facility = models.facility

exports.index = (req, res) => {
    Facility.findAll().then(facilities=>res.send(facilities))
}

exports.show = (req, res) => {
    Facility.findOne({id: req.params.id}).then(facility=> res.send(facility))
}

exports.store = (req, res) => {
    Facility.create(req.body).then(facility=> {
        res.send({
            message: "success",
            facility
        })
    })
}

exports.update = (req, res) => {
    Facility.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(facility=> {
        res.send({
            message: "success",
            facility
        })
    })
}

exports.delete = (req, res) => {
    Facility.destroy({where: {id: req.params.id}}).then(facility=> {
        res.send({
            message: "success",
            Facility
        })
    })
}