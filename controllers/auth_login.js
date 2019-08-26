const jsonWebToken = require('jsonwebtoken')
const models = require('../models')
const User = models.user

exports.login = async (req, res) => {
    const {no_tlp,password} = req.body

    if (!no_tlp) {
        return res.status(400).json({
            message: 'No Hanphone Cannot be Null'
        });
    }
    if (!password) {
        return res.status(400).json({
            message: 'Password Cannot be Null'
        });
    }
    User.findOne({ where: { no_tlp, password } })
        .then(user => {
            if (user) {
                const token = jsonWebToken.sign({ userId: user.id }, 'haiiii-ini-rahasia-loh')
                res.status(200).send({
                    message: "Login Succes",
                    data: {
                        'email': user.email,
                        'full_name': user.full_name,
                        'no_tlp': user.no_tlp
                    },
                    token,

                })
            }
            else {
                res.status(400).send({
                    error: true,
                    message: 'Wrong no Handphone or password !'
                })
            }
        })
}