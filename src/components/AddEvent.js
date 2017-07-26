import React from "react";
import Tappable from 'react-tappable';
import moment from 'moment'
import { Button, Icon, Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import CalendarModal from './CalendarModal'
import {Client} from './db/Client'
import Footer from './Footer'


class AddEvent extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        minDate: new Date(),
        modalOpen: false,
        title:"",
        selectedDate: new Date()

      };
      this.openCalendar = this.openCalendar.bind(this);
      this.setDate = this.setDate.bind(this);
      this.addEventClick = this.addEventClick.bind(this);
      this.setTitle = this.setTitle.bind(this);
  }


  openCalendar(){
    this.refs.calendar.open()
  }
  setTitle(event){
    this.setState({title: event.target.value});
  }
  setDate(newDate){
    this.setState({
      selectedDate: newDate,
    });
  }
  addEventClick(event){

    var client = new Client();
    var tmpThis = this;
    client.addEvent({
      'title': this.state.title,
      'when': this.state.selectedDate,
      'color': 'blue'
    },function(){
      // on success callback
    //    window.history.pushState( {} , 'Home', '/' );
    // THIS DOES NOT WORK. STILL NEED TO FIND A SOLUTION!!
      tmpThis.context.router.history.push("/");
      //tmpThis.context.router.transitionTo("/");
    });
    // Todo check the outcome

  }

  render() {
    return (
      <div className="ui container">
        <form className="ui form">
          <div className="field">
            <label>Event</label>
            <input type="text" name="titleEvent" placeholder="An amazing event!"
              value={this.state.value} onChange={this.setTitle}/>
          </div>
          <div className="field">
            <label>When</label>
            <input type="text" name="dateEvent" placeholder="when" readOnly
                 value={moment(this.state.selectedDate).format('LL')}
                 onClick={this.openCalendar}/>
            <CalendarModal ref="calendar" setDate={this.setDate}/>
          </div>

          </form>
          <Footer>

              <Button className="ui circular basic green button"
                onClick={this.addEventClick}>
                  Add Event!
              </Button>

          </Footer>
      </div>
    );
  };
};

export default AddEvent;
