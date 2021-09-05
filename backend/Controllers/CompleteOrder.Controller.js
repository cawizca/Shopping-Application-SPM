const CompleteOrderModel = require('../models/completeOrdersModel')

const completeOrder = async (req,res)=>{
   const completionData = new CompleteOrderModel(req.body)
    console.log(completionData)
    await  completionData.save()
        .then(data=>{
            res.send("inserted successfully")
        })
        .catch(error=>{
            res.send(error)
        })
}

const getMyCompletes = async (req, res) => {
    try {
        const id = req.params.id
        const orders = await CompleteOrderModel.find({riders: id}).populate('riders', 'riderName')
        const sortedData = orders.sort(
            (a, b) => b.createdAt - a.createdAt
        )
        res.send(sortedData)
    } catch (error) {
        res.status(500).send({error: error.message})
    }

}

const getAllCompletes = async (req, res) => {
    try {
        const id = req.params.id
        const orders = await CompleteOrderModel.find({}).populate('riders', 'riderName')
        const sortedData = orders.sort(
            (a, b) => b.createdAt - a.createdAt
        )
        res.send(sortedData)
    } catch (error) {
        res.status(500).send({error: error.message})
    }

}

module.exports={
    completeOrder,
    getMyCompletes,
    getAllCompletes
}
