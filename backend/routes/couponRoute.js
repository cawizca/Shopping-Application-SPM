const router = require('express').Router();
const Coupon = require('../models/couponModel');

router.route('/').post((req,res)=>{
    const coupon = req.body.coupon;
    const discount = req.body.discount;

    const newCoupon = new Coupon({
        coupon,
        discount
    });

    newCoupon.save().then(()=>{
        res.send("Coupon added successfully.");
    });
});

router.route('/').get((req,res)=>{
    Coupon.find().then((coupons)=>{
        res.json(coupons)
    }).catch((err)=>{
        console.log(err);
    })
});

router.route('/:coupon').get((req,res)=>{
    let discountCode = req.params.coupon;
    let discount = 0;
    Coupon.find({
        coupon: discountCode
    }).then((items)=>{
        items.map((item)=>{
            discount = discount +item.discount
        })
        res.send({discount:discount});
    }).catch((err)=>{
        console.log(err);
    });
})
module.exports = router;