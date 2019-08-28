/* TypeScript file generated by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/js/curry.js');

// tslint:disable-next-line:no-var-requires
const NarsReconcilerBS = require('./NarsReconciler.bs');

import {args as Instance_args} from './Instance.gen';

import {encodedReactElement as Instance_encodedReactElement} from './Instance.gen';

import {expirationTime as ReactReconciler_expirationTime} from '../src/shims/ReactReconciler.shim';

import {reactElement as ReactReconciler_reactElement} from '../src/shims/ReactReconciler.shim';

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class container { protected opaque!: any }; /* simulate opaque types */

export const createContainer: (_1:{ readonly flushUpdates: ((_1:Instance_encodedReactElement[]) => void) }) => container = function (Arg1: any) {
  const result = NarsReconcilerBS.createContainer(Arg1.flushUpdates);
  return result
};

export const updateContainer: (_1:{ readonly element: ReactReconciler_reactElement; readonly container: container }) => ReactReconciler_expirationTime = function (Arg1: any) {
  const result = Curry._2(NarsReconcilerBS.updateContainer, Arg1.element, Arg1.container);
  return result
};

export const unbatchedUpdates: <a>(_1:((_1:void) => a)) => a = NarsReconcilerBS.unbatchedUpdates;

export const invokeCallback: (_1:{
  readonly container: container; 
  readonly messageId: number; 
  readonly args: Instance_args
}) => void = function (Arg1: any) {
  const result = Curry._3(NarsReconcilerBS.invokeCallback, Arg1.container, Arg1.messageId, Arg1.args);
  return result
};
