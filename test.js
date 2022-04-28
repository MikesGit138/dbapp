const mysql = require('mysql')
const express = require('express')


//create connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'amberapp1'
})

//connect
db.connect((err)=> {
    if (err){
        console.log('connection failed')
    } else {
        console.log('mysql connected...')
    }
})


//use express to route to the students database

const app = express();

app.get('/trainers' , (req, res) => {
    let sql = "SELECT * FROM amberapp1.trainers"
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.table(result);
        res.send(result)
        })
    }); 

//specifying the port 
const port = 5000
app.listen(port, () => {
    console.log(`server started at ${port}`)
})

// db.query ('SELECT * FROM amberapp1.students', function (err, results, fields){
//     if (err) throw err;
//     console.table(results)
// })