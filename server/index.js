const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors());
app.use(express.json());

const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "userlogin",
    password: "will"


})

app.post('/register', (req, res) => {


    const email = req.body.email
    const password = req.body.password

    db.query("insert into user (email,password) values(?,?)", [email, password],
        (err, result) => {
            console.log(err);
        })
})

app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query("select  * from user where email=? and password=?",
        [email, password],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({ message: 'Wrong email or password!' })
            }

        })

})


// app.get('/',(req,res)=>{
//     const sqlInserter= "insert into user   (email,password) values  ('samwilliamj333@gmail.com','0079500')"
//     db.query(sqlInserter,(err,result)=>{
//         res.send("hello all welcome alls ")
//     })

// })

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

});

app.listen(3001, () => {
    console.log("Yea , Running on port 3001");
})
