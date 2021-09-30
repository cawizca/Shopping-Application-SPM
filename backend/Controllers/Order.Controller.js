const OrderModel = require('../models/OrderModel.js')


const createOrder = async (req, res) => {

    //find last order id
    await OrderModel.find().sort({_id: -1}).limit(1)
        .then((data) => {
            let value = '';
            data.map((data) => {
                value = data.orderId
            })


            let value2 = value.toString();
            let value3 = value2.substr(3, 7)
            let value4 = Number(value3) + 1
            const orderData = new OrderModel({
                "orderId": "ORD" + value4,
                "customerID": "CUS005",
                "orderDate": "2021-09-30",
                "request": "-",
                "total": req.body.total,
                "name": req.body.name,
                "address": req.body.address,
                "city": req.body.city,
                "postal": req.body.postal,
                "phone": req.body.phone,
                "products": req.body.items

            })

            orderData.save()
                .then(data => {
                    console.log(Number(value3) + 1)
                    res.status(200).send({data: data});
                })
                .catch(error => {
                    res.status(500).send({error: error.message})
                })

        })


}

const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find()
        const sortedData = orders.sort(
            (a, b) => b.createdAt - a.createdAt
        )
        res.send(sortedData)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

const getMyOrders = async (req, res) => {
    try {
        const id = req.params.id
        const orders = await OrderModel.find({riders: id}).populate('riders', 'riderName')
        const sortedData = orders.sort(
            (a, b) => b.createdAt - a.createdAt
        )
        res.send(sortedData)
    } catch (error) {
        res.status(500).send({error: error.message})
    }

}


const getOne = async (req, res) => {

    const id = req.params.id
    OrderModel.findById({_id: req.params.id}).populate('riders', 'riderName')
        .then((data) => {
            res.status(200).send(data.riders)
            console.log(data)
        }).catch((error) => {
        res.status(500).send(error.message)
    })

}

const updateOrder = async (req, res) => {
    const id = req.params.id
    console.log(req.body)
    await OrderModel.findByIdAndUpdate(id, req.body)
        .then((data) => {
            res.status(200).send("Updated")
        })
        .catch((error) => {
            res.status(500).send({error: error.message})
        })
}


const getCount = async (req, res) => {
    try {

        const count = await OrderModel.countDocuments({
            "request": "-"
        })

        res.send(count.toString())

    } catch (error) {
        console.log(error)
    }
}


const getCount2 = async (req, res) => {
    try {
        const id = req.params.id

        const count = await OrderModel.countDocuments({

            "request": "pending",
            "riders":id,
        })

        res.send(count.toString())

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createOrder,
    getAllOrders,
    updateOrder,
    getMyOrders,
    getOne,
    getCount,
    getCount2
}