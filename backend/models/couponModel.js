const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const couponSchema = new Schema({
    coupon : String,
    discount : Number
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;