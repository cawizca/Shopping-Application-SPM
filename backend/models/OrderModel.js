const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    orderId:{
        type:String,
        required:true
    },
    customerID:{
        type:String,
        required:true
    },
    orderDate:{
        type:String,
        required:true
    },
    request:{
        type:String,
        required:true
    },

    riders:{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'riders'
    }
},
    {
        timestamps:true
    })

const OrderModel = mongoose.model('orders',orderSchema);
module.exports = OrderModel;