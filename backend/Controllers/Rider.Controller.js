const RiderModel = require('../models/Rider.model')

const createRider = async(req,res)=>{
    if(req.body){
        const riderData = new RiderModel(req.body)
        await riderData.save()
            .then(data=>{
                    res.status(200).send({data:data});
            })
            .catch(error=>{
                res.status(500).send({error: error.message})
            })
    }else{
      
        res.send("no data")
    }
}

module.exports={
    createRider
}