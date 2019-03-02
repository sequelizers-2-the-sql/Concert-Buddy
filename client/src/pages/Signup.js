import React, { Component } from 'react'
//IB axiois is a library for making http requests from React.
import axios from 'axios'
import { Container, Row, Col } from '../components/Container';
import "./Signup.css"
import geo from '../utils/Geolocation'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zip: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	//IB handleChange function sets the state to the text that is typed for username and password.
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()
		geo.geoLocate(this.state.address1, this.state.city, this.state.state)
		.then(res => {
			let lat = res.data.results[0].geometry.location.lat;
			let lng = res.data.results[0].geometry.location.lng;
			axios.post('api/users/signup', {
				username: this.state.username,
				password: this.state.password,
				latitude: lat,
				longitude: lng,
			}).then(response => {
				console.log(response)
				if (!response.data.error) {
					console.log('successful signup');
					window.location.href = "/login"
				} else {
					console.log('Username already taken')
				}
			})
		}).catch(error => {
						console.log('signup error: ')
			 			console.log(error)
	})
}
	



	render() {
		return (
			<Container>
				<Row>
					<Col size="md-1"></Col>
					<Col size="md-4">
						<div className="SignupForm">
							<h1 style={{ fontFamily: "Major Mono Display" }}>Sign Up</h1>
							<form className="form-horizontal">
								<div className="form-group">
									<div className="col-4 col-ml-auto">
										<label className="form-label" htmlFor="username">Username</label>
									</div>
									<div className="col-4 col-mr-auto">
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
								<div className="form-group">
									<div className="col-1 col-ml-auto">
										<label className="form-label" htmlFor="address1">Address: </label>
									</div>
									<div className="col-3 col-mr-auto">
										<input className="form-input"
											placeholder="address1"
											type="address1"
											name="address1"
											value={this.state.address}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-1 col-ml-auto">
										<label className="form-label" htmlFor="address2">Address: </label>
									</div>
									<div className="col-3 col-mr-auto">
										<input className="form-input"
											placeholder="address2"
											type="address2"
											name="address2"
											value={this.state.address}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-1 col-ml-auto">
										<label className="form-label" htmlFor="city">City: </label>
									</div>
									<div className="col-3 col-mr-auto">
										<input className="form-input"
											placeholder="city"
											type="city"
											name="city"
											value={this.state.city}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-1 col-ml-auto">
										<label className="form-label" htmlFor="state">State: </label>
									</div>
									<div className="col-3 col-mr-auto">
										<input className="form-input"
											placeholder="state"
											type="state"
											name="state"
											value={this.state.state}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-1 col-ml-auto">
										<label className="form-label" htmlFor="zip">Zip: </label>
									</div>
									<div className="col-3 col-mr-auto">
										<input className="form-input"
											placeholder="zip"
											type="zip"
											name="zip"
											value={this.state.zip}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="form-group ">
									{/* <div className="col-"></div> */}
									<button
										className="btn btn-primary"
										onClick={this.handleSubmit}
										type="submit"
									>Sign up</button>
								</div>
							</form>
						</div>
					</Col>

					<Col size="md-7">
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

export default Signup
