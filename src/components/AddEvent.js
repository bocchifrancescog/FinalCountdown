import React from "react";
import Tappable from 'react-tappable';
import moment from 'moment'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import { Button, Modal, Icon, Grid } from 'semantic-ui-react'

class AddEvent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        minDate: new Date(),
        modalOpen: false,
        temporaryDate: new Date(),
        selectedDate: new Date(),
      };

      // This binding is necessary to make `this` work in the callback
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleDateSelected = this.handleDateSelected.bind(this);

    }

    handleOpen(e){
      this.setState({
        modalOpen: true,
      });
    }

    handleClose(e) {
      this.setState({
        modalOpen: false,
      })
    }

    handleDateChange(date){
      this.setState({
          temporaryDate: date,
      });
    }

    handleDateSelected(e){
      this.handleClose();
      this.setState({
          selectedDate: this.state.temporaryDate,
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
                 onClick={this.handleOpen}/>


          </div>


          <button className="ui button" type="submit">Submit</button>
          </form>

          <Modal
              open={this.state.modalOpen}
              onClose={this.handleClose}
                >

                <Modal.Content className="ui center aligned container">
                  <Grid centered textAlign='center' columns={1}>
                    <Grid.Column>
                    <InfiniteCalendar
                        min={this.state.minDate}
                        minDate={this.state.minDate}
                        onSelect={this.handleDateChange}
                        width={"100%"}
                        height={window.innerHeight*0.5}
                        displayOptions={{
                          showHeader: true
                        }}
                    />
                    </Grid.Column>
                  </Grid>

                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={this.handleClose}>
                    <Icon name='cancel' /> Cancel
                  </Button>
                  <Button color='green' onClick={this.handleDateSelected} inverted>
                    <Icon name='checkmark' /> OK
                  </Button>
                </Modal.Actions>
              </Modal>


      </div>
    );
  };
};

export default AddEvent;
