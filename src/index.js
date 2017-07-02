import './css/index.css';
import "./libs/semantic/dist/semantic.min.css";


import React, { Component } from "react";
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import MainPage from  "./components/MainPage";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {animationName: 'push'};
  }

  render() {
    const { animationName } = this.state;
    return (
      <MainPage />
    );
  };
};
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
