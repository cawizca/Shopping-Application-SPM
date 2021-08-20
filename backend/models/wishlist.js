const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WishlistSchema = new Schema({
    wishlistName : {
        type: String
    },

    wishlistDescription : {
        type: String
    },

    wishlistProducts: [{
        type: String
    }]
});

const Wishlist = mongoose.model("Wishlist", WishlistSchema);

module.exports = Wishlist;