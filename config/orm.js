var connection = require('../config/connection.js');

var orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  selectAll: (tableInput, cb) => {
    var query = "SELECT * FROM ?? ";
    connection.query(query,[tableInput], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: (tableInput, valueInput, cb) => {
    var query = "INSERT INTO ?? (burger_name) SET ?";
    connection.query(query, [tableInput, valueInput], (err, result) => {
        if (err) throw err;
        cb(result);
      });
  },

  updateOne: (tableInput, id, cb) => {
    var query = "UPDATE burgers SET eaten = true WHERE id = ?";
    connection.query(query, [tableInput,id], (err, result) => {
        if (err) throw err;
        cb(result);
      });
  },
}

module.exports = orm;
