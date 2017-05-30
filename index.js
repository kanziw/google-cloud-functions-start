'use strict';var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _bluebird = require('bluebird');var _bluebird2 = _interopRequireDefault(_bluebird);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var printConsoleAfter1000ms = function printConsoleAfter1000ms() {return new _bluebird2.default(function (resolve) {
    console.log('+++');
    setTimeout(function () {
      console.log('---');
      resolve();
    }, 1000);
  });};

exports.testfunction = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            console.log('[' + req.method + '] test start!!');_context.next = 3;return (

              printConsoleAfter1000ms());case 3:_context.next = 5;return (
              printConsoleAfter1000ms());case 5:_context.next = 7;return (
              printConsoleAfter1000ms());case 7:

            res.send('Success!');case 8:case 'end':return _context.stop();}}}, _callee, this);}));function testFunction(_x, _x2) {return _ref.apply(this, arguments);}return testFunction;}();


exports.testfunction2 = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res) {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
              printConsoleAfter1000ms());case 2:_context2.next = 4;return (
              printConsoleAfter1000ms());case 4:
            res.send('[test2] Success!!!!!!!!');case 5:case 'end':return _context2.stop();}}}, _callee2, this);}));function testFunction2(_x3, _x4) {return _ref2.apply(this, arguments);}return testFunction2;}();
