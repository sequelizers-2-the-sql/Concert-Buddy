import React, { Component } from "react";

export default class SendMessageForm extends Component {
  state = {
    message: "" //the written message on the ui
  };
  // Eventhandler for onChange
  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault(); //prevents the default action of an element
    this.props.sendMessage(this.state.message); //inverse dataflow
    // clears the sent message
    this.setState({
      message: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="send-message-form">
        <input
          disabled={this.props.disabled}
          onChange={this.handleChange} // event setup
          value={this.state.message} //controlling the value of our state programmatically
          placeholder="Type your message"
          type="text"
        />
      </form>
    );
  }
}
