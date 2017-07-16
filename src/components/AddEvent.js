import React from "react";
import Tappable from 'react-tappable';
import moment from 'moment'
import { Button, Icon, Grid } from 'semantic-ui-react'
import CalendarModal from './CalendarModal'
import Footer from './Footer'


class AddEvent extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        minDate: new Date(),
        modalOpen: false,
        selectedDate: new Date()
      };
      this.openCalendar = this.openCalendar.bind(this);
      this.setDate = this.setDate.bind(this);
  }


  openCalendar(){
    this.refs.calendar.open()
  }
  setDate(newDate){
    this.setState({
      selectedDate: newDate,
    });
  }

  render() {
    return (
      <div className="ui container">
        <form className="ui form">
          <div className="field">
            <label>Event</label>
            <input type="text" name="titleEvent" placeholder="An amazing event!" />
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
              <Button className="ui circular basic green button">
                  Add Event!
              </Button>
          </Footer>
      </div>
    );
  };
};

export default AddEvent;
