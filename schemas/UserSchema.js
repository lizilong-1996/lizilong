var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//创建Schema
var userSchema = new Schema({
	name:String,
    telephone:String,
    conpany_name:String,
});
module.exports = userSchema;