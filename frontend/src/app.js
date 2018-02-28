var _= require("lodash");
require("./assets/scss/main.scss");

var askAndRemember = require("./assets/js/main");

search.addEventListener("keyup", _.debounce(askAndRemember, 500));