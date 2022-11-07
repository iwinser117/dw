"use strict";

var anotherFunction = function anotherFunction() {
  return new Promise(function (resolve, reject) {
    if (false) {
      resolve('heyyyy');
    } else {
      reject('wooops');
    }
  });
};

anotherFunction().then(function (response) {
  return console.log(response);
})["catch"](function (err) {
  return console.error(err);
})["finally"](function () {
  return console.log('fianll');
});