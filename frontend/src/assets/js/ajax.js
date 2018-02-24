module.exports = Req;

var Req = (function() {
  var query = function(url, method, data) {
    return new Promise(function(res, rej) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.addEventListener("progress", function(e) {
          console.log("progress")
      })
      xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          console.log(xhr.getAllResponseHeaders());
          res(data);
        } else {
          var error = new Error(xhr.statusText);
          error.code = xhr.status;
          rej(error);
        }
      });

      xhr.onerror = function() {
        rej(new Error("Network Error"));
      };
      xhr.send(data);
    })
  };

  function Req(url) {
    this.url = url;
  }

  Req.prototype.get = function(method) {
    return query(this.url, method);
  };

  Req.prototype.postJSON = function(method, data) {
    return query(this.url, method, JSON.stringify({
      "key": data
    }));
  };

  Req.prototype.getQuery = function(method, data) {
    return query(this.url, method, data);
  };

    return Req;
}());