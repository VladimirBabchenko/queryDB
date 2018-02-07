var s = new Req("http://localhost:3000/search");
var askAndRemember = function () {
  coincidenceBlock.innerHTML = "";
  if (this.value) {
    s.postJSON("POST", this.value)
      .then(function (requests) {
        console.log(requests);
        requests.forEach(function(request) {
          var li = document.createElement("li");
          li.innerHTML = request.key;
          coincidenceBlock.appendChild(li);
        })
      })
  }
};

search.addEventListener("keyup", _.debounce(askAndRemember, 500));