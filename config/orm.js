var connection = require('connection');

var orm = {
selectAll: function(tableInput){
    var queryString = "seelct * from ??";
    connection.query(queryString, [tableInput], function(err,result){
        if(err) throw err;
        console.log(result);
    });
},

};//end orm