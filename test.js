var mysql = require('mysql')

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'amberapp1'
})

conn.query ('SELECT * FROM amberapp1.students', function (err, results, fields){
    if (err) throw err;
    console.table(results)
})