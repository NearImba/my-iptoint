'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertIpInto32int = convertIpInto32int;

var _shapeInput = require('./shapeInput');

var _shapeInput2 = _interopRequireDefault(_shapeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertIpInto32int(ip) {
  ip = (0, _shapeInput2.default)(ip);
  if (ip) {
    var r = 0;
    ip.split('.').forEach(function (part, index) {
      if (index > 3) {
        return;
      }
      r = r | (part | 0) << (3 - index) * 8;
    });
    return r >>> 0; // 强制转成无符号整型
  } else {
    console.warn('please provide valid input');
  }
}