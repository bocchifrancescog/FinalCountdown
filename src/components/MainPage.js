import React from "react";
import Tappable from 'react-tappable';

class MainPage extends React.Component {

  render() {
    return (
      <div className="ui container">
        Main Page
        <div className="ui bottom fixed menu large one item">
          <div className="item">
            <div className="ui circular basic blue button">
              Add event!
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default MainPage;
