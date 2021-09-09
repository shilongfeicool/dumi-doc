// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'Foo-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/shilongfei/Desktop/dumi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _dumiApp = require("dumi-app");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_dumiApp.Foo, {
      title: "First Demo"
    });
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Foo } from 'dumi-app';\n\nexport default () => <Foo title=\"First Demo\" />;"}},"dependencies":{"react":{"version":"16.14.0"},"dumi-app":{}},"componentName":"Foo","identifier":"Foo-demo"},
  },
};
