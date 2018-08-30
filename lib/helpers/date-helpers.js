"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toSimpleDate = exports.toSimpleDate = function toSimpleDate() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

  return new Date(date.getFullYear(), date.getMonth(), date.getDate()); // Convert to yyyy-MM-dd
};

var isValidDate = exports.isValidDate = function isValidDate(dateStr) {
  return !isNaN(Date.parse(dateStr));
};

var getToday = exports.getToday = function getToday() {
  return toSimpleDate();
};