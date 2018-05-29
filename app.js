var express               = require("express"),
    mysql                 = require("mysql")
    ;

var app = express();
/* =====  INIT ===== */
  app.set("view engine", "ejs");
  app.use(express.static(__dirname + "/public"));
  app.use('/ViewerJS', express.static(__dirname + '/ViewerJS'));
  app.use('/docs', express.static(__dirname + '/docs'));
/* =====  0_INIT ===== */
