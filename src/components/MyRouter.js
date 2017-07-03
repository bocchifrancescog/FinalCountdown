import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MainPage from  './MainPage';
import AddEvent from './AddEvent';

class MyRouter extends Component {

  render() {
    return (
           <Router>
               <div>
                <Route exact path="/" component={MainPage}/>
                <Route path="/addevent" component={AddEvent}/>
               </div>
           </Router>
    );
  }
}

export default MyRouter;
