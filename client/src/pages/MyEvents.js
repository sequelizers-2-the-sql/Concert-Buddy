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
    API.getMyEvents(this.props.match.params.id)
      .then(res => {
        console.log(res)
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
            
          </Col>
        </Row>
      </Container>
    </>
    )
  };
}

export default MyEvents;