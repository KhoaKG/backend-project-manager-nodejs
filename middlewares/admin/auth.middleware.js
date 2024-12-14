const systemConfig = require("../../config/system")
const Account = require("../../models/accounts.model")
const Role = require("../../models/roles.model")

module.exports.requireAuth = async (req,res,next) =>{
    if(!req.cookies.token){
        res.redirect(`${systemConfig.prefixAdmin}/auth/login`)
    }else{
        const user = await Account.findOne({
            token: req.cookies.token
        }).select("-password")
        if(!user){
            res.redirect(`${systemConfig.prefixAdmin}/auth/login`)
        }else{
            // *
            res.locals.user = user
            // *
            // Role id
            const role = await Role.findOne({
                _id: user.role_id
            })
            res.locals.role = role
            // Role id
            next()
        }
    }
}