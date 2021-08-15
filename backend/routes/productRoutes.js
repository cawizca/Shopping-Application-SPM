const router = require('express').Router();
let Products = require('../models/productModel');


router.route("/add").post((req,res)=>{
    if(req.body){
        const product = new Products(req.body);
        product.save()
        .then(data=>{
            
            res.status(200).send({data:data})
        }) 
        .catch(error=>{
            res.status(500).send(error.message);
        })
    }

})

router.route("/readAll").get(async(req,res)=>{
    await Products.find()
    .then(data=>{
            
        res.status(200).send({data:data})
    }) 
    .catch(error=>{
        res.status(500).send(error.message);
    })
})

router.route("/update/:id").patch(async(req,res)=>{
    let productID = req.params.id;
    if(req.params && req.params.id){
     const{product,price,category,availableQty,minimumQty,mesuringUnit} = req.body;

        
       const updateproduct = {
        product,price,category,availableQty,minimumQty,mesuringUnit
       }

       const update = await Products.findByIdAndUpdate(productID,updateproduct,{new:true})
       .then(data=>{
            
        res.status(200).send({data:data})
    }) 
    .catch(error=>{
        res.status(500).send(error.message);
    })






    }
})


router.route("/delete/:id").delete(async(req,res)=>{
    let productID = req.params.id;
    if(req.params && req.params.id){

        await Products.findByIdAndDelete(productID)

        .then(data=>{
             
         res.status(200).send("product deleted")
     }) 
     .catch(error=>{
         res.status(500).send(error.message);
     })
    }
})

module.exports=router;