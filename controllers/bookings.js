const models = require('../models')
const Booking = models.booking
const User = models.user
const Dorm = models.dorm

exports.store = (req, res) => {
    Booking.create(req.body).then(booking => {
        res.send({
            message: "success",
            booking
        })
    })
}
exports.showdetail = (req, res) => {
    Booking.findOne({
        where: { id: req.params.id },
        include: [{
            model: User,
            as: "bookingUser",
            attributes: ['full_name', 'email', 'no_tlp']
        },
        {
            model:Dorm,
            as:"bookingDorm"
        }],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    }).then(dorm => {
        if (dorm) {
            return res.status(200).json({
                message: 'Success Add Data Booking',
                data: dorm
            })
        } else {
            return res.status(500).json({
                message: 'Failed Add data Booking',
            })
        }
    })
}
exports.show = (req, res) => {
    Booking.findAll({
        include: [{
            model: User,
            as: "bookingUser",
            attributes: ['full_name', 'email', 'no_tlp']
        },
        {
            model:Dorm,
            as:"bookingDorm"
        }
    ],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    }).then(dorm => {
        if (dorm) {
            return res.status(200).json({
                message: 'Success Add Data Booking',
                data: dorm
            })
        } else {
            return res.status(500).json({
                message: 'Failed Add data Booking',
            })
        }
    })
}