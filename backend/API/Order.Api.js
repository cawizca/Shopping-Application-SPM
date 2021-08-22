const express = require('express')
const router = express.Router();
const controller = require('../Controllers/Order.Controller.js');

module.exports =function (){
    router.post('/create',controller.createOrder)
    router.get('/getAll',controller.getAllOrders)
    router.get('/getOne/:id',controller.getMyOrders)
    router.get('/rider/:id',controller.getOne)
    router.put('/update/:id',controller.updateOrder)
    return router;
}