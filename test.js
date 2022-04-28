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
        throw err;
    } else {
        console.log('mysql connected...')
    }
})

const app = express();

app.get('/students' , (req, res) => {
    conn.query('SELECT * FROM amberapp1.students', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
        })
    }); 

app.listen('3000', () => {
    console.log('server started on porter 3000')
})

// db.query ('SELECT * FROM amberapp1.students', function (err, results, fields){
//     if (err) throw err;
//     console.table(results)
// })