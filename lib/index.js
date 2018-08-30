'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('./form');

Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_form).default;
  }
});

var _validators = require('./validators');

Object.defineProperty(exports, 'Validators', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_validators).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateField = exports.validateField = function validateField(component, form, fieldName) {
  return function (event) {
    // Name
    fieldName = fieldName || event.target.name;
    form.checkFieldExists(fieldName);

    // Type
    var fieldType = event.target.tagName === 'SELECT' ? event.target.multiple ? 'select.multiple' : 'select' : undefined;
    if (!fieldType) fieldType = event.target.type || 'text';

    // Value
    var value = event.target.value;
    if ((fieldType === 'number' || fieldType === 'range') && value !== '' && +value !== 'NaN') value = +value; // Convert as an integer if needed
    else if (fieldType === 'select.multiple') value = Array.from(event.target.selectedOptions).map(function (opt) {
        return opt.value;
      }); // As array if multiple values

    var newValue = form.saveField(fieldName, value);
    // Check and forceUpdate
    form.validateField(fieldName, newValue, function () {
      return component.forceUpdate();
    });
  };
};