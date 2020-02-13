import React, { Component } from "react";
import updatedComponent from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;

    return (
      <div>
        <h2 onMouseMove={incrementCount}>Hovered {count} times</h2>
      </div>
    );
  }
}

export default updatedComponent(HoverCounter);
