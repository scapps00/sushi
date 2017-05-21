var express = require("express");

var router = express.Router();

var sushi = require("../models/sushi.js");

router.get("/", function(req, res) {
	sushi.selectAll(function(data) {
		res.render("index", {sushi: data});
	});
});

router.post("/", function(req, res) {
	sushi.insertOne([
		"sushi_name", "devoured"
	], [
		req.body.sushi_name, false
	], function() {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	var condition = "id =" + req.params.id;
	sushi.updateOne({
		devoured: true
	}, condition, function() {
		res.redirect("/");
	});
});

module.exports = router;