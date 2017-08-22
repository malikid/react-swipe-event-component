import React, { Component } from "react";

class ReactSwipeEventComponent extends Component {

  // Implement functions you need in your component
  handleSwipeLeft() {}
  handleSwipeRight() {}
  handleSwipeUp() {}
  handleSwipeDown() {}

  // Call this function in your constructor if you want to customize tolerance
  setTolerance(tolerance) {
    this._tolerance = tolerance;
  }



  // STOP FROM HERE!!!
  constructor(props) {
    super(props);
  
    this.setTolerance(50);
    this._fnBinding(this, "_getPosition", "handleTouchStart", "handleTouchMove", "handleTouchEnd", "handleSwipeLeft", "handleSwipeRight");
  }

  _fnBinding(context, ...fns) {
    fns.forEach((fn) => context[fn] = context[fn].bind(context));
  }

  _getTolerance() {
    return this._tolerance;
  }

  _getPosition(event) {
    if ('touches' in event) {
      var _event$touches$ = event.touches[0],
          pageX = _event$touches$.pageX,
          pageY = _event$touches$.pageY;

      return { x: pageX, y: pageY };
    }

    var screenX = event.screenX,
        screenY = event.screenY;

    return { x: screenX, y: screenY };
  }

  handleTouchStart(event) {
    var _getPosition = this._getPosition(event),
        x = _getPosition.x,
        y = _getPosition.y;

    this.moveStart = { x: x, y: y };
  }

  handleTouchMove(event) {
    var _getPosition2 = this._getPosition(event),
        x = _getPosition2.x,
        y = _getPosition2.y;

    var deltaX = x - this.moveStart.x;
    var deltaY = y - this.moveStart.y;
    this.moving = true;

    // handling the responsability of cancelling the scroll to
    // the component handling the event
    // var shouldPreventDefault = this.props.onSwipeMove({
    //   x: deltaX,
    //   y: deltaY
    // }, event);

    // if (shouldPreventDefault) {
    //   event.preventDefault();
    // }

    this.movePosition = { deltaX: deltaX, deltaY: deltaY };
  }

  handleTouchEnd(event) {
    var tolerance = this._getTolerance();

    if(this.moving) {
      if(this.movePosition.deltaX < -tolerance) {
        this.handleSwipeRight(1, event);
      } else if(this.movePosition.deltaX > tolerance) {
        this.handleSwipeLeft(1, event);
      }
      if(this.movePosition.deltaY < -tolerance) {
        this.props.onSwipeUp(1, event);
      } else if(this.movePosition.deltaY > tolerance) {
        this.props.onSwipeDown(1, event);
      }
    }

    this.moveStart = null;
    this.moving = false;
    this.movePosition = null;
  }
}

export default ReactSwipeEventComponent;
