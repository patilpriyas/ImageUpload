
const express = require("express");
const router = express.Router();
const studentController = require('../controllers/studentController')
//const mid = require('../middleware/auth')

//Student API's

router.post("/createStudent",studentController.createStudent)                                     // Create Student
router.get("/getAllStudent",studentController.getAllStudent)                                      // Get All Student



module.exports =  router ;

