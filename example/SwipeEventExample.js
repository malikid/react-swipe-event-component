import React from "react";
import ReactSwipeEventComponent from "ReactSwipeEventComponent";

class SwipeEventExample extends ReactSwipeEventComponent {
  constructor(props) {
    super(props);
  
    this.state = {
      text: "Try swiping right/left/up/down",
    };

    this.setTolerance(30);
  }

  handleSwipeLeft() {
    this.setState({
      text: "You just swiped left!",
    });
    setTimeout(() => {
      this.resetText();
    }, 2000);
  }

  handleSwipeRight() {
    this.setState({
      text: "You just swiped right!",
    });
    setTimeout(() => {
      this.resetText();
    }, 2000);
  }

  handleSwipeUp() {
    this.setState({
      text: "You just swiped up!",
    });
    setTimeout(() => {
      this.resetText();
    }, 2000);
  }

  handleSwipeDown() {
    this.setState({
      text: "You just swiped down!",
    });
    setTimeout(() => {
      this.resetText();
    }, 2000);
  }

  resetText() {
    this.setState({
      text: "Try swiping right/left/up/down",
    });
  }

  render() {
    return (
      <div
        style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default SwipeEventExample;
