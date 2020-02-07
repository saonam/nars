// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function getFieldExn(key, decoder, struct_) {
  return Curry._1(decoder, Js_option.getExn(List.assoc(key, struct_)));
}

function getBool(param) {
  if (typeof param === "number" || param[0] !== 258787964) {
    return Pervasives.invalid_arg("Expected bool value");
  } else {
    return param[1];
  }
}

function getString(param) {
  if (typeof param === "number" || param[0] !== -663343517) {
    return Pervasives.invalid_arg("Expected string value");
  } else {
    return param[1];
  }
}

function getValueField(decoder, args) {
  return getFieldExn("value", decoder, args);
}

exports.getFieldExn = getFieldExn;
exports.getBool = getBool;
exports.getString = getString;
exports.getValueField = getValueField;
/* No side effect */
