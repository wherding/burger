var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

//create all our routes and set up logic within those routes where required. 

router.get('/', function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});//end get

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log(condition);
    burger.update({
        devoured: req.body.devoured
    },
        condition, function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end;
            }
            else {
                res.status(200).end
            }
        });
})//end put()



//export router
module.exports = router;