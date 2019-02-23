import React, { Component } from 'react'
//IB axiois is a library for making http requests from React.
import axios from 'axios'
import { Container, Row } from '../components/Container';
import "./Signup.css"

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			address: '',
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

		//request to server to add a new username/password
		axios.post('/api/users/signup  ', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.error) {
					console.log('successful signup')
					window.location.href = "/login"
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		return (
			<Container>
				<Row>
					<div className="SignupForm">
						<h4>Sign up</h4>
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
									<label className="form-label" htmlFor="address">Address: </label>
								</div>
								<div className="col-3 col-mr-auto">
									<input className="form-input"
										placeholder="address"
										type="address"
										name="address"
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
				</Row>
			</Container>
		)
	}
}

export default Signup
