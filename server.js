var express = require("express");
var app = express();
var port = 3000;
var fs = require("fs");
var bodyParser = require("body-parser");
var requestsDB = require("./db/requests.json");


function findCoincidence(data) {
  var reg = new RegExp("^" + data, "i");
  return requestsDB.filter(function (request) {
    return reg.test(request.key);
  })
}

function writeToDB(data) {
  var coincidence = requestsDB.find(function(request) {
    return request.key === data;
  });

  !coincidence && requestsDB.push({
    "key": data
  });
  fs.writeFile("./db/requests.json", JSON.stringify(requestsDB), function(err) {
    if (err) throw err;
    console.log("The file has been saved");
  });
}

app.use("/assets", express.static(__dirname + "/assets"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/search", function (req, res) {
  var searchStr = req.body.key;
  var related = searchStr ? findCoincidence(searchStr) : [];
  searchStr && writeToDB(searchStr);
  res.send(related);
});

app.get("/search", function(req, res) {
    var searchStr = req.query.q;
    console.log(searchStr);
    var related = searchStr ? findCoincidence(searchStr) : [];
    searchStr && writeToDB(searchStr);
    res.send(related);
});

app.listen(port, function () {
  console.log("Server is running");
});