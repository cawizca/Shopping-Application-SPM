const Wishlist = require('../models/wishlist');
const router = require('express').Router();

router.route("/").post((req,res)=>{

    const wishlistName = req.body.wishlistName;
    const wishlistDescription = req.body.wishlistDescription;
    const wishlistProducts = req.body.wishlistProducts;

    const newWishlist = new Wishlist({
        wishlistName,
        wishlistDescription,
        wishlistProducts
    });

    newWishlist.save().then(()=>{
        res.json("Successfully added.");
    }).catch((err)=>{
        console.log(err);
    })
});

router.route("/").get((req,res)=>{

    Wishlist.find().then((item)=>{
        res.json(item);
    }).catch((err)=>{
        console.log(err);
    })
});


module.exports = router;