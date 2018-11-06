var connection = require('./connection');


//helper function to convert object key/value pair to sql
function objToSql(ob){
    var arr = [];
    //loop through keys and push to srting
    for (var key in ob){
        var value = ob[key];
        //check to skip hidden props
        if(Object.hasOwnProperty.call(ob,key)){
            //if string with spaces, add quotations
            if(typeof value === 'string' && value.indexOf(' ')>=0){
                value = "'" + value + "'";       
            }
            arr.push(key+'='+value);
        }
    }
    return arr.toString();
}//end objToSql() sooo smooth
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
    queryString += objToSql(objColVals);
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