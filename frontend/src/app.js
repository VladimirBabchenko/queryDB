var _= require("lodash");
var askAndRemember = require("./assets/js/main");

search.addEventListener("keyup", _.debounce(askAndRemember, 500));