import React from "react";

const updatedComponent = OriginalComponent => {
  class NewComponent extends React.Component {
    state = {
      count: 0
    };

    incrementCount = () => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default updatedComponent;
