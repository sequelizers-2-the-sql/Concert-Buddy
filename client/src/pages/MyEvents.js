//below is temp
// eslint-disable-next-line
import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Container";
import { List, ListItem } from "../components/EventList";
class MyEvents extends Component {
  state = {
    user: {},
    concerts: []
  };

  

  componentDidMount() {
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

  render() {
    return (<>
      <Container>
      {this.state.concerts ?
              
              this.state.concerts.map((event, i) => {
                return <>

                  <ListItem event={event.artist} clickHandler={this.attendEvent} key={i} />
                </>
              }) : (
                <h3>No Results to Display</h3>
              )}
        <Row>
          <Col size="md-12">
            
          </Col>
        </Row>
      </Container>
    </>
    )
  };
}

export default MyEvents;