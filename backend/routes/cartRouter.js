const router = require("express").Router();
const Item = require("../models/cartModel");

router.route("/").post((req,res)=>{

   const name = req.body.name;
   const price = req.body.price;
   const category = req.body.category;
   const status = req.body.status;
   const measuringUnit = req.body.measuringUnit;
   const availableQuantity = req.body.availableQuantity;
   const minimumQuantity = req.body.minimumQuantity;

   const newItem = new Item({
      name,
      price,
      category,
      status,
      measuringUnit,
      availableQuantity,
      minimumQuantity
   });

   newItem.save().then((item)=>{
      res.json("Product Added successfully");
   }).catch((err)=>{
      console.log(err);
   });
})

router.route("/").get((req,res)=>{
   Item.find().then((items)=>{
      res.json(items);
   }).catch((err)=>{
      console.log(err)
   })
});

router.route("/:id").delete((req,res)=>{
   const id = req.params.id;
   Item.findByIdAndRemove(id).then((item)=>{
      res.json(item.productName+" deleted successfully");
   }).catch((err)=>{
      console.log(err)
   })
})

module.exports = router;