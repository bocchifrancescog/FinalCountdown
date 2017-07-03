import React from "react";
import Tappable from 'react-tappable';
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

  render() {
    return (
      <div className="ui container">
        Main Page
        <div className="ui bottom fixed menu large one item">
          <div className="item">
            <div className="ui circular basic blue button">
               <Link to='/addevent'>Add Event!</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default MainPage;
