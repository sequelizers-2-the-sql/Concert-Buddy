import React, { Component } from 'react';
import { Provider, Heading, Subhead, NavLink, Small } from 'rebass';
import {
    Hero, Flex, CallToAction, ScrollDownIndicator
} from 'react-landing-page';

class Landing extends Component {
    state = {
        events: [],
        search: "",
        selector: "",
        input: ""
    };

    render() {
        return (

            <Provider
                theme={{
                    fonts: {
                        sans: '"Major Mono Display", Arial, sans-serif',
                    },
                    fontSizes: [
                        12,
                        14,
                        16,
                        20,
                        24,
                        32,
                        48,
                        64,
                        72,
                        96],
                    breakpoints: [
                        32,
                        48,
                        64,
                        80
                    ],
                    space: [
                        0,
                        4,
                        8,
                        16,
                        32,
                        64,
                        128
                    ]

                }}>
                <Hero
                    color='white'
                    backgroundImage="./photos/edwin-pic.jpg"
                    bg='black'
                    bgOpacity={0.2}
                >
                    <Heading
                        font='Major Mono Display'
                        fontSize={72}
                    >
                        ConcertBuddy

                    </Heading>

                    <Subhead
                        font='Arial'
                        fontSize={24}>don't ride solo to the show!
                    </Subhead>
                    <Flex mt={3}>
                        <CallToAction href='/signup' font={'Arial'} bg='grey' mr={5} color='white'>SIGN UP</CallToAction>
                        <CallToAction href='/login' font={'Arial'} color='white'>LOG IN</CallToAction>
                    </Flex>
                    <ScrollDownIndicator />
                </Hero>
            </Provider>

        )
    };
};

export default Landing;