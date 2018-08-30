'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
  function Form(formData) {
    var _this = this;

    _classCallCheck(this, Form);

    this.checkFieldExists = function (key) {
      if (_this.validators[key] === undefined) throw new Error('Unknown field: \'' + key + '\'');
      return true;
    };

    this.updateFormStatus = function () {
      _this.valid = Object.keys(_this.errors).length === 0;
    };

    this.hasErrors = function (fieldName) {
      _this.checkFieldExists(fieldName);return _this.errors[fieldName] !== undefined;
    };

    this.getErrors = function (fieldName) {
      _this.checkFieldExists(fieldName);return _this.errors[fieldName] || [];
    };

    this.isTouched = function (fieldName) {
      _this.checkFieldExists(fieldName);return _this.touched[fieldName];
    };

    this.hasError = function (fieldName, errorName) {
      _this.checkFieldExists(fieldName);
      if (!_this.errors[fieldName]) return false;
      return _this.errors[fieldName].indexOf(errorName) !== -1;
    };

    this.isSelected = function (fieldName, value) {
      _this.checkFieldExists(fieldName);
      var savedValue = _this.values[fieldName];
      return Array.isArray(savedValue) ? savedValue.includes(value) : savedValue === value;
    };

    this.getValue = function (fieldName) {
      _this.checkFieldExists(fieldName);
      return _this.values[fieldName];
    };

    this.setValue = function (fieldName, value, component) {
      _this.checkFieldExists(fieldName);
      _this.values[fieldName] = value;
      _this.validateField(fieldName, value, component ? function () {
        return component.forceUpdate();
      } : undefined);
    };

    this.getValues = function () {
      return _this.values;
    };

    this.isValid = function () {
      return _this.valid;
    };

    this.valid = false; // Is the form valid ?
    this.validators = {}; // Validators by field
    this.values = {}; // Form values
    this.errors = {}; // Errors
    this.touched = {}; // Touched fields (all false by default)


    for (var inputName in formData) {
      var inputData = formData[inputName];

      // Values
      if (inputData['value']) this.values[inputName] = inputData['value'];else this.values[inputName] = inputData.multiple ? [] : null;

      // Validators
      this.validators[inputName] = inputData.validators || [];

      // Touched
      this.touched[inputName] = false;

      // Init the current field value
      this.validateField(inputName, this.values[inputName] || '');
    }

    return this;
  }

  _createClass(Form, [{
    key: 'updateValidators',
    value: function updateValidators(newFormValidators) {
      for (var inputName in newFormValidators) {
        this.checkFieldExists(inputName);

        var inputData = newFormValidators[inputName];
        this.validators[inputName] = inputData.validators || [];
        this.validateField(inputName, this.values[inputName] || '');
      }
    }
  }, {
    key: 'saveField',
    value: function saveField(name, value) {
      this.touched[name] = true;

      if (Array.isArray(this.values[name])) {
        if (Array.isArray(value)) {
          // Case 'select.multiple' => we got an array
          this.values[name] = value;
        } else {
          // Checkboxes : we add/remove value one by one
          if (this.values[name].includes(value)) this.values[name] = this.values[name].filter(function (v) {
            return v !== value;
          });else this.values[name].push(value);
        }
      } else if (Array.isArray(value)) {
        // Array values on a non-multiple field => error
        throw new Error('Can\'t set an array value to a non-mulitple field. Please add `multiple:true` for \'' + name + '\' when calling Form constructor');
      } else {
        this.values[name] = value === '' ? null : value;
      }

      // Return the new value
      return this.values[name];
    }
  }, {
    key: 'validateField',
    value: function validateField(name, value, forceUpdateFn) {
      var _this2 = this;

      // Extract validators
      var validators = this.validators[name];
      if (!validators) throw new Error('No entry  \'' + name + '\' in the given form description.');

      // Remove the current errors
      delete this.errors[name];

      validators.forEach(function (v) {
        if (!v.isValid(value)) {
          var errorsArray = _this2.errors[name] || [];
          errorsArray.push(v.errorName);
          _this2.errors[name] = errorsArray;
        }
      });

      this.updateFormStatus();

      // Call forceUpdate()
      if (forceUpdateFn) forceUpdateFn();
    }

    /* Return true if the given field has at least one error */


    /* Return all the errors associated to the given field */


    /* Return if a field has been modified by an user */


    /* Return true if the given field has the given error */

  }]);

  return Form;
}();

exports.default = Form;