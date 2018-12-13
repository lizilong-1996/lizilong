var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//创建Schema
var productSchema = new Schema({
	p_name:String,
    p_detail:String,
    p_price:String,
    p_num:String,
    p_sale:String
});
module.exports = productSchema;