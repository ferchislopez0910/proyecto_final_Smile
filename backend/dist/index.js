"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

console.log(process.env.PORT);
var port = process.env.PORT || 3001;

_app["default"].listen(port);

console.log("listening on port ".concat(port));