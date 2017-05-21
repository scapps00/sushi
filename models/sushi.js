var orm = require("../config/orm.js");

var sushi = {
	selectAll: function(cb) {
		orm.selectAll("sushi", function(res) {
			cb(res);
		});
	},
	insertOne: function(cols, vals, cb) {
		orm.insertOne("sushi", cols, vals, function(res) {
			cb(res);
		});
	},
	updateOne: function(newVal, condition, cb) {
		orm.updateOne("sushi", newVal, condition, function(res) {
			cb(res);
		});
	}
}

module.exports = sushi;