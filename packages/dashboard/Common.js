import React from "react";
import { spawn } from "child_process";
import stylesheet from "./stylesheet";

export default class Common extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logs: [],
    };
  }

  componentDidMount() {
    const subprocess = spawn("yarn", ["build-common"], {
      stdio: ["pipe", "pipe", "pipe"],
    });

    subprocess.stdout.on("data", data => {
      this.setState(state => ({
        logs: [data.toString("utf-8"), ...state.logs],
      }));
    });
  }

  render() {
    const { width, height, top, right, left } = this.props;

    return (
      <box
        label="Common"
        class={stylesheet.bordered}
        top={top}
        right={right}
        left={left}
        width={width}
        height={height}
        draggable={true}
      >
        <list items={this.state.logs} />
      </box>
    );
  }
}
