const jsonWebToken = require('express-jwt')

exports.authenticated = jsonWebToken({secret: 'haiiii-ini-rahasia-loh'})
// exports.authenticated = (req,res,next)=>{
//     if(signIn){
//         next()
//     }
//     else{
//         res.send({
//             message:'Please Logging!'
//         })
//     }
// }