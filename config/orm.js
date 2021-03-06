var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		connection.query(queryString, vals, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(table, newVal, condition, cb) {
		var queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += Object.keys(newVal) + " = " + newVal[Object.keys(newVal)];
		queryString += " WHERE ";
		queryString += condition;

		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	} 
}

module.exports = orm;