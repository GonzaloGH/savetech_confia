var mysql = require('mysql'),
    asyncr = require('async'),
    fs = require('fs')
    path = require('path');

exports.MODE_TEST = '_mode_test_'
exports.MODE_WORK = '_mode_work_'

var database = {
  pool: null,
  mode: null,
}

exports.connect = function(mode, done) {
    if( fs.existsSync(path.resolve(__dirname, "../config/dataBase.json")) )
    {
        var db_info =
            JSON.parse(
                fs.readFileSync(
                    path.resolve(__dirname, "../config/dataBase.json")
                )
            );
        database.pool = mysql.createPool(db_info);
        database.mode = mode;
        done();
    }
    else
        console.log("Unable to find DB configuration file.");
}

/* Return an active connection to the database */
exports.get = function() {
  return database.pool
}

/* Takes a JSON object and loads its data into the database */
exports.loadSamples = function(data) {
  var pool = database.pool
  if (!pool) return done(new Error('Missing database connection.'))

  var names = Object.keys(data.tables)
  asyncr.each(names, function(name, cb) {
    asyncr.each(data.tables[name], function(row, cb) {
      var keys = Object.keys(row)
        , values = keys.map(function(key) { return "'" + row[key] + "'" })

      pool.query('INSERT INTO ' + name + ' (' + keys.join(',') + ') VALUES (' + values.join(',') + ')', cb)
    }, cb)
  }, done)
}

/* Clears the tables data leaving the schemas from all the tables that you want*/
exports.drop = function(tables, done) {
  var pool = database.pool
  if (!pool) return done(new Error('Missing database connection.'))

  asyncr.each(tables, function(name, cb) {
    pool.query('DELETE * FROM ' + name, cb)
  }, done)
}
