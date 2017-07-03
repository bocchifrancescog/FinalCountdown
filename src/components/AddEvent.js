import React from "react";
import Tappable from 'react-tappable';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class AddEvent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        today: new Date(),
        startDate: new Date(),
      };
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


          </div>
          <div>
          <DatePicker
          />
            </div>
          <button className="ui button" type="submit">Submit</button>
          </form>
      </div>
    );
  };
};

export default AddEvent;
