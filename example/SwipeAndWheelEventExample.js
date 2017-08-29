import React from "react";
import ReactSwipeAndWheelEventComponent from "ReactSwipeEventComponent";

class SwipeAndWheelEventExample extends ReactSwipeAndWheelEventComponent {
  constructor(props) {
    super(props);

    this.defaultText = "Try swiping/wheeling right/left/up/down";
    this.delayTime = 1000;

    this.state = {
      text: this.defaultText,
    };

    this.divStyle = {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    this.pStyle = {
      fontSize: "50px",
    };

    this.setTolerance(30);
  }

  handleSwipeLeft() {
    this.setState({
      text: "You just swiped left!",
    });
    this.delayResetText();
  }

  handleSwipeRight() {
    this.setState({
      text: "You just swiped right!",
    });
    this.delayResetText();
  }

  handleSwipeUp() {
    this.setState({
      text: "You just swiped up!",
    });
    this.delayResetText();
  }

  handleSwipeDown() {
    this.setState({
      text: "You just swiped down!",
    });
    this.delayResetText();
  }

  handleWheelLeft() {
    this.setState({
      text: "You just wheel left!"
    });
    this.delayResetText();
  }

  handleWheelRight() {
    this.setState({
      text: "You just wheel right!"
    });
    this.delayResetText();
  }

  handleWheelUp() {
    this.setState({
      text: "You just wheel up!"
    });
    this.delayResetText();
  }

  handleWheelDown() {
    this.setState({
      text: "You just wheel down!"
    });
    this.delayResetText();
  }

  delayResetText() {
    setTimeout(() => {
      this.setState({
        text: this.defaultText,
      });
    }, this.delayTime);
  }

  render() {
    return (
      <div
        style={this.divStyle}
        {...this.touchEventProperties}
      >
        <p style={this.pStyle}>{this.state.text}</p>
      </div>
    );
  }
}

export default SwipeAndWheelEventExample;
