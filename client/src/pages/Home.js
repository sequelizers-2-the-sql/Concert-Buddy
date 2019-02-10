//below is temp
// eslint-disable-next-line
import React, { Component } from "react";
import Navigation from "../components/Navigation.js";
import API from "../utils/Kick";
import { Input, FormBtn } from "../components/SearchForm";
import { List, ListItem } from "../components/EventList";

class Events extends Component {
  state = {
    events: [],
    search: ""
  };

handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.search) {
    API.concertZip(this.state.search)
      .then(res => {
        console.log(res);
        let array = res.data.resultsPage.results.event;
        let events = array.splice(30);
        console.log(events)
        this.setState({events: events, search: ""})
      
      }
      )
      .catch(err => console.log(err));
  }
};

attendEvent = event => {
  console.log(this.state.events[event.target.value]);
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