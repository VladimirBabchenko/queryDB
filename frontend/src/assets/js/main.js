// var s = new Req("http://localhost:3000/search?q=");

var Req = require("./ajax");
module.exports = askAndRemember;
function askAndRemember() {
    coincidenceBlock.innerHTML = "";
    // if (this.value) {
    //   s.postJSON("POST", this.value)
    //     .then(function (requests) {
    //       console.log(requests);
    //       requests.forEach(function(request) {
    //         var li = document.createElement("li");
    //         li.innerHTML = request.key;
    //         coincidenceBlock.appendChild(li);
    //       })
    //     })
    // }

    if (this.value) {
        coincidenceBlock.innerHTML = "";
        new Req("http://localhost:3000/search?q=" + this.value).getQuery("GET")
            .then(function (data) {
                console.log(data);
                data.forEach(function (response) {
                    var li = document.createElement("li");
                    li.innerHTML = response.key;
                    coincidenceBlock.appendChild(li);
                })
            })

    }
};
