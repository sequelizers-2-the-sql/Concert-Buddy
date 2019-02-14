//below is temp
// eslint-disable-next-line
import React, { Component } from "react";
import KICK from "../utils/Kick";
import API from "../utils/API";
import { Input, FormBtn } from "../components/SearchForm";
import { List, ListItem } from "../components/EventList";
import RadioButton from "../components/RadioButton";
import { Container, Row, Col } from "../components/Container";
class MyEvents extends Component {
  state = {
    event: {},
  };

  
  componentDidMount() {
    API.getConcert(this.props.match.params.id)
      .then(res => {this.setState({ event: res.data });
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
            </Col>
            </Row>
            </Container>
            </>
          )
    };
  }
  
export default MyEvents;