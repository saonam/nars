jest.mock("react-native", () => ({
  TouchableOpacity: "TouchableOpacity",
  Switch: "Switch",
}));
jest.mock("react-native-reanimated", () => ({}));

import * as React from "react";
import { TouchableOpacity, Switch, clientSide, ClientSideCallback } from "nars";
import { ReactTestInstance, act } from "react-test-renderer";
import { InputProp, localCallback } from "nars-common";
import {
  createRemoteComponent,
  render,
  getChildren,
  testSocket,
  testSocketWithMessageSpy,
  TestSocketLike,
} from "./TestRenderer";

const config = {
  TestComponentSimpleCallback: {
    onPress: localCallback(InputProp.void, InputProp.void),
  },
  TestComponentCallbackWithValues: {
    onPress: localCallback(
      InputProp.boolean,
      InputProp.object({
        a: InputProp.number,
        b: InputProp.number,
      })
    ),
  },
};

const components = {
  TestComponentSimpleCallback: (props: {
    onPress: ClientSideCallback<void, void>;
  }) => {
    return <TouchableOpacity onPress={clientSide(props.onPress, undefined)} />;
  },
  TestComponentCallbackWithValues: (props: {
    onPress: ClientSideCallback<boolean, { a: number; b: number }>;
  }) => {
    return (
      <Switch
        value={false}
        onValueChange={clientSide(props.onPress, { a: 1, b: 2 })}
      />
    );
  },
};

const [
  { TestComponentSimpleCallback, TestComponentCallbackWithValues },
  createServer,
] = createRemoteComponent(config, components);

describe("Callback", () => {
  let sendCounter = 0;
  let counter = 0;
  let socket: TestSocketLike;
  beforeEach(() => {
    sendCounter = 0;
    counter = 0;
    socket = testSocketWithMessageSpy(
      testSocket(),
      _ev => {
        counter += 1;
      },
      _data => {
        sendCounter += 1;
      }
    );
    createServer(socket);
  });
  test("No parameters", () => {
    let called = false;
    const rendered = render(
      <TestComponentSimpleCallback
        webSocket={socket}
        onPress={() => {
          called = true;
        }}
      />
    );
    act(() => {
      (getChildren(rendered)[0] as ReactTestInstance).props.onPress();
    });
    expect(called).toBe(true);
    // Prop change
    expect(sendCounter).toEqual(1);
    expect(counter).toEqual(1);
  });
  test("With two parameters", () => {
    let result: number[] = [];
    let boolResult: boolean = false;
    const rendered = render(
      <TestComponentCallbackWithValues
        webSocket={socket}
        onPress={(bool: boolean, args: { a: number; b: number }) => {
          boolResult = bool;
          result = [args.a, args.b];
        }}
      />
    );
    act(() => {
      (getChildren(rendered)[0] as ReactTestInstance).props.onValueChange(true);
    });
    expect(boolResult).toEqual(true);
    expect(result).toEqual([1, 2]);
    expect(sendCounter).toEqual(1);
    expect(counter).toEqual(1);
  });
});
