import React from "react";
import ReactSwipeEventComponent from "ReactSwipeEventComponent";

class SwipeEventExample extends ReactSwipeEventComponent {
  constructor(props) {
    super(props);
  
    this.state = {
      text: "Try swiping right/left/up/down",
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

    this.delayTime = 1000;

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

  delayResetText() {
    setTimeout(() => {
      this.setState({
        text: "Try swiping right/left/up/down",
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

export default SwipeEventExample;
