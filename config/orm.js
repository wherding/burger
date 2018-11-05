var connection = require('./connection');

var orm = {
selectAll: function(tableInput,cb){
    var queryString = "select * from ??";
    connection.query(queryString, [tableInput], function(err,result){
        if(err) throw err;
        console.log(result);
        cb(result);
    });
},
insertOne: function(idk){

},
updateOne: function (tableInput,objColVals, condition, cb){
    //var queryString = 'update ?? set ?? where ??';
    var queryString = "UPDATE " + tableInput;

    queryString += " SET ";
    queryString += objColVals;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(error, result){
        if(error){
            throw error;
        }

        cb(result);
    });
},

};//end orm


module.exports = orm;