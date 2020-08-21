var user = require('../model/User.schema');

function userInsert(req,res){
    var userData = new user({
        username:req.body.username,
        password:req.body.password
    });

    userData.save()
    .then(()=>{
        res.json({
            status:"OK",
            message:"Record Inserted Successfully"
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        });
    })
};

function verifyUser(req,res){
    var userData = {
        username:req.body.username,
        password:req.body.password
    };
    user.findOne(userData)
    .then((data)=>{
        if(data === null || data === undefined || data === ""){
            res.json({
                status:"NOK",
                message:"Login Failed"
            });
        }
        else{
            res.json({
                status:"OK",
                message:"User Successfully Login"
            });
        }
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        });
    })
}

module.exports.userInsert = userInsert;
module.exports.verifyUser = verifyUser;