# react-swipe-event-component
Extend this component and swipe events are well-handled.


## Demo
1. Open [demo site](https://malikid.github.io/react-swipe-event-component/example)
2. **Open browser's Developer Tools, and change device to mobile**
3. Play~ play~ play~


## How to run example locally
1. `npm install -g webpack webpack-dev-server`
2. `npm install`
3. `npm start`
4. Open http://localhost:8080 in browser
5. **Open browser's Developer Tools, and change device to mobile**
6. Have fun with it =)


### How to use it in your project
1. `npm install react-swipe-event-component --save`
2. Extend ReactSwipeEventComponent instead of Component (import from React). For example:
```javascript
import React from "react";
import ReactSwipeEventComponent from "react-swipe-event-component";

class SwipeEventExample extends ReactSwipeEventComponent {
  constructor(props) {
    super(props);

    // Set tolerance in constructor if you want to customize it
    this.setTolerance(30);
  }

  // Implement functions you need in your component
  handleSwipeLeft() { /* Do something while swipe left is detected */ }
  handleSwipeRight() { /* Do something while swipe right is detected */ }
  handleSwipeUp() { /* Do something while swipe up is detected */ }
  handleSwipeDown() { /* Do something while swipe down is detected */ }

  // Add {...this.touchEventProperties} to the element which need to detect swipe events
  render() {
    return (
      <div
        {...this.touchEventProperties}
      >
        <p>Add the touchEventProperties to the element which need to detect swipe events</p>
      </div>
    );
  }
}

export default SwipeEventExample;
```


## Others
- Let me know if there's any issue.
- Welcome for submitting PRssss ;)
- Don't hesitate to contribute!


## Changelog

### [0.2.2] - 2017-08-29
#### Added
- Changelog in README.

### [0.2.1] - 2017-08-29
#### Added
- Wheel events.

### [0.1.2] - 2017-08-23
#### Changed
- Fix some inheritance issues.

### [0.1.1] - 2017-08-22
#### Added
- This project.
