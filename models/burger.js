var orm = require('../config/orm');
var burger = {
    all: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res)
        });
    },
    update: function(objColVals,condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
          });
    }
};

module.exports = burger;