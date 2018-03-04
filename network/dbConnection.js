var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "suraj",
  password: "suraj",
  database: 'Demo'

});

con.connect(function(err) {
  if (err){
      console.log("Error:="+err);
  }else{
    console.log("Connected!");

  }
});