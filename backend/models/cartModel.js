const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    name : {
        type : String
    },
    price : {
        type : Number
    },
    category : {
        type : String
    },
    status : {
        type : String
    },
    measuringUnit : {
        type : Number
    },
    availableQuantity : {
        type : Number
    },
    minimumQuantity : {
        type : Number
    }
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;