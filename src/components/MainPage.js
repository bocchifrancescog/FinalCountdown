import React from "react"
import Tappable from 'react-tappable'
import { Link } from 'react-router-dom'
import {Client} from './db/Client'
import Footer from './Footer'

class MainPage extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
       client: new Client(),
       events: []
   };

   this.loadEvents();

  };
  loadEvents(){
    const client = this.state.client;
    const tmp_this = this;
    client.getEvents(function(events){
      tmp_this.setState({
        events: events
      });
    });
  };

  render() {
    const events = this.state.events;
    const eventsDiv = events.map((item) => (
        <li key={item.id}>
             {item.when.toString()}, {item.title}
         </li>
     ));

    return (
      <div className="ui container">
        Main Page!!
        {eventsDiv}
        <Footer>
            <div className="ui circular basic blue button">
               <Link to='/addevent' >Add a new Event!</Link>
            </div>
        </Footer>
      </div>
    );
  };
};

export default MainPage;
