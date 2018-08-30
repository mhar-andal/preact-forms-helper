'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidatorMaxLength = function () {
  function ValidatorMaxLength(length) {
    _classCallCheck(this, ValidatorMaxLength);

    this.errorName = 'maxLength';
    this.length = length;
  }

  _createClass(ValidatorMaxLength, [{
    key: 'isValid',
    value: function isValid(value) {
      // No data : validation disable
      if (!value) return true;

      if (Array.isArray(value)) return value.length <= this.length;

      return value.length <= this.length;
    }
  }]);

  return ValidatorMaxLength;
}();

exports.default = ValidatorMaxLength;