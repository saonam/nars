// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Schema = require("./protobuf/schema.bs.js");
var JsValue = require("./JsValue.bs.js");
var V1 = require("uuid/v1");
var Mixpanel = require("./Mixpanel.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var NarsReconciler = require("./NarsReconciler.bs.js");
var AnalyticsNode = require("analytics-node");
var Belt_HashMapInt = require("bs-platform/lib/js/belt_HashMapInt.js");
var NodeMachineId = require("node-machine-id");
var Caml_splice_call = require("bs-platform/lib/js/caml_splice_call.js");
var Reader$Ocamlprotocplugin = require("ocaml-protoc-plugin-runtime-bs/src/ocaml_protoc_plugin/reader.bs.js");
var Result$Ocamlprotocplugin = require("ocaml-protoc-plugin-runtime-bs/src/ocaml_protoc_plugin/result.bs.js");
var Writer$Ocamlprotocplugin = require("ocaml-protoc-plugin-runtime-bs/src/ocaml_protoc_plugin/writer.bs.js");

var Socket = { };

var Server = { };

function startListening(server, render) {
  var analytics = new AnalyticsNode("RsD4jSdhauL5xheR1WDxcXApnCGh8Kts");
  var match;
  try {
    match = /* tuple */[
      NodeMachineId.machineIdSync(),
      true
    ];
  }
  catch (exn){
    match = /* tuple */[
      V1(),
      false
    ];
  }
  var id = match[0];
  Mixpanel.identify(analytics, id, {
        idStable: match[1]
      });
  Mixpanel.track(analytics, id, "Server Started");
  return server.on("connection", (function (socket) {
                socket.binaryType = "arraybuffer";
                var containers = Belt_HashMapInt.make(10);
                return socket.on("message", (function ($$event) {
                              var string = Caml_splice_call.spliceApply(String.fromCharCode, [new Uint8Array($$event)]);
                              var reader = Reader$Ocamlprotocplugin.create(undefined, undefined, string);
                              var rad = Curry._1(Schema.ClientToServer.from_proto, reader);
                              if (rad.tag) {
                                console.error(Curry._1(Result$Ocamlprotocplugin.show_error, rad[0]));
                                return /* () */0;
                              } else {
                                var match = rad[0];
                                var value = match.value;
                                var rootId = match.rootId;
                                var match$1 = Belt_HashMapInt.get(containers, rootId);
                                var variant = value[0];
                                if (variant !== 747848894) {
                                  if (variant >= 968744822) {
                                    var match$2 = value[1];
                                    var container;
                                    if (match$1 !== undefined) {
                                      container = Caml_option.valFromOption(match$1);
                                    } else {
                                      var container$1 = NarsReconciler.createContainer((function (reactElements) {
                                              var message = Writer$Ocamlprotocplugin.contents(Curry._1(Schema.ServerToClient.to_proto, {
                                                        rootId: rootId,
                                                        value: /* `Update */[
                                                          999946793,
                                                          $$Array.to_list(reactElements)
                                                        ]
                                                      }));
                                              return socket.send(message);
                                            }));
                                      Belt_HashMapInt.set(containers, rootId, container$1);
                                      container = container$1;
                                    }
                                    var props = Js_option.getWithDefault({ }, Js_option.map(JsValue.structToDict, match$2.props));
                                    NarsReconciler.updateContainer(Curry._1(render, {
                                              name: match$2.name,
                                              localProps: $$Array.of_list(match$2.localProps),
                                              props: props
                                            }), container);
                                    return /* () */0;
                                  } else if (match$1 !== undefined) {
                                    var container$2 = Caml_option.valFromOption(match$1);
                                    Belt_HashMapInt.remove(containers, rootId);
                                    return NarsReconciler.unbatchedUpdates((function (param) {
                                                  NarsReconciler.updateContainer(NarsReconciler.nullElement, container$2);
                                                  return /* () */0;
                                                }));
                                  } else {
                                    return /* () */0;
                                  }
                                } else if (match$1 !== undefined) {
                                  var match$3 = value[1];
                                  return NarsReconciler.invokeCallback(Caml_option.valFromOption(match$1), match$3.messageId, match$3.args);
                                } else {
                                  return /* () */0;
                                }
                              }
                            }));
              }));
}

var $$Uint8Array$1 = 0;

var $$ArrayBuffer = 0;

var NodeBuffer = 0;

var ContainerMap = 0;

exports.$$Uint8Array = $$Uint8Array$1;
exports.$$ArrayBuffer = $$ArrayBuffer;
exports.NodeBuffer = NodeBuffer;
exports.Socket = Socket;
exports.Server = Server;
exports.ContainerMap = ContainerMap;
exports.startListening = startListening;
/* Schema Not a pure module */
