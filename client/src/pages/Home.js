//below is temp
// eslint-disable-next-line
import React, { Component } from "react";
import Navigation from "../components/Navigation.js";
import API from "../utils/Kick";
import { Input, FormBtn } from "../components/SearchForm";

class Events extends Component {
  state = {
    events: [],
    search: ""
  };

handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.search) {
    API.concertZip(this.state.search)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
};


handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

render() {
  return (<>
    <Navigation />
    <h1>Hello.  Welcome to Concert Buddy</h1>
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
  </>
  )
};
}

export default Events;