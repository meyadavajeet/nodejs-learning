var mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user:"nodeuser",
    password:"nodeuser@1234",
    database:'spring_react_employee_management_system',
    insecureAuth : true

});

con.connect(function(error){
    if(error) throw error;
    con.query("select * from files",function(err,result,fields){
        if(err) throw err;
        console.warn("all result are here , ",result);
        console.warn("first id is here",result[0].id);
    })
})