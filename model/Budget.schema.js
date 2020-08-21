var mongoose = require ('mongoose');

var schema = mongoose.Schema({
    amount:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('budget-calc',schema);