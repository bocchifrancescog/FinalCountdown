import React from "react"
import Tappable from 'react-tappable'
import { Link } from 'react-router-dom'
import Footer from './Footer'

class MainPage extends React.Component {

  render() {
    return (
      <div className="ui container">
        Main Page!!
        <Footer>
            <div className="ui circular basic blue button">
               <Link to='/addevent'>Add a new Event!</Link>
            </div>
        </Footer>
      </div>
    );
  };
};

export default MainPage;
