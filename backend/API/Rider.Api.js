const express = require('express')
const router = express.Router();
const controller = require('../Controllers/Rider.Controller')

module.exports = function (){
    router.post('/create' , controller.createRider)

    return router;
}