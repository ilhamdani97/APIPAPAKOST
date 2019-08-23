const jsonWebToken = require('jsonwebtoken')
const models = require('../models')
const User = models.user

exports.index = (req, res) => {
    User.findAll().then(users=>res.send(users))
}

exports.show = (req, res) => {
    User.findOne({id: req.params.id}).then(user=> res.send(user))
}

exports.store = (req, res) => {
    User.create(req.body).then(user=> {
        const key = jsonWebToken.sign({userId:user.id}, 'haiiii-ini-rahasia-loh')
        res.send({
            message: "success",
            user,
            key
        })
    })
}

exports.update = (req, res) => {
    User.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(user=> {
        res.send({
            message: "success",
            user
        })
    })
}

exports.delete = (req, res) => {
    User.destroy({where: {id: req.params.id}}).then(todo=> {
        res.send({
            message: "success",
            todo
        })
    })
}