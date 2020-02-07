/* TypeScript file generated by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/js/curry.js');

// tslint:disable-next-line:no-var-requires
const CallbackBS = require('./Callback.bs');

import {TypeScriptAny as $$any_} from './TsTypes';

import {arg as RpcInterface_arg} from './RpcInterface.gen';

import {t as RpcInterface_t} from './RpcInterface.gen';

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class t<args> { protected opaque!: args }; /* simulate opaque types */

// tslint:disable-next-line:interface-over-type-literal
export type any_ = $$any_;

export const makeRpc: <T1>(_1:((_1:T1) => void)) => t<T1> = CallbackBS.makeRpc;

export const makeClientSide: (_1:string, _2:((_1:RpcInterface_t) => RpcInterface_arg)) => t<any_> = function (Arg1: any, Arg2: any) {
  const result = Curry._2(CallbackBS.makeClientSide, Arg1, function (Arg11: any) {
      const result1 = Arg2({rpcCall:function (Arg12: any, Arg21: any) {
          const result2 = Curry._2(Arg11.rpcCall, Arg12, Arg21);
          return result2
        }, registerCallback:Arg11.registerCallback, executeRpcCall:function (Arg13: any, Arg22: any) {
          const result3 = Curry._2(Arg11.executeRpcCall, Arg13, Arg22);
          return result3
        }, updateAnimatedValue:function (Arg14: any) {
          const result4 = Curry._2(Arg11.updateAnimatedValue, Arg14.value, Arg14.toValue);
          return result4
        }, clear:Arg11.clear});
      return result1
    });
  return result
};
