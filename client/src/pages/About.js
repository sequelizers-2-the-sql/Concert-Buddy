//below is temp
// eslint-disable-next-line
import React, { Component } from "react";
import { Container, Row, Col } from "../components/Container";

class About extends Component {
    state = {
        event: {},
        concerts: []
    };



    render() {
        return (<>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h2 className="text-center" style={{ fontFamily: "'Major Mono Display", color: "Whitesmoke" }}>what is ConcertBuddy?</h2>
                        <br></br>
                        <p style={{fontFamily: "Arial"}}>ConcertBuddy is good stuff!</p>

                    </Col>
                </Row>
            </Container>
        </>
        )
    };
}

export default About;