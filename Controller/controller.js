const dataModel = require('./models/models');

async function readData(req,res){
    try{
        const obj = req.body;
        const results = await dataModel.find(obj);
        if(results.length > 0)
        res.json({"data": results, "msg": "success"});
        else
            res.json({"data": [], "msg": "Trainee not found!"});

    }catch(err){
        res.json({"error": err.message})
    }
}

module.exports = {readData} 