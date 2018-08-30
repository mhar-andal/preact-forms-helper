"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidatorPattern = function () {
  function ValidatorPattern(name, regexPattern) {
    _classCallCheck(this, ValidatorPattern);

    this.errorName = name;
    this.regex = new RegExp(regexPattern);
  }

  _createClass(ValidatorPattern, [{
    key: "isValid",
    value: function isValid(value) {
      // No data : validation disable
      if (!value) return true;

      return this.regex.test(value);
    }
  }]);

  return ValidatorPattern;
}();

exports.default = ValidatorPattern;