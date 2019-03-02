import React, { Component } from "react";
//IB axiois is a library for making http requests from React.
import axios from "axios";
import { Container, Row, Col } from "../components/Container";
import "./Signup.css";
import geo from "../utils/Geolocation";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        username: "",
        password: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        confirmPassword: ""
      },
      errors: {},
      disabled: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //IB handleChange function sets the state to the text that is typed for username and password.
  handleChange = (field, e) => {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  };

  handleSubmit(event) {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.fields["username"]);
    event.preventDefault();
    if (this.handleValidation()) {
      geo
        .geoLocate(
          this.state.fields["address1"],
          this.state.fields["city"],
          this.state.fields["state"]
        )
        .then(res => {
          let lat = res.data.results[0].geometry.location.lat;
          let lng = res.data.results[0].geometry.location.lng;
          axios
            .post("api/users/signup", {
              username: this.state.fields["username"],
              password: this.state.fields["password"],
              latitude: lat,
              longitude: lng
            })
            .then(response => {
              console.log(response);
              if (!response.data.error) {
                console.log("successful signup");
                window.location.href = "/login";
              } else {
                console.log("Username already taken");
              }
            });
        })
        .catch(error => {
          console.log("signup error: ");
          console.log(error);
        });
    } else {
      console.log("validation failed");
    }
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Username field cannot be empty";
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Password field cannot be empty";
    }

    if (!fields["address1"]) {
      formIsValid = false;
      errors["address1"] = "Address field cannot be empty";
    }

    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "City field cannot be empty";
    }

    if (!fields["state"]) {
      formIsValid = false;
      errors["state"] = "State field cannot be empty";
    }

    if (!fields["zip"]) {
      formIsValid = false;
      errors["zip"] = "Zip field cannot be empty";
    }

    if (fields["state"].length > 2) {
      formIsValid = false;
      errors["state"] = "Please enter 2 letter abbreviation";
    }

	if (typeof fields["state"] !== "undefined" && !fields["state"] === false) {
    if (!fields["state"].match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors["state"] = "Only letters";
	}
}

	if (typeof fields["zip"] !== "undefined" && !fields["zip"] === false) {
		if (!fields["zip"].match(/^[0-9]+$/)) {
			formIsValid = false;
			errors["zip"] = "Only numbers"
		}
	}

    this.setState({ errors: errors });
    return formIsValid;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size ="md-1"></Col>
          <Col size="md-4">
            <div className="SignupForm">
              <h1 style={{ fontFamily: "Major Mono Display" }}>Sign Up</h1>
              <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div>
                  <div className="row" htmlFor="username">
                    Username:
                  </div>
                  <div className="row">
                    <input
                      type="text"
                      placeholder="Enter Username"
                      refs="username"
                      onChange={this.handleChange.bind(this, "username")}
                      value={this.state.fields["username"]}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["username"]}
                    </span>
                  </div>
                </div>

                <div className="row" htmlFor="password">Password:</div>
                  <div className="row">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      refs="password"
                      onChange={this.handleChange.bind(this, "password")}
                      value={this.state.fields["password"]}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["password"]}
                    </span>
                  </div>
                <div className="row" htmlFor="address1">Address:</div>
                  <div className="row">
                    <input
                      type="text"
                      placeholder="Enter Address"
                      refs="address1"
                      onChange={this.handleChange.bind(this, "address1")}
                      value={this.state.fields["address1"]}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["address1"]}
                    </span>
                  </div>
                <div className="row" htmlFor="address2">Address:</div>
                  <div className="row">
                    <input
                      type="text"
                      placeholder="Enter Unit/Apt/Suite"
                      refs="address2"
                      onChange={this.handleChange.bind(this, "address2")}
                      value={this.state.fields["address2"]}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["address2"]}
                    </span>
                  </div>
                <div className="row" htmlFor="city">City:</div>
                  <div className="row">
                    <input
                      type="text"
                      placeholder="Enter City"
                      refs="city"
                      onChange={this.handleChange.bind(this, "city")}
                      value={this.state.fields["city"]}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["city"]}
                    </span>
                </div>
                <div className="row" htmlFor="state">State:</div>
                  <div className="row">
                    <input
                      type="text"
                      placeholder="Enter State"
                      refs="state"
                      onChange={this.handleChange.bind(this, "state")}
                      value={this.state.fields["state"]}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["state"]}
                    </span>
                  </div>
                <div className="row" htmlFor="zip">Zip:</div>
                  <div className="row">
                    <input
                      type="text"
                      placeholder="Enter Zip"
                      refs="zip"
                      onChange={this.handleChange.bind(this, "zip")}
                      value={this.state.fields["zip"]}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["zip"]}
                    </span>
                  </div>
				  <br></br>
                <div className="row">
                  <button className="btn btn-primary" type="submit" disabled={this.state.disabled}>
                    {this.state.disabled ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </Col>

          <Col size="md-7">
            <div
              id="carouselExampleInterval"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-interval="10000">
                  <img
                    src="https://images.unsplash.com/photo-1496185524395-81f295f4859e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    class="w-100 d-block"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h3>"I met my best friend through ConcertBuddy!"</h3>
                    <p class="font-italic">Ben from Philadelphia</p>
                  </div>
                </div>

                <div class="carousel-item" data-interval="10000">
                  <img
                    src="https://images.unsplash.com/photo-1493308903033-e622ac815e5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1110&q=80"
                    class="w-100 d-block"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h3>
                      "I thought I was the only one with weird music taste until
                      ConcertBuddy."
                    </h3>
                    <p class="font-italic">Anna from Miami</p>
                  </div>
                </div>

                <div class="carousel-item" data-interval="10000">
                  <img
                    style={{ opacity: "0.6" }}
                    src="https://images.unsplash.com/photo-1442975433132-cb9580b88538?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    class="w-100 d-block"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h3>
                      "I didn't know anyone when I moved and went to shows
                      alone. Then I met a whole new group of friends through
                      ConcertBuddy!"
                    </h3>
                    <p class="font-italic">Amanda from Boston</p>
                  </div>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#carouselExampleInterval"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true" />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleInterval"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true" />
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
