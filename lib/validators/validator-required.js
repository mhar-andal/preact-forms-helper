'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidatorRequired = function () {
  function ValidatorRequired() {
    _classCallCheck(this, ValidatorRequired);

    this.errorName = 'required';
  }

  _createClass(ValidatorRequired, [{
    key: 'isValid',
    value: function isValid(value) {
      if (typeof value === 'number') return value !== '';

      if (Array.isArray(value) && value) return value.length > 0;
      return value ? true : false;
    }
  }]);

  return ValidatorRequired;
}();

exports.default = ValidatorRequired;