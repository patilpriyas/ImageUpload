
//const studentModel = require("../models/studentModel");
const jwt = require('jsonwebtoken');
const mySqlConnection = require("../dbConnection");


const {
    isValidPhone,
    isValidEmail,
} = require("../utils/validation")


// Student - Create
const createStudent= async function (req, res) {

    try {
        const reqBody = req.body

        console.log(reqBody)
        // Extract Params
        const { phone_number, email } = reqBody

        //Params Validation
        if (!isValidPhone(phone_number)) {
            return res.status(400).send({ status: false, msg: "Please enter valid Phone Number" })
        }

        if (!isValidEmail(email)) {
            return res.status(400).send({ status: false, msg: "Please enter Valid Email" })
        }

        const q =  "INSERT INTO student(`name` ,`phone_number` ,`email`, `country`, `country_code`) VALUES (?)";
        const values = [
            req.body.name,
            req.body.phone_number,
            req.body.email,
            req.body.country,
            req.body.country_code,
        ];

        mySqlConnection.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(201).json({msg: "Student created succesfully", values});

        });
    } catch (err) {
        res.status(500).send({ msg: "server error", error: err.message });
    }
}


// Get All Student
const getAllStudent = async (req, res) => {
    try {
        const reqQuery = req.query;
        const q = "SELECT * FROM student";
        mySqlConnection.query(q, (err, data)=>{
            if(err) return res.json(err)
            return res.status(200).json(data);
        })  


        // const q1 = "SELECT * FROM student";

        // const reqQuery1 = req.query;
        // let fetch = {
        //     method: 'get',
        //     url: `https://restcountries.eu/rest/v2/callingcode/91`
        // }
        // let result = await axios(fetch)
        // res.status(200).send({msg: result.data})

        } catch (error){
         res.status(500).send({status:false  , msg:error.msg})
        }
    }

module.exports.createStudent = createStudent
module.exports.getAllStudent = getAllStudent

