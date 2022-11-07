"use strict";

var fnAsync = function fnAsync() {
  return new Promise(function (resolve, reject) {
    true ? setTimeout(function () {
      return resolve("async");
    }, 2000) : reject(new Error("error"));
  });
};

var anotherFn = function anotherFn() {
  var something;
  return regeneratorRuntime.async(function anotherFn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fnAsync());

        case 2:
          something = _context.sent;
          console.log(something);
          console.log('hello');

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

console.log('before');
anotherFn();
console.log('after');