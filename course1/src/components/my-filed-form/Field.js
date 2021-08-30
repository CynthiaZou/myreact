//# rcc
import React, { Component } from "react";

class Field extends Component {
  getControled = () => {
    return {
      value: "omg",
      onChange: (e) => {
        const newVal = e.target.value;
        console.log("newVal", newVal);
      },
    };
  };

  render() {
    const { children } = this.props;
    // #将普通组件变成受控组件
    const returnChildNode = React.cloneElement(children, this.getControled());
    return returnChildNode;
  }
}

export default Field;
