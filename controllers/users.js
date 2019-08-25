const jsonWebToken = require('jsonwebtoken')
const models = require('../models')
const User = models.user
const bcrypt = require('bcrypt');

exports.index = (req, res) => {
    User.findAll({
        attributes: ['id', 'full_name', 'email', 'no_tlp']
    })
        .then(user => {
            if (user) {
                return res.status(200).json({
                    message: 'Success get Data User',
                    data: user
                })
            } else {
                return res.status(500).json({
                    message: 'Failed get data User',
                })
            }
        })
}

exports.show = (req, res) => {
    User.findOne({
        where: { id: req.params.id },
        attributes: ['full_name', 'email', 'no_tlp']
    }).then(user => {
        if (user) {
            return res.status(200).json({
                message: 'Success get Data User',
                data: user
            })
        } else {
            return res.status(500).json({
                message: 'Failed get data User',
            })
        }
    })
}

exports.store = (req, res) => {
    const {user_name,password} = req.body
    if (!user_name) {
        return res.status(400).json({
            message: 'User Name Cannot be Null'
        });
    }
    if(!password) {
        return res.status(400).json({
            message: 'Password Cannot be Null'
        })
    }
    User.create(req.body).then(user => {
        const token = jsonWebToken.sign({ userId: user.id }, 'haiiii-ini-rahasia-loh')
        res.status(200).send({
            message: "Registration success",
            data: {
                'email': user.email,
                'full_name': user.full_name,
                'no_tlp': user.no_tlp
            },
            token
        })
    })
}

exports.update = (req, res) => {
    User.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(user => {
        res.status(200).send({
            message: "success",
            user
        })
    })
}

exports.delete = (req, res) => {
    User.destroy({ where: { id: req.params.id } }).then(todo => {
        res.status(200).send({
            message: "success",
            todo
        })
    })
}