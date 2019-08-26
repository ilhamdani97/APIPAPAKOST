const models = require('../models')
const Dorms = models.dorm
const User = models.user
const jwt = require('jsonwebtoken')
exports.index = (req, res) => {
    Dorms.findAll({
        include: [{
            model: User,
            as: "createdBy",
            attributes: ['full_name', 'email', 'no_tlp']
        }],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    }).then(dorm => {
        if (dorm) {
            return res.status(200).json({
                message: 'Success get Data Dorm',
                data: dorm
            })
        } else {
            return res.status(500).json({
                message: 'Failed get data dorm',
            })
        }
    })
}

exports.show = (req, res) => {
    Dorms.findOne({
        where: { id: req.params.id },
        include: [{
            model: User,
            as: "createdBy",
            attributes: ['full_name', 'email', 'no_tlp']
        }],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    }).then(dorm => {
        if (dorm) {
            return res.status(200).json({
                message: 'Success get Data Dorm',
                data: dorm
            })
        } else {
            return res.status(500).json({
                message: 'Failed get data dorm',
            })
        }
    })
}

exports.store = (req, res) => {
    let token = req.headers['authorization']
    token = token.split(' ')[1]
    const user = jwt.verify(token, 'haiiii-ini-rahasia-loh')
    const { name_kost, address_kost, stock_room, price } = req.body
    if (!name_kost) {
        return res.status(400).json({
            message: 'Name Dorms Cannot be Null'
        });
    }
    if (!address_kost) {
        return res.status(400).json({
            message: 'Address Cannot be Null'
        });
    }
    if (!stock_room) {
        return res.status(400).json({
            message: 'Stock Rooms Cannot be Null'
        });
    }
    if (!price) {
        return res.status(400).json({
            message: 'Price Rooms Cannot be Null'
        });
    }
    const data = {
        name_kost: req.body.name_kost,
        address_kost: req.body.address_kost,
        stock_room: req.body.stock_room,
        price: req.body.price,
        detail_kost: req.body.detail_kost,
        rate: req.body.rate,
        size: req.body.size,
        description: req.body.description,
        image: req.body.image,
        booking_availabel: req.body.booking_availabel,
        type: req.body.type,
        provinsi: req.body.provinsi,
        kabupaten: req.body.kabupaten,
        kecamatan: req.body.kecamatan,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        created_by: user.userId,
    }
    Dorms.create(data)
        .then(dorm => {
            if (dorm) {
                return res.status(200).json({
                    message: 'Success Add Data Dorm',
                    data: dorm
                })
            } else {
                return res.status(500).json({
                    message: 'Failed Add data dorm',
                })
            }
        })
}
// //Update Dorms
// exports.update = (req, res) => {
//     Dorms.update(
//         req.body,
//         { where: { id: req.params.id } }
//     ).then(dorms => {
//         res.send({
//             message: "success",
//             dorms
//         })
//     })
// }

// exports.delete = (req, res) => {
//     Dorms.destroy({ where: { id: req.params.id } }).then(dorms => {
//         res.send({
//             message: "success",
//             dorms
//         })
//     })
// }