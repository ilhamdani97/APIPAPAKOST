const models = require('../models')
const Dorms = models.dorm
const User = models.user

exports.index = (req, res) => {
    Dorms.findAll({
        include: [{
            model: User,
            as: "createdBy",
            attributes: ['full_name', 'email', 'no_tlp']
        }]
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
    Dorms.create(req.body).then(dorms => {
        res.send({
            message: "success",
            dorms
        })
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