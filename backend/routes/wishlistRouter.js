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

router.route("/:id").delete((req,res)=>{
    Wishlist.findByIdAndRemove(req.params.id).then(()=>{
        res.json("Successfully deleted.")
    }).catch((err)=>{
        console.log(err);
    })
});

router.route("/:id").get((req,res)=>{

    const id = req.params.id;

    Wishlist.findById(id).then((item)=>{
        res.json(item);
    }).catch((err)=>{
        console.log(err);
    })
});

router.route("/:id/delete/:item").delete((req,res)=>{

    const id = req.params.id;
    const item = req.params.item;

    Wishlist.updateOne({
        _id: id,
    },
        {
            "$pull": {
                wishlistProducts: {_id : item}
            }
        }
        ).then((item)=>{
        res.json(item);
    }).catch((err)=>{
        console.log(err);
    });
});

router.route("/:id/add").put((req,res)=>{

    const id = req.params.id;

    Wishlist.updateOne({
            _id: id,
        },
        {
            "$addToSet": {
                wishlistProducts: {
                    $each: req.body.wishlistProducts
                }
            }
        }
    ).then((item)=>{
        res.json(item);
    }).catch((err)=>{
        console.log(err);
    });
});

router.route("/:id").put((req, res)=>{
    Wishlist.findByIdAndUpdate(req.params.id,{
        $set: req.body
    }).then((item)=>{
        res.json(item);
    });
});

module.exports = router;