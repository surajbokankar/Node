var client = require("./network/client.js");

//var conn=require("./network/dbConnection.js");
var url = "https://stark-spire-93433.herokuapp.com/json"
var responseString;

var dummy="https://jsonplaceholder.typicode.com/posts/1";


var http = require('http');
 
var port = 8080;
 
var s = http.createServer();

var request=client.callAPI(dummy);

console.log(client.methodData.getParticularUser("name",1));



s.on('request', function(request, response) {
    response.writeHead(200);
    console.log(request.method);
    console.log(request.headers);

   //Response.write will write your response to browser and JSON.strinfy will return jsonObject as a string.
    response.write("Response:"+JSON.stringify(responseString));
    
    response.end();
    
});

 s.listen(port);


