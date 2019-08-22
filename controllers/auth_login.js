const jsonWebToken = require('jsonwebtoken')
const models = require('../models')
const User = models.user

exports.login = (req,res) =>{
    const no_tlp = req.body.no_tlp
    const password = req.body.password //Enkripsi dengan becript atau hash ->
    
    User.findOne({where:{no_tlp,password}}).then(user=>{
        if(user){
            const key = jsonWebToken.sign({userId:user.id}, 'haiiii-ini-rahasia-loh')
            res.send({
                error:false,
                message:"Login Succes",
                key,
            })
        }
        else{
            res.send({
                error:true,
                message:'Wrong no Handphon or password !'
            })
        }
    })
}