//below is temp
// eslint-disable-next-line
import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Container";
class MyEvents extends Component {
  state = {
    event: {},
  };


  componentDidMount() {
    API.getConcert(this.props.match.params.id)
      .then(res => {
        this.setState({ event: res.data });
        console.log(this.state.event.artist)
      })
      .catch(err => console.log(err));
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
            <h1>{this.state.event.artist}</h1>
            <h2>Playing at {this.state.event.venue} at {this.state.event.time}</h2>
            <h1>What page is this in?  pages/Concerts</h1>
            <h1>See who's interested in buddy'ing up with you!
            <a class="nav-link logo-nav" href="/chat">Click to Enter Chatroom</a>
            </h1>
            
            
          </Col>
        </Row>
      </Container>
    </>
    )
  };
}

export default MyEvents;