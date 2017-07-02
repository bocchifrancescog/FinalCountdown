import './css/index.css';

import React, { Component } from "react";
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {animationName: 'push'};
  }

  render() {
    const { animationName } = this.state;
    return (
      <div>
        Hello!!
      </div>
    );
  };
};
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
