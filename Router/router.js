const dataController = require('../Controller/controller');
const router = require('express').Router();

router.get("/readData" , dataController.readData)


module.exports = router;



