'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dateHelpers = require('../helpers/date-helpers');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidatorDateAfter = function () {
  function ValidatorDateAfter(name, date) {
    _classCallCheck(this, ValidatorDateAfter);

    this.errorName = name;

    if (!(0, _dateHelpers.isValidDate)(date)) throw new Error(date + ' is an invalid date. Make sure to respect the \'yyyy-MM-dd\' format');

    this.date = date instanceof Date ? date : (0, _dateHelpers.toSimpleDate)(new Date(date));
  }

  _createClass(ValidatorDateAfter, [{
    key: 'isValid',
    value: function isValid(value) {
      // No data : validation disable
      if (!value) return true;

      var date = new Date(value);
      return (0, _dateHelpers.toSimpleDate)(date) > this.date;
    }
  }]);

  return ValidatorDateAfter;
}();

exports.default = ValidatorDateAfter;