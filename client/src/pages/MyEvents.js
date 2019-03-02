//below is temp
// eslint-disable-next-line
import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Container";
import { UserEvents } from "../components/UserInfo/UserInfo";
class MyEvents extends Component {
  state = {
    user: {},
    concerts: []
  };

  componentDidMount() {
    this.loadEvents()
  }


loadEvents = () => {
    API.getMyEvents(this.props.match.params.id)
      .then(res => {
        this.setState({
          user: res.data,
          concerts: res.data.concerts
        });
        console.log(this.state.user)
        console.log(this.state.concerts)
      })
      .catch(err => console.log(err));

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

removeEvent = (eventId, userId) => {
  API.removeEvent(eventId, userId)
  .then(res => this.loadEvents())
  .catch(err => console.log(err))
};

  render() {
    return (<>
      <Container>
        <Row>
          <Col size="md-12">
            <h2 className="myEvents-headline" style={{ color: "whitesmoke" }}>{this.state.user.username}'s Events</h2>
            {this.state.concerts ?

              this.state.concerts.map((event, i) => {
                return <div key={i}>
                  <UserEvents event={event} lat={this.props.lat} lng={this.props.lng} user={this.state.user._id} removeEvent={this.removeEvent}/>
                  <hr style={{backgroundColor: "whitesmoke"}}></hr>
                </div>
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

export default MyEvents;