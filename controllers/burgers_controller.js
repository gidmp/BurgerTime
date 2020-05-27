var express = require('express');
var burger = require("../models/burger.js");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
      var hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function(){
        res.status(200).end();
    })
});

router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne(req.params.id, function(result){
        if (result.changedRows === 0) {
            res.status(404).end();
        }
        res.status(200).end();
    })

});


module.exports = router;