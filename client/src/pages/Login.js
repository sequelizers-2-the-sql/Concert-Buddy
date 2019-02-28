import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col } from '../components/Container';
import "./Login.css";
import { LoginAlert } from "../components/Alert";

let invalid = false;
class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('api/users/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    window.location.href = "/home"
                }
            }).catch(error => {
                alert('Try a different username and password combo!')
                console.log(error);
                invalid = true;
            })
    }

    render() {


        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            if (invalid) { return <LoginAlert /> } 
            return (
                <Container>
                    <Row>
                        <Col size="md-6">
                            <div className="loginForm">
                                <h1 style={{ fontFamily: "Major Mono Display" }}>Login</h1>
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <div className="col-1 col-ml-auto">
                                            <label className="form-label" htmlFor="username">Username</label>
                                        </div>
                                        <div className="col-3 col-mr-auto">
                                            <input className="form-input"
                                                type="text"
                                                id="username"
                                                name="username"
                                                placeholder="Username"
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-1 col-ml-auto">
                                            <label className="form-label" htmlFor="password">Password: </label>
                                        </div>
                                        <div className="col-3 col-mr-auto">
                                            <input className="form-input"
                                                placeholder="password"
                                                type="password"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group ">
                                        <div className="col-7"></div>
                                        <button
                                            className="btn btn-primary col-mr-auto"

                                            onClick={this.handleSubmit}
                                            type="submit">Login</button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                        <Col size="md-6">
                            <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-interval="10000">
                                        <img src="https://images.unsplash.com/photo-1496185524395-81f295f4859e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="w-100 d-block" alt="..."></img>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h3>"I met my best friend through ConcertBuddy!"</h3>
                                            <p class="font-italic">Ben from Philadelphia</p>
                                        </div>
                                    </div>

                                    <div class="carousel-item" data-interval="10000">
                                        <img src="https://images.unsplash.com/photo-1493308903033-e622ac815e5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1110&q=80" class="w-100 d-block" alt="..."></img>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h3>"I thought I was the only one with weird music taste until ConcertBuddy."</h3>
                                            <p class="font-italic">Anna from Miami</p>
                                        </div>
                                    </div>

                                    <div class="carousel-item" data-interval="10000">
                                        <img style={{ opacity: "0.6" }} src="https://images.unsplash.com/photo-1442975433132-cb9580b88538?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="w-100 d-block" alt="..."></img>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h3>"I didn't know anyone when I moved and went to shows alone. Then I met a whole new group of friends through ConcertBuddy!"</h3>
                                            <p class="font-italic">Amanda from Boston</p>
                                        </div>
                                    </div>

                                    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
};

export default LoginForm;
