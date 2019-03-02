import React, { Component } from 'react';
import { Provider, Heading, Subhead } from 'rebass';
import {
    Hero, Flex, CallToAction, ScrollDownIndicator
} from 'react-landing-page';
import "./Landing.css";

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
                    bgOpacity={0.5}
                >
                    <Heading
                        font='Major Mono Display'
                        fontSize={72}
                    >
                        ConcertBuddy

                    </Heading>

                    <Subhead
                        className='subhead'
                        font='Arial'
                        fontSize={20}>Don't ride solo to the show. Find your ConcertBuddy.
                    </Subhead>
                    <Flex mt={2}>
                        <CallToAction className='buttons' href='/signup' font={'Arial'} bg='grey' mr={5} color='white'>sign up</CallToAction>
                        <CallToAction className='buttons' href='/login' font={'Arial'} color='white'>log in</CallToAction>
                        <ScrollDownIndicator style={{fontWeight: "500"}} />

                    </Flex>                    
                </Hero>
                <p className="text-center" style={{fontSize: "4em"}}>What is ConcertBuddy?</p>


                    <br></br>
           
                    <Subhead
                        className='subhead'
                        font='Arial'
                        fontSize={20}>Have you ever heard had to fly solo to the show? You know what we mean. Maybe that experimental noise-rock duo from Brooklyn is on tour, but your friends aren't really up for ... ahem, "trying new things". Or maybe you're new in town. No friends yet, but you're dying to check out that new Electro-House DJ. But go alone? Feels kind of ... lame, right?
                         <br></br>
                        <br></br>
                        Luckily, you've got ConcertBuddy. Just sign up and join the social network for people like you: music-lovers who aren't afraid to check out shows solo, but wouldn't mind hanging with an equally cool aficionado.
                        <br></br>
                        So what are you waiting for? Find your ConcertBuddy.
                        <br></br>
                        <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    </Subhead>
            </Provider>

        )
    };
};

export default Landing;