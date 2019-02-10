//below is temp
// eslint-disable-next-line
import React, { Component } from "react";
import Navigation from "../components/Navigation.js";
import KICK from "../utils/Kick";
import API from "../utils/API";
import { Input, FormBtn } from "../components/SearchForm";
import { List, ListItem } from "../components/EventList";
import RadioButton from "../components/RadioButton";

class Events extends Component {
  state = {
    events: [],
    search: "",
    selector: ""
  };

handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.search && this.state.selector) {
    if (this.state.selector === "Zip") {
    KICK.concertZip(this.state.search)
      .then(res => {
        let events = res.data.resultsPage.results.event;
        if (events.length > 20) {events.length = 20};
        console.log(events)
        this.setState({events: events, search: ""})
      }
      )
      .catch(err => console.log(err));
    } else if (this.state.selector === "Artist") {
      KICK.concertArtist(this.state.search)
        .then(res => {
          let events = res.data.resultsPage.results.event;
          if (events.length > 20) {events.length = 20};
          console.log(events)
          this.setState({events: events, search: ""})
        })
    }
  }
};

attendEvent = event => {
  event.preventDefault();
  console.log(this.state.events[event.target.value]);
  let concert = this.state.events[event.target.value];
  console.log(concert.start.time);
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
    {this.state.events ? 
                this.state.events.map((event, i) => {
                  return <button
                    key={i}
                    value={i}
                    onClick={this.attendEvent}
                    >{event.displayName}</button>
                 }) : (
              <h3>No Results to Display</h3>
            )}
  </>
  )
};
}

export default Events;