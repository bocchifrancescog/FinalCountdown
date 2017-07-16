import React from "react";
import Tappable from 'react-tappable';
import moment from 'moment'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import { Modal, Icon, Grid, Button} from 'semantic-ui-react'


class CalendarModal extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        minDate: new Date(),
        modalOpen: false,
        temporaryDate: new Date(),
        selectedDate:props.selectedDate,
      };

      // This binding is necessary to make `this` work in the callback
      this.open = this.open.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleDateSelected = this.handleDateSelected.bind(this);
    }

    open(e){
      this.setState({
        modalOpen: true,
      });
      console.log("hello");
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
      this.props.setDate(this.state.temporaryDate);
    }


  render() {
    return (
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
              <Button className='ui basic' onClick={this.handleClose}>
                <Icon name='cancel' /> Cancel
              </Button>
              <Button className='ui basic green' onClick={this.handleDateSelected}>
                <Icon name='checkmark' /> OK
              </Button>
            </Modal.Actions>
          </Modal>
    )
  };
};

export default CalendarModal;
