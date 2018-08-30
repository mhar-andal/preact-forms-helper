"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validatorRequired = require("./validator-required");

var _validatorRequired2 = _interopRequireDefault(_validatorRequired);

var _validatorBetween = require("./validator-between");

var _validatorBetween2 = _interopRequireDefault(_validatorBetween);

var _validatorPattern = require("./validator-pattern");

var _validatorPattern2 = _interopRequireDefault(_validatorPattern);

var _validatorMinInteger = require("./validator-min-integer");

var _validatorMinInteger2 = _interopRequireDefault(_validatorMinInteger);

var _validatorMaxInteger = require("./validator-max-integer");

var _validatorMaxInteger2 = _interopRequireDefault(_validatorMaxInteger);

var _validatorMinLength = require("./validator-min-length");

var _validatorMinLength2 = _interopRequireDefault(_validatorMinLength);

var _validatorMaxLength = require("./validator-max-length");

var _validatorMaxLength2 = _interopRequireDefault(_validatorMaxLength);

var _validatorDateBefore = require("./validator-date-before");

var _validatorDateBefore2 = _interopRequireDefault(_validatorDateBefore);

var _validatorDateAfter = require("./validator-date-after");

var _validatorDateAfter2 = _interopRequireDefault(_validatorDateAfter);

var _dateHelpers = require("../helpers/date-helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validators = function Validators() {
  _classCallCheck(this, Validators);
};

Validators.minInteger = function (number) {
  return new _validatorMinInteger2.default(number);
};

Validators.maxInteger = function (number) {
  return new _validatorMaxInteger2.default(number);
};

Validators.between = function (min, max) {
  return new _validatorBetween2.default(min, max);
};

Validators.minLength = function (length) {
  return new _validatorMinLength2.default(length);
};

Validators.maxLength = function (length) {
  return new _validatorMaxLength2.default(length);
};

Validators.required = function () {
  return new _validatorRequired2.default();
};

Validators.pattern = function (pattern) {
  return new _validatorPattern2.default('pattern', pattern);
};

Validators.email = function () {
  return new _validatorPattern2.default('email', /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z0-9\.-]+)\.([a-z\.]{2,6})$/);
};

Validators.url = function () {
  return new _validatorPattern2.default('url', /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
};

Validators.alpha = function () {
  return new _validatorPattern2.default('alpha', /^[a-zA-Z]*$/);
};

Validators.alphaDash = function () {
  return new _validatorPattern2.default('alphaDash', /^[a-zA-Z_]*$/);
};

Validators.numeric = function () {
  return new _validatorPattern2.default('numeric', /^[0-9]*$/);
};

Validators.dateBefore = function (date) {
  return new _validatorDateBefore2.default('dateBefore', date);
};

Validators.dateAfter = function (date) {
  return new _validatorDateAfter2.default('dateAfter', date);
};

Validators.dateBeforeToday = function () {
  return new _validatorDateBefore2.default('dateBeforeToday', (0, _dateHelpers.getToday)());
};

Validators.dateAfterToday = function () {
  return new _validatorDateAfter2.default('dateAfterToday', (0, _dateHelpers.getToday)());
};

exports.default = Validators;