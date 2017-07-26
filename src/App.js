
import React from "react";
import CSSTransitionGroup from 'react-addons-css-transition-group';
import MyRouter from  "./components/MyRouter";
import './css/index.css';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {animationName: 'push'};
    var db = null;


  }

  render() {
    const { animationName } = this.state;
    return (
      <div className="MyApp">
           <MyRouter />
      </div>
    );
  };
};
export default App;
