System.register(['../constants', '../ui-attribute', 'aurelia-framework'], function (_export) {
    "use strict";

    var constants, UIAttribute, customAttribute, bindable, UIFlagAttribute;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_constants) {
            constants = _constants.constants;
        }, function (_uiAttribute) {
            UIAttribute = _uiAttribute.UIAttribute;
        }, function (_aureliaFramework) {
            customAttribute = _aureliaFramework.customAttribute;
            bindable = _aureliaFramework.bindable;
        }],
        execute: function () {
            UIFlagAttribute = (function (_UIAttribute) {
                var _instanceInitializers = {};

                _inherits(UIFlagAttribute, _UIAttribute);

                function UIFlagAttribute() {
                    _classCallCheck(this, _UIFlagAttribute);

                    _get(Object.getPrototypeOf(_UIFlagAttribute.prototype), 'constructor', this).apply(this, arguments);

                    _defineDecoratedPropertyDescriptor(this, 'country', _instanceInitializers);
                }

                _createDecoratedClass(UIFlagAttribute, [{
                    key: 'bind',
                    value: function bind() {
                        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
                            args[_key2] = arguments[_key2];
                        }

                        _get(Object.getPrototypeOf(_UIFlagAttribute.prototype), 'bind', this).apply(this, args);
                        if (this.country) {
                            var _element$classList;

                            (_element$classList = this.element.classList).add.apply(_element$classList, _toConsumableArray(this.country.split(' ')));
                        }
                    }
                }, {
                    key: 'countryChanged',
                    value: function countryChanged(newValue, oldValue) {
                        if (oldValue) {
                            var _element$classList2;

                            (_element$classList2 = this.element.classList).remove.apply(_element$classList2, _toConsumableArray(oldValue.split(' ')));
                        }
                        if (newValue) {
                            var _element$classList3;

                            (_element$classList3 = this.element.classList).add.apply(_element$classList3, _toConsumableArray(newValue.split(' ')));
                        }
                    }
                }, {
                    key: 'country',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                var _UIFlagAttribute = UIFlagAttribute;
                UIFlagAttribute = customAttribute(constants.attributePrefix + 'flag')(UIFlagAttribute) || UIFlagAttribute;
                return UIFlagAttribute;
            })(UIAttribute);

            _export('UIFlagAttribute', UIFlagAttribute);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWZsYWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdCQUFZLENBQUM7OzJEQVdBLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBTHBCLFNBQVM7O3VDQUNULFdBQVc7O2dEQUNYLGVBQWU7eUNBQUUsUUFBUTs7O0FBR3BCLDJCQUFlOzs7MEJBQWYsZUFBZTs7eUJBQWYsZUFBZTs7Ozs7Ozs7c0NBQWYsZUFBZTs7MkJBS3BCLGdCQUFZOzBEQUFQLElBQUk7QUFBSixnQ0FBSTs7O0FBQ1QsMEdBQWUsSUFBSSxFQUFHO0FBQ3RCLDRCQUFLLElBQUksQ0FBQyxPQUFPLEVBQUc7OztBQUNoQixrREFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxHQUFHLE1BQUEsd0NBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzt5QkFDNUQ7cUJBQ0o7OzsyQkFHYSx3QkFBRSxRQUFRLEVBQUUsUUFBUSxFQUFHO0FBQ2pDLDRCQUFLLFFBQVEsRUFBRzs7O0FBQUUsbURBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsTUFBTSxNQUFBLHlDQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQzt5QkFBRTtBQUMxRSw0QkFBSyxRQUFRLEVBQUc7OztBQUFFLG1EQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLEdBQUcsTUFBQSx5Q0FBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7eUJBQUU7cUJBQzFFOzs7aUNBZEEsUUFBUTs7Ozs7dUNBRkEsZUFBZTtBQUFmLCtCQUFlLEdBRDNCLGVBQWUsQ0FBSyxTQUFTLENBQUMsZUFBZSxVQUFRLENBQ3pDLGVBQWUsS0FBZixlQUFlO3VCQUFmLGVBQWU7ZUFBUyxXQUFXIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWZsYWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEZsYWcgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2ZsYWcuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWZsYWdgIClcbmV4cG9ydCBjbGFzcyBVSUZsYWdBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cbiAgICBAYmluZGFibGUgY291bnRyeTtcblxuXG4gICAgYmluZCggLi4uYXJncyApIHtcbiAgICAgICAgc3VwZXIuYmluZCggLi4uYXJncyApO1xuICAgICAgICBpZiAoIHRoaXMuY291bnRyeSApIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAuLi50aGlzLmNvdW50cnkuc3BsaXQoJyAnKSApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb3VudHJ5Q2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuICAgICAgICBpZiAoIG9sZFZhbHVlICkgeyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5vbGRWYWx1ZS5zcGxpdCgnICcpKTsgfVxuICAgICAgICBpZiAoIG5ld1ZhbHVlICkgeyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5uZXdWYWx1ZS5zcGxpdCgnICcpKTsgfVxuICAgIH1cblxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
