//below is temp
// eslint-disable-next-line
import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Container";
<<<<<<< HEAD
import ChatApp from "../components/ChatApp";
import NewRoomForm from "../components/NewRoomForm";

=======
import { ConcertDetail } from "../components/ConcertDetail/ConcertDetail";
>>>>>>> 680e20c8ed17af492f027169c13dc9ff7a6b85ff
class MyEvents extends Component {
  state = {
    event: {},
    concerts: []
  };


  componentDidMount() {
    API.getConcert(this.props.match.params.id)
      .then(res => {
        this.setState({ event: res.data, concerts: res.data.attendees });
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
<<<<<<< HEAD
            <h1>{this.state.event.artist}</h1>
            {/* //2.23.19 IB added event ID for testing creation of chat room */}
            <h2>Event ID: {this.state.event._id}</h2>
            {/* <h2>Display Name: {this.state.event.displayname}</h2> */}

            <h2>Playing at {this.state.event.venue} at {this.state.event.time}</h2>
            <div className="card-body">
                <a href="/chatapp" className="card-link">Find ConcertBuddies</a>
            </div>


=======
            {/* <h1>{this.state.event.artist} at {this.state.event.venue}</h1>
            <h2>Playing at {this.state.event.venue} at {this.state.event.time}</h2>
            <h1>See who's interested in buddy'ing up with you!
            <a class="nav-link logo-nav" href="/chat">Click to Enter Chatroom</a>
            </h1> */}
            <ConcertDetail event={this.state.event} concert={this.state.concerts}/>
            
            
>>>>>>> 680e20c8ed17af492f027169c13dc9ff7a6b85ff
          </Col>
        </Row>
      </Container>
    </>
    )
  };
}

export default MyEvents;