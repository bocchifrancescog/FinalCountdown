import './css/index.css';
import "./libs/semantic/dist/semantic.min.css";

import React, { Component } from "react";
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MainPage from  "./components/MainPage";
import AddEvent from './components/AddEvent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {animationName: 'push'};
  }

  render() {
    const { animationName } = this.state;
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage}/>
          <Route path="/addevent" component={AddEvent}/>
        </div>
     </Router>
    );
  };
};
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
