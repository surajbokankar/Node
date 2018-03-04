
var request = require('request');

//var url = "https://stark-spire-93433.herokuapp.com/json"
var responseString;
//exports.api=function(url){
//return url;
//}



//Custom Request Function
exports.callAPI=function(url){
 request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && (response.statusCode === 200&&response.statusCode<300)) {
          //  console.log(body) // Print the json response kxhbxcnxbc
            responseString=body;
            }else{
                var error="Please check internet connection";
                console.log(error)
        }
    });
return request;
}


//Get values of executed request
exports.getValue=function(){
    console.log(responseString);
    return responseString;
}



//GET fuction using object creation. 
var methods = {};

  methods.getListOfUser = function(link){
    var tableName="name";
   // var response=callAPI(link);
    var query="SELECT * FROM "+tableName;
    return query;
}

methods.getParticularUser = function(name,id){

    var tableName="name";
    var query="select * from "+tableName+" where userName="+name+",id="+id;
    return query;
}
exports.methodData = methods;











