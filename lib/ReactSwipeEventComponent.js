import { Component } from "react";

class ReactSwipeEventComponent extends Component {

  // Implement functions you need in your component
  handleSwipeLeft() {}
  handleSwipeRight() {}
  handleSwipeUp() {}
  handleSwipeDown() {}
  handleWheelLeft() {}
  handleWheelRight() {}
  handleWheelUp() {}
  handleWheelDown() {}

  // Call this function in constructor if you want to customize tolerance
  setTolerance(tolerance) {
    this._tolerance = tolerance;
  }



  // STOP FROM HERE!!!
  constructor(props) {
    super(props);

    this.setTolerance(10);
    this._fnBinding(this, "_handleWheel", "_getPosition", "_handleTouchStart", "_handleTouchMove", "_handleTouchEnd", "handleSwipeLeft", "handleSwipeRight");
    this._setPropertiesForTouchEvents();
  }

  _setPropertiesForTouchEvents() {
    this.touchEventProperties = {
      onTouchStart: this._handleTouchStart,
      onTouchMove: this._handleTouchMove,
      onTouchEnd: this._handleTouchEnd,
      onWheel: this._handleWheel,
    };
  }

  _fnBinding(context, ...fns) {
    fns.forEach((fn) => context[fn] = context[fn].bind(context));
  }

  _getTolerance() {
    return this._tolerance;
  }

  _getPosition(event) {
    if('touches' in event) {
      var _event$touches$ = event.touches[0],
        pageX = _event$touches$.pageX,
        pageY = _event$touches$.pageY;

      return { x: pageX, y: pageY };
    }

    var screenX = event.screenX,
      screenY = event.screenY;

    return { x: screenX, y: screenY };
  }

  _handleTouchStart(event) {
    var _getPosition = this._getPosition(event),
      x = _getPosition.x,
      y = _getPosition.y;

    this.moveStart = { x: x, y: y };
  }

  _handleTouchMove(event) {
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

  _handleTouchEnd(event) {
    var tolerance = this._getTolerance();

    if(this.moving) {
      if(this.movePosition.deltaX < -tolerance) {
        this.handleSwipeLeft(1, event);
      } else if(this.movePosition.deltaX > tolerance) {
        this.handleSwipeRight(1, event);
      }
      if(this.movePosition.deltaY < -tolerance) {
        this.handleSwipeUp(1, event);
      } else if(this.movePosition.deltaY > tolerance) {
        this.handleSwipeDown(1, event);
      }
    }

    this.moveStart = null;
    this.moving = false;
    this.movePosition = null;
  }

  _handleWheel(event) {
    const deltaX = event.deltaX;
    if(deltaX > 0) {
      this.handleWheelLeft(deltaX);
    } else if(deltaX < 0) {
      this.handleWheelRight(deltaX);
    }

    const deltaY = event.deltaY;
    if(deltaY > 0) {
      this.handleWheelUp(deltaY);
    } else if(deltaY < 0) {
      this.handleWheelDown(deltaY);
    }
  }
}

export default ReactSwipeEventComponent;
