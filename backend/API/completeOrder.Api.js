const express = require('express');
const router = express.Router();
const controller = require('../Controllers/CompleteOrder.Controller');

module.exports=function (){
    router.post('/create',controller.completeOrder)
    router.get('/all-orders/:id',controller.getMyCompletes)
    router.get('/all-orders/',controller.getAllCompletes)

    return router;
}