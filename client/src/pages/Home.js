//below is temp
// eslint-disable-next-line
import React, { Component } from "react";
import KICK from "../utils/Kick";
import API from "../utils/API";
import { Input, FormBtn } from "../components/SearchForm";
import { List, ListItem } from "../components/EventList";
import RadioButton from "../components/RadioButton";
import { Container, Row, Col } from "../components/Container";
// import { RadioGroup, RadioButton } from 'react-radio-buttons';
class Events extends Component {
  state = {
    events: [],
    search: "",
    selector: "",
    input: "",
    searched: false
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search && this.state.selector) {
      if (this.state.selector === "Zip") {
        KICK.concertZip(this.state.search)
          .then(res => {
            console.log(res)
            let events = res.data.resultsPage.results.event;
            if (events.length > 20) { events.length = 20 };
            this.setState({ events: events, searched: true })
          }
          )
          .catch(err => console.log(err));
      } else if (this.state.selector === "Artist") {
        KICK.concertArtist(this.state.search)
          .then(res => {
            console.log(res)
            let events = res.data.resultsPage.results.event;
            if (events.length > 20) { events.length = 20 };
            this.setState({ events: events })
          })
      }
    }
  };

  attendEvent = show => {
    let userId = this.props.userId
    API.attendConcert({
      userId: userId,
      concertId: show.id,
      artist: show.performance[0].artist.displayName,
      venue: show.venue.displayName,
      date: show.start.date,
      time: show.start.time,
      city: show.venue.metroArea.displayName,
      latitude: show.venue.lat,
      longitude: show.venue.lng,
    })
      .then(res => window.location.href = "/concerts/" + res.data._id)
      .catch(err => console.log(err))
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

    const listDisplay = this.state.events.length > 0 ? <List number={this.state.events.length} input={this.state.search} /> : ''
    return (<>
      <Container>
        <Row>
          <Col size="md-12">
            <h1 className="text-center" style={{ fontFamily: "'Major Mono Display'", color: "whitesmoke" }}>welcome to ConcertBuddy</h1>
            <h5 className="text-center" style={{ fontFamily: "'Major Mono Display'", color: "whitesmoke" }}>find your concert by searching by artist or zip code of the show!</h5>
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

              {/* <RadioGroup onChange={this.handleRadioChange} horizontal>
                <RadioButton value={this.state.selector === "Zip"}>
                  Zip Code </RadioButton>
                <RadioButton value={this.state.selector === "Artist"}>
                  Artist </RadioButton>
              </RadioGroup> */}




              <FormBtn
                disabled={!(this.state.search)}
                onClick={this.handleFormSubmit}
              >
                Search
      </FormBtn>
            </form>
            {/* <List number={this.state.events.length} input={this.state.search} /> */}
            {listDisplay}

            {this.state.events ?

              this.state.events.map((event, i) => {
                return <div key={i}>
                  <ListItem event={event} clickHandler={this.attendEvent} key={event.id} />
                </div>
              }) : !this.state.searched(
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