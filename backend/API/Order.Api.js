const express = require('express')
const router = express.Router();
const controller = require('../Controllers/Order.Controller.js');

module.exports =function (){
    router.post('/create',controller.createOrder)
    router.get('/getAll',controller.getAllOrders)
    router.put('/update/:id',controller.updateOrder)
    return router;
}