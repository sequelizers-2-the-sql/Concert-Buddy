import React, {Component} from 'react';
import { Provider, Heading, Subhead } from 'rebass';
import {
  Hero, CallToAction, ScrollDownIndicator
} from 'react-landing-page';

class Landing extends Component {
    state = {
      events: [],
      search: "",
      selector: "",
      input:""
    };

    render(){
        return(
            <>
             <Provider>
    <Hero
      color="black"
      bg="white"
      backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
    >
        <Heading>ConcertBuddy</Heading>
        <Subhead>Find your new ConcertBuddy</Subhead>
        <CallToAction href="/getting-started" mt={3}>Get Started</CallToAction>
        <ScrollDownIndicator/>
    </Hero>
  </Provider>
            </>
        )
    };
};

export default Landing;