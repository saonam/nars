// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var JsValue = require("./JsValue.bs.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var AnimatedStyle = require("./AnimatedStyle.bs.js");

function encodeOptional(value, decoder) {
  return Js_option.map(Curry.__1(decoder), value);
}

function encodeCallback(rpcInterface, callback) {
  if (callback.tag) {
    return /* `Local */[
            203307339,
            {
              localKey: callback[0],
              arg: Curry._1(callback[1], rpcInterface)
            }
          ];
  } else {
    return /* `Remote */[
            958205606,
            Curry._1(rpcInterface.registerCallback, callback[0])
          ];
  }
}

function encodeCallbackOptional(rpcInterface, callback) {
  return Js_option.map((function (value) {
                var callback = value;
                return encodeCallback(rpcInterface, callback);
              }), callback);
}

function encodeLocalProp(localKey, propKey) {
  return {
          localKey: localKey,
          propKey: propKey
        };
}

function encodeOptionalLocalProps(dict) {
  if (dict !== undefined) {
    return $$Array.to_list(Js_dict.entries(Caml_option.valFromOption(dict)).filter((function (param) {
                        return Belt_Option.isSome(param[1]);
                      })).map((function (param) {
                      return {
                              localKey: Belt_Option.getExn(param[1]).key,
                              propKey: param[0]
                            };
                    })));
  } else {
    return /* [] */0;
  }
}

function encodeStyleOptional(props) {
  var value = props.style;
  return Js_option.map((function (value) {
                var x = value;
                return JsValue.tToStruct(x);
              }), value);
}

function encodeAnimatedStyleOptional(updater, props) {
  var value = props.style;
  return Js_option.map((function (value) {
                var x = value;
                return AnimatedStyle.tToStruct(props.idGenerator, updater, x);
              }), value);
}

function encodeNullable(value, decoder) {
  return Js_option.map(Curry.__1(decoder), value === null ? undefined : Caml_option.some(value));
}

function encodeString(value) {
  return value;
}

function optionFlatten(param) {
  if (param !== undefined) {
    var match = Caml_option.valFromOption(param);
    if (match !== undefined) {
      return Caml_option.some(Caml_option.valFromOption(match));
    } else {
      return ;
    }
  }
  
}

var opt_map = Js_option.map;

exports.opt_map = opt_map;
exports.encodeOptional = encodeOptional;
exports.encodeCallback = encodeCallback;
exports.encodeCallbackOptional = encodeCallbackOptional;
exports.encodeLocalProp = encodeLocalProp;
exports.encodeOptionalLocalProps = encodeOptionalLocalProps;
exports.encodeStyleOptional = encodeStyleOptional;
exports.encodeAnimatedStyleOptional = encodeAnimatedStyleOptional;
exports.encodeNullable = encodeNullable;
exports.encodeString = encodeString;
exports.optionFlatten = optionFlatten;
/* AnimatedStyle Not a pure module */
