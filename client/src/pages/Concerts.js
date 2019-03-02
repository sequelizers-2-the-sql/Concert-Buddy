//below is temp
// eslint-disable-next-line
import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Container";
import { ConcertDetail } from "../components/ConcertDetail/ConcertDetail";
class MyEvents extends Component {
  state = {
    event: {},
    concerts: []
  };

  componentDidMount() {
    API.getConcert(this.props.match.params.id)
      .then(res => {
        this.setState({ event: res.data, concerts: res.data.attendees });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  removeEvent = (userId, eventId) => {
    API.removeEvent(userId, eventId)
    .then(res => {console.log(res);
      window.location.href = "/home/"})
    .catch(err => console.log(err))
  };

  render(props) {
    return (<>
      <Container>
        <Row>
          <Col size="md-12">
            <ConcertDetail event={this.state.event} lat={this.props.lat} lng={this.props.lng} userId={this.props.userId} concert={this.state.concerts} removeEvent={this.removeEvent}/>
          </Col>
        </Row>
      </Container>
    </>
    )
  };
}

export default MyEvents;