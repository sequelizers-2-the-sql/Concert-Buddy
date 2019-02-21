import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Container";

class Inbox extends Component {
    state = {
        events: [],
        search: "",
        selector: "",
        input: ""
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.search && this.state.selector) {
            if (this.state.selector === "Zip") {
                KICK.concertZip(this.state.search)
                    .then(res => {
                        let events = res.data.resultsPage.results.event;
                        if (events.length > 20) { events.length = 20 };
                        console.log(events)
                        this.setState({ events: events })
                    }
                    )
                    .catch(err => console.log(err));
            } else if (this.state.selector === "Artist") {
                KICK.concertArtist(this.state.search)
                    .then(res => {
                        let events = res.data.resultsPage.results.event;
                        if (events.length > 20) { events.length = 20 };
                        console.log(events)
                        this.setState({ events: events })
                    })
            }
        }
    };

    attendEvent = show => {
        let concert = show;
        console.log(show);
        API.attendConcert({
            artist: concert.performance[0].artist.displayName,
            venue: concert.venue.displayName,
            date: concert.start.date,
            time: concert.start.time,
            city: concert.venue.metroArea.displayName,
            latitude: concert.venue.lat,
            longitude: concert.venue.lng,
        })
            .then(res => window.location.href = "/concerts/" + res.data._id)
            .catch(err => console.log(err))
    }

    handleRadioChange = event => {
        this.setState({
            selector: event.target.value
        });
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

                    </Col>
                </Row>
            </Container>
        </>
        )
    };
}

export default Inbox;