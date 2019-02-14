//below is temp
// eslint-disable-next-line
import React, { Component } from "react";
import KICK from "../utils/Kick";
import API from "../utils/API";
import { Input, FormBtn } from "../components/SearchForm";
import { List, ListItem } from "../components/EventList";
import RadioButton from "../components/RadioButton";
import { Container, Row, Col } from "../components/Container";
class Events extends Component {
  state = {
    events: [],
    search: "",
    selector: "",
    input:""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search && this.state.selector) {
      if (this.state.selector === "Zip") {
        KICK.concertZip(this.state.search)
          .then(res => {
            let events = res.data.resultsPage.results.event;
            if (events.length > 20) { events.length = 20 };
            console.log(events)
            this.setState({ events: events })
          }
          )
          .catch(err => console.log(err));
      } else if (this.state.selector === "Artist") {
        KICK.concertArtist(this.state.search)
          .then(res => {
            let events = res.data.resultsPage.results.event;
            if (events.length > 20) { events.length = 20 };
            console.log(events)
            this.setState({ events: events })
          })
      }
    }
  };

  attendEvent = show => {
    let concert = show;
    console.log(show);
    API.attendConcert({
      artist: concert.performance[0].artist.displayName,
      venue: concert.venue.displayName,
      date: concert.start.date,
      time: concert.start.time,
      city: concert.venue.metroArea.displayName,
      latitude: concert.venue.lat,
      longitude: concert.venue.lng,
    })
  }

  handleRadioChange = event => {
    this.setState({
      selector: event.target.value
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (<>
      <Container>
        <Row>
          <Col size="md-12">

            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Search"
              />

              <RadioButton
                zip={this.state.selector === "Zip"}
                artist={this.state.selector === "Artist"}
                change={this.handleRadioChange}
              />
              <FormBtn
                disabled={!(this.state.search)}
                onClick={this.handleFormSubmit}
              >
                Search
      </FormBtn>
            </form>
            <List number={this.state.events.length} input={this.state.search}/>

            {this.state.events ?
              
              this.state.events.map((event, i) => {
                return <>

                  <ListItem event={event} clickHandler={this.attendEvent} key={i} />
                </>
              }) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
            </Row>
            </Container>
            </>
          )
    };
  }
  
export default Events;