"use strict";

var regex = /(\d{4})-(\d{2})-(\d{2})/;
var matchers = regex.exec('2022-01-01');
console.table(matchers);