const OrderModel = require('../models/OrderModel.js')


const createOrder = async (req,res)=>{
    if(req.body){
        const orderData = new OrderModel(req.body)
         orderData.save()
            .then(data=>{
                res.status(200).send({data:data});
            })
            .catch(error=>{
                res.status(500).send({error:error.message})
            })
    }
    else{
        res.send('no Data')
    }
}

const getAllOrders = async(req,res)=>{
    try {
        const orders = await OrderModel.find().populate('riders', 'riderName')
        const sortedData = orders.sort(
            (a, b) => b.createdAt - a.createdAt
        )
        res.send(sortedData)
    }
        catch(error){
            res.status(500).send({error:error.message})
        }
}

const getMyOrders = async(req,res)=>{
    try {
        const id = req.params.id
        const orders = await OrderModel.find({riders:id}).populate('riders','riderName')
        const sortedData = orders.sort(
            (a, b) => b.createdAt - a.createdAt
        )
        res.send(sortedData)
    }
    catch(error){
        res.status(500).send({error:error.message})
    }

}





const getOne = async(req,res)=>{

    const id = req.params.id
    OrderModel.findById({_id:req.params.id}).populate('riders','riderName')
        .then((data)=>{
            res.status(200).send(data.riders)
            console.log(data)
        }).catch((error)=>{
        res.status(500).send(error.message)
    })

}

const updateOrder = async(req,res)=>{
    const id = req.params.id
    console.log(req.body)
    await OrderModel.findByIdAndUpdate(id,req.body)
        .then((data)=>{
            res.status(200).send("Updated")
        })
        .catch((error)=>{
            res.status(500).send({error:error.message})
        })
}


module.exports={
    createOrder,
    getAllOrders,
    updateOrder,
    getMyOrders,
    getOne
}